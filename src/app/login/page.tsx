'use client'
import { LoginForm } from "@/components/login-form"
import Link from "next/link"
import { Logo, LogoString } from "@/components/logo"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  const pathname = usePathname()
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-12">
      <div className="flex flex-col w-full items-center gap-6">
        <Link
            href="/"
            className='flex gap-2 items-center justify-center'
            aria-label="go home">
            <Logo className='size-15' />
            <LogoString/>
        </Link>
      </div>
        <LoginForm className={cn(pathname === "/signup" && 'hidden')} />
        
    </main>
  )
}
