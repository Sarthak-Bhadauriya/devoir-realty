import { NextResponse } from 'next/server';
import { getBlogs, saveBlogs } from '@/lib/json-db';
import { verifyJwtToken } from '@/lib/auth';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const token = req.headers.get('cookie')?.split('admin-token=')[1]?.split(';')[0];
    if (!token || !(await verifyJwtToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    
    const blogs = getBlogs();
    const initialLength = blogs.length;
    
    const filteredBlogs = blogs.filter((b: any) => b.id !== id);
    
    if (filteredBlogs.length === initialLength) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    if (saveBlogs(filteredBlogs)) {
      return NextResponse.json({ success: true });
    } else {
      throw new Error('Failed to save to JSON');
    }
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
