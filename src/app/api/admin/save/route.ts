import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// 用于静态导出兼容 - 静态构建时会生成空的响应
export const dynamic = 'force-static';

// Data file type mapping
const DATA_FILES: Record<string, string> = {
  homepage: 'homepage.json',
  'about-pi': 'about-pi.json',
  people: 'people.json',
  publications: 'publications.json',
  news: 'news.json',
  openings: 'openings.json',
  software: 'software.json',
  contact: 'contact.json',
};

export async function POST(request: NextRequest) {
  try {
    // Check if dev mode is enabled
    if (process.env.NEXT_PUBLIC_DEV_MODE !== 'true') {
      return NextResponse.json(
        { error: 'Dev mode is not enabled' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { dataType, data, itemId, arrayField } = body;

    if (!dataType || !DATA_FILES[dataType]) {
      return NextResponse.json(
        { error: 'Invalid data type' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'src', 'data', DATA_FILES[dataType]);
    
    // Read existing data
    const existingContent = await fs.readFile(filePath, 'utf-8');
    const existingData = JSON.parse(existingContent);

    let updatedData;
    
    if (itemId && arrayField) {
      // Update a specific item in an array
      if (Array.isArray(existingData[arrayField])) {
        existingData[arrayField] = existingData[arrayField].map((item: { id: string }) =>
          item.id === itemId ? { ...item, ...data } : item
        );
        updatedData = existingData;
      } else {
        return NextResponse.json(
          { error: `Array field ${arrayField} not found` },
          { status: 400 }
        );
      }
    } else if (arrayField && !itemId && data.id) {
      // Add new item to array
      if (Array.isArray(existingData[arrayField])) {
        existingData[arrayField].push(data);
        updatedData = existingData;
      } else {
        return NextResponse.json(
          { error: `Array field ${arrayField} not found` },
          { status: 400 }
        );
      }
    } else {
      // Update top-level fields
      updatedData = { ...existingData, ...data };
    }

    // Write back to file with pretty formatting
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), 'utf-8');

    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    console.error('Save error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to save data' },
      { status: 500 }
    );
  }
}

