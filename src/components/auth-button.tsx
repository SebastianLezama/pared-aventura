'use client'
import { createSupabaseClient, GetUser, SignOut } from '@/utils/supabase/client'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Session, User } from '@supabase/supabase-js'
import Link from 'next/link'

export function AuthButton({isScrolled}: {isScrolled: Boolean
}) {
    const supabase = createSupabaseClient()
    const [user, setUser] = React.useState<User | null>(null)
    const [isUser, setIsUser] = React.useState(false)
    async function fetchUser() {
        const {data} = await supabase?.auth.getUser()
        const user = data?.user || null
        return user
    }

    useEffect(() => {
        async function fetchAndSetUser() {
            const user = await fetchUser()
            if (user) {
                setUser(user)
                setIsUser(true)
            }
        }
        fetchAndSetUser()
    }, [])
    

    const username = user?.user_metadata.full_name
    const avatar = user?.user_metadata.avatar_url



    function handleClick() {
        SignOut()
    }

    // if (isLoggedIn) {
        return (
            <>
                {isUser ? 
                <>
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
                </>
                :
                <>
                <Button
                    asChild
                    size="sm"
                    className={cn('cursor-pointer',
                    isScrolled && 'lg:hidden cursor-pointer')}
                    >
                    <Link href="/login">
                        Logearse
                    </Link>
                </Button>
                </>
                }
            </>
        )
    // } else return (
    // )
}