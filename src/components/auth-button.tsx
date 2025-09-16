'use client'
import { createSupabaseClient, GetUser, SignOut } from '@/utils/supabase/client'
import React, { Dispatch, SetStateAction } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import { Session, User } from '@supabase/supabase-js'

export function AuthButton({isScrolled, user, loading, handleClick}: {isScrolled: Boolean, user: User | null,
    loading: boolean, handleClick: any
}) {
    
    
    function isLoggedIn() {
    return user?.user_metadata.email !== undefined
    }
    const username = user?.user_metadata.full_name
    const avatar = user?.user_metadata.avatar_url

    const isUser = isLoggedIn()


    // function handleClick() {
    //     SignOut()
    // }

    // if (isLoggedIn) {
        return (
            <>
                {!loading ? 
                (<>
                <Image alt="avatar"
                src={avatar}
                className='rounded-full'
                height={35}
                width={35}
                /> <br />
                <Button
                    asChild
                    size="sm"
                    variant="outline"
                    // disabled={loading}
                    className={cn('cursor-pointer', isScrolled && 'lg:hidden cursor-pointer')}
                    onClick={()=> handleClick()}
                >
                    <span>Deslogearse</span>
                </Button>
                </>)
                :
                <Button
                    asChild
                    size="sm"
                    className={cn('cursor-pointer',
                    // loading && 'lg:hidden',
                    isScrolled && 'lg:hidden cursor-pointer')}>
                    <Link href="/login">
                        <span>Logearse</span>
                    </Link>
                </Button>}
            </>
        )
    // } else return (
    // )
}