import { NextResponse } from 'next/server';
import { getProperties, saveProperties } from '@/lib/json-db';
import { verifyJwtToken } from '@/lib/auth';

// GET all properties
export async function GET() {
  try {
    const properties = getProperties();
    // Sort by newest first? Since it's JSON, we can just reverse it if needed, or leave it as is.
    return NextResponse.json(properties.reverse());
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}

// POST a new property (Admin only)
export async function POST(req: Request) {
  try {
    // Check auth
    const token = req.headers.get('cookie')?.split('admin-token=')[1]?.split(';')[0];
    if (!token || !(await verifyJwtToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    
    // Auto-generate slug if not provided
    if (!data.slug) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    // Generate unique ID
    data.id = data.slug + '-' + Date.now().toString().slice(-4);
    
    const properties = getProperties();
    properties.push(data); // Add to end

    if (saveProperties(properties)) {
      return NextResponse.json(data, { status: 201 });
    } else {
      throw new Error('Failed to save to JSON');
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create property' }, { status: 500 });
  }
}
