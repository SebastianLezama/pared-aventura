import { createSupabaseClient } from '@/utils/supabase/client'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export default async function AuthButton ({isScrolled}: {isScrolled: Boolean}) {
  
    // const { data: session } = useSession()
    // const {getSession, getUser} = await createClient().auth
    const supabase = await createClient()
    const session = await supabase.auth.getSession()
    const {data : user} = await supabase.auth.getUser()
    console.log(user)

    if (session) {
      return (<>
      {user} <br />
        <Button
          asChild
          size="sm"
          variant="outline"
          className={cn(isScrolled && 'lg:hidden')}
          // onClick={}
          >
            <span>Deslogearse</span>
        </Button>
      </>
      )
    }
    return (
        <Button
            asChild
            size="sm"
            className={cn(isScrolled && 'lg:hidden')}>
            <Link href="/login">
                <span>Logearse</span>
            </Link>
        </Button>
    )
  
  
}
