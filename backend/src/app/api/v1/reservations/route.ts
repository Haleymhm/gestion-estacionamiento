import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '15', 10);

    if (isNaN(page) || page < 1 || isNaN(pageSize) || pageSize < 1) {
      return NextResponse.json(
        { message: 'Error: los parámetros "page" y "pageSize" deben ser números positivos.' },
        { status: 400 }
      );
    }

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const [reservations, total] = await prisma.$transaction([
      prisma.reservation.findMany({ skip, take }),
      prisma.reservation.count(),
    ]);

    const totalPages = Math.ceil(total / pageSize);

    return NextResponse.json({
      data: reservations,
      pagination: {
        totalRecords: total,
        totalPages,
        currentPage: page,
        pageSize,
      },
    });
  } catch (error) {
    console.error('GET /api/v1/reservations failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newReservation = await prisma.reservation.create({ data });
    return NextResponse.json(newReservation, { status: 201 });
  } catch (error) {
    console.error('POST /api/v1/reservations failed:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}