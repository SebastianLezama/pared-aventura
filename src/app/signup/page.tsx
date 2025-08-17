import { Logo, LogoString } from '@/components/logo'
import SignUp from '@/components/sign-up'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-svh flex-col place-items-center justify-center gap-6 p-6 md:p-12">
      <div className="flex flex-col w-full items-center justify-center gap-6">
        <Link
            href="/"
            className='flex gap-2 items-center justify-center'
            aria-label="go home">
            <Logo className='size-15' />
            <LogoString />
        </Link>
      </div>
        <SignUp />
    </main>
  )
}

export default page