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

export async function DELETE(request: NextRequest) {
  try {
    // Check if dev mode is enabled
    if (process.env.NEXT_PUBLIC_DEV_MODE !== 'true') {
      return NextResponse.json(
        { error: 'Dev mode is not enabled' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { dataType, itemId, arrayField } = body;

    if (!dataType || !DATA_FILES[dataType]) {
      return NextResponse.json(
        { error: 'Invalid data type' },
        { status: 400 }
      );
    }

    if (!itemId || !arrayField) {
      return NextResponse.json(
        { error: 'itemId and arrayField are required' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'src', 'data', DATA_FILES[dataType]);
    
    // Read existing data
    const existingContent = await fs.readFile(filePath, 'utf-8');
    const existingData = JSON.parse(existingContent);

    if (!Array.isArray(existingData[arrayField])) {
      return NextResponse.json(
        { error: `Array field ${arrayField} not found` },
        { status: 400 }
      );
    }

    // Remove item from array
    existingData[arrayField] = existingData[arrayField].filter(
      (item: { id: string }) => item.id !== itemId
    );

    // Write back to file with pretty formatting
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf-8');

    return NextResponse.json({ success: true, data: existingData });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete data' },
      { status: 500 }
    );
  }
}

