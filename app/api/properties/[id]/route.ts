import { NextResponse } from 'next/server';
import { getProperties, saveProperties } from '@/lib/json-db';
import { verifyJwtToken } from '@/lib/auth';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const token = req.headers.get('cookie')?.split('admin-token=')[1]?.split(';')[0];
    if (!token || !(await verifyJwtToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    
    const properties = getProperties();
    const initialLength = properties.length;
    
    const filteredProperties = properties.filter((p: any) => p.id !== id);
    
    if (filteredProperties.length === initialLength) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 });
    }

    if (saveProperties(filteredProperties)) {
      return NextResponse.json({ success: true });
    } else {
      throw new Error('Failed to save to JSON');
    }
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete property' }, { status: 500 });
  }
}
