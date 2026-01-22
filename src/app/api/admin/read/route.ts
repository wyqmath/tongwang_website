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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const dataType = searchParams.get('type');

    if (!dataType || !DATA_FILES[dataType]) {
      return NextResponse.json(
        { error: 'Invalid data type' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'src', 'data', DATA_FILES[dataType]);
    const content = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(content);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Read error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to read data' },
      { status: 500 }
    );
  }
}

