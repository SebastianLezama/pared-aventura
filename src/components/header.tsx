'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { createSupabaseClient } from '@/utils/supabase/client'
import type { Session, User } from '@supabase/supabase-js'
import { AuthButton } from './auth-button'

const menuItems = [
{ name: 'Info', href: '/#info' },
{ name: 'Productos', href: '/#products' },
{ name: 'Sobre Nosotros', href: '/about' },
]


export const Header = () => {
const [menuState, setMenuState] = useState(false)
const [isScrolled, setIsScrolled] = useState(false)
const [loading, setLoading] = useState(true)
const pathname = usePathname()
const supabase = createSupabaseClient()
const [session, setSession] = useState<Session | null>(null)
const [user, setUser] = useState<User | null>(null)

const fetchSession = useCallback(async () => {
    try {
        const { data, error } = await supabase.auth.getSession()
                if (error) {
            console.log(error)
            throw error
        }
        if (data) {
            setUser(session?.user || null);
            setSession(data.session)
        }
    } catch (error) {
        alert("Error loading data")
    }
}, [user, supabase])

useEffect(() => {
    fetchSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user || null);
    });

    return () => {
        subscription.unsubscribe();
    };
}, [user, fetchSession])

useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}, [])
return (
    <header className={cn(pathname === '/login' && 'hidden' || pathname === '/signup' && 'hidden')} >
        <nav
            data-state={menuState && 'active'}
            className="fixed z-20 w-full px-2">

            <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-3">
                    <div className="flex w-full justify-between lg:w-auto">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex space-x-2">
                            <Logo />
                        </Link>
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex space-x-2">
                            <div className="lg:grid items-center space-x-2 sm:flex-row sm:justify-center">
                                <span className="text-sm font-script ">Mini Boulder</span>

                                <span className="text-lg mt-0 font-casual lg:inline-block">Pared Aventura</span>
                            </div>
                        </Link>

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                        </button>
                    </div>

                    <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                        <ul className="flex gap-8 text-md">
                            {menuItems.map((item, index) => (
                                <li key={index}
                                >
                                    <Link
                                    onClick={() => setMenuState(!menuState)}
                                        href={item.href}

                                        className={ cn(pathname === item.href && 'text-accent-foreground' || 'text-muted-foreground hover:text-accent-foreground block, duration-150 ')}>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                        <div className="lg:hidden">
                            <ul className="space-y-6 text-base">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                            {/* <ModeToggle /> */}
                            {/* { !isLoggedIn &&
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className={cn(isScrolled && 'lg:hidden')}>
                                <Link href="/login">
                                    <span>Login??</span>
                                </Link>
                            </Button>} */}
                            <AuthButton isScrolled={isScrolled} user={user}  loading={loading}/>
                            {/* <Button
                                asChild
                                size="sm"
                                className={cn(isScrolled && 'lg:hidden')}>
                                <Link href="#">
                                    <span>Registrarse</span>
                                </Link>
                            </Button> */}
                            <Button
                                asChild
                                size="sm"
                                className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                <Link href="#">
                                    <span>Empecemos</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
}
