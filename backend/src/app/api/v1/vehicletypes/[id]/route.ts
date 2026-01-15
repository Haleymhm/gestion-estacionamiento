import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const vehicleType = await prisma.vehicleType.findUnique({
      where: { id: params.id },
    });
    if (!vehicleType) {
      return NextResponse.json({ error: 'VehicleType not found' }, { status: 404 });
    }
    return NextResponse.json(vehicleType);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const data = await request.json();
    const updatedVehicleType = await prisma.vehicleType.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(updatedVehicleType);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    await prisma.vehicleType.delete({
      where: { id: params.id },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
