import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {

  const supabase = createClient()
    const session = (await supabase).auth.getSession()
    console.log(await session)
  
    if ((await session).data.session?.user.email !== undefined) {
      console.log('User is logged in:', (await session).data.session?.user.email);
    } else {
      console.log('No active session found')
    }

  //   return await updateSession(request)


  const response = NextResponse.next();


  return response;
}

export const config = {
  matcher: '/products/*',
};
