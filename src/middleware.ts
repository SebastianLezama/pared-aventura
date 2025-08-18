import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set the allowed origin (replace with your actual client origin)
  response.headers.append('Access-Control-Allow-Origin', '*'); // Or '*' for any origin (use with caution)
  response.headers.append('Access-Control-Allow-Credentials', 'true');
  response.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  response.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests (OPTIONS)
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204, headers: response.headers });
  }

  return response;
}

export const config = {
  matcher: '/api/:path*', // Apply middleware to all API routes
};