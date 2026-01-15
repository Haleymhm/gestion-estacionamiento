import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const parking = await prisma.parking.findUnique({
      where: { id: params.id },
    });
    if (!parking) {
      return NextResponse.json({ error: 'Parking not found' }, { status: 404 });
    }
    return NextResponse.json(parking);
  } catch (error) {
    console.error('GET /api/v1/parkings/[id] failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const data = await request.json();
    const updatedParking = await prisma.parking.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(updatedParking);
  } catch (error) {
    console.error('PUT /api/v1/parkings/[id] failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    await prisma.parking.delete({
      where: { id: params.id },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error('DELETE /api/v1/parkings/[id] failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
