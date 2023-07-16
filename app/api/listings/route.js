import { NextResponse } from 'next/server';
import listings from './data.json';


export async function GET(request) {
    return NextResponse.json(listings)
} 