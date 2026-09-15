import { NextResponse } from 'next/server';
import { getBlogs, saveBlogs } from '@/lib/json-db';
import { verifyJwtToken } from '@/lib/auth';

// GET all blogs
export async function GET() {
  try {
    const blogs = getBlogs();
    return NextResponse.json(blogs.reverse());
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// POST a new blog (Admin only)
export async function POST(req: Request) {
  try {
    const token = req.headers.get('cookie')?.split('admin-token=')[1]?.split(';')[0];
    if (!token || !(await verifyJwtToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    
    if (!data.slug) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    data.id = data.slug + '-' + Date.now().toString().slice(-4);
    data.createdAt = new Date().toISOString();
    
    const blogs = getBlogs();
    blogs.push(data);

    if (saveBlogs(blogs)) {
      return NextResponse.json(data, { status: 201 });
    } else {
      throw new Error('Failed to save to JSON');
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create blog' }, { status: 500 });
  }
}
