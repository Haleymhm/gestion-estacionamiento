import { NextResponse } from 'next/server';

type ApiResponse<T> = {
    success: boolean;
    data: T | null;
    error: string | null;
};

export function apiResponse<T>(
    data: T | null,
    currStatus: number = 200,
    error: string | null = null
) {
    const responseBody: ApiResponse<T> = {
        success: !error,
        data,
        error,
    };

    return NextResponse.json(responseBody, { status: currStatus });
}
