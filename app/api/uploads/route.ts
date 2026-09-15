import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import { verifyJwtToken } from '@/lib/auth';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_FILES = 10;

const extensions: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};

export async function POST(request: Request) {
  try {
    const token = request.headers.get('cookie')?.split('admin-token=')[1]?.split(';')[0];
    if (!token || !(await verifyJwtToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const files = formData.getAll('files').filter((value): value is File => value instanceof File);

    if (files.length === 0) {
      return NextResponse.json({ error: 'Please select at least one image.' }, { status: 400 });
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json({ error: `You can upload up to ${MAX_FILES} images at a time.` }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadsDir, { recursive: true });

    const urls = await Promise.all(files.map(async (file) => {
      const extension = extensions[file.type];
      if (!extension) {
        throw new Error(`${file.name}: only JPG, PNG, WebP, and GIF images are allowed.`);
      }
      if (file.size === 0 || file.size > MAX_FILE_SIZE) {
        throw new Error(`${file.name}: images must be smaller than 8 MB.`);
      }

      const filename = `${randomUUID()}.${extension}`;
      await writeFile(path.join(uploadsDir, filename), Buffer.from(await file.arrayBuffer()));
      return `/uploads/${filename}`;
    }));

    return NextResponse.json({ urls }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to upload images.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
