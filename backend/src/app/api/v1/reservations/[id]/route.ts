import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: params.id },
    });
    if (!reservation) {
      return NextResponse.json({ error: 'Reservation not found' }, { status: 404 });
    }
    return NextResponse.json(reservation);
  } catch (error) {
    console.error('GET /api/v1/reservations/[id] failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const data = await request.json();
    const updatedReservation = await prisma.reservation.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(updatedReservation);
  } catch (error) {
    console.error('PUT /api/v1/reservations/[id] failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    await prisma.reservation.delete({
      where: { id: params.id },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error('DELETE /api/v1/reservations/[id] failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
