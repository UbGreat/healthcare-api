// /* eslint-disable prettier/prettier */
//     // middleware.ts
//     import { NextResponse } from 'next/server';
//     import type { NextRequest } from 'next/server';

//     export function middleware(request: NextRequest) {
//       const origin = request.headers.get('origin');

//       // Allow specific origins
//       const allowedOrigins = ['http://localhost:4000', 'https://dhealth-frontend-8374.vercel.app', '*'];
//       if (origin && allowedOrigins.includes(origin)) {
//         const response = NextResponse.next();
//         response.headers.set('Access-Control-Allow-Origin', origin);
//         response.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT,OPTIONS');
//         response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
//         response.headers.set('Access-Control-Allow-Credentials', 'true');

//         // Handle preflight requests (OPTIONS)
//         if (request.method === 'OPTIONS') {
//           return new NextResponse(null, { status: 204, headers: response.headers });
//         }

//         return response;
//       }

//       // If the origin is not allowed, you can choose to block the request
//       // or set a default CORS policy for non-allowed origins.
//       // For example, to block:
//       // return new NextResponse(null, { status: 403 });

//       // Or, if no specific CORS headers are needed for this request,
//       // simply proceed to the next handler.
//       return NextResponse.next();
//     }

//     // Configure the middleware to run on specific paths (e.g., all API routes)
//     export const config = {
//       matcher: '/api/:path*',
//     };