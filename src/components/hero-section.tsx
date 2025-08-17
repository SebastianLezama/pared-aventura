import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { Logo } from './logo'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            {/* <HeroHeader /> */}
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_80%_100%,transparent_0%,var(--color-background)_45%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                {/* <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-primary dark:hover:border-t-border group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm font-bold">Mini Boulder para Niños - Diversión y Aprendizaje en Cada Escalada</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-grey dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup> */}

                                    <AnimatedGroup  variants={transitionVariants} className='mt-8 grid  items-center justify-center justify-items-center gap-2 md:flex md:flex-row' >
                                        <Logo className='justify-items-center xl:size-80 size-60'/>
                                        <div className="mt-0 grid items-center justify-center gap-2">
                                            <TextEffect
                                                preset="fade-in-blur"
                                                speedSegment={0.3}
                                                as="h1"
                                                className="mt-0 text-balance text-6xl md:text-5xl xl:text-[5.25rem] font-script">
                                                Mini Boulder
                                            </TextEffect>
                                    {/* <Logo className='size-120'/> */}
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="h1"
                                        className="mt-4 text-balance text-6xl md:text-5xl lg:mt-8 xl:text-[4.25rem] font-casual">
                                        Pared Aventura
                                    </TextEffect>
                                    </div>
                                    </AnimatedGroup>
                                    <TextEffect
                                        per="line"
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        delay={0.5}
                                        as="p"
                                        className="mx-auto max-w-2xl text-balance text-3xl font-script">
                                        Para desafiarse jugando
                                    </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Hacer pedido</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">
                                                Ver más
                                            </span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-8 overflow-hidden px-2  sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background relative hidden rounded-2xl dark:block"
                                        src="https://zaixtvloxvtlauxdlrhg.supabase.co/storage/v1/object/sign/Images/4_paneles_kids.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNThhYmJhMy1jMjRlLTQ2ZjAtYjI3Ni0xODhlODhjMWQ1OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvNF9wYW5lbGVzX2tpZHMucG5nIiwiaWF0IjoxNzU1MzgxMDUyLCJleHAiOjE3ODY5MTcwNTJ9.s_4_gv-Sld6pUIXbSf137hV-3a4wANfL3Z6p5YlQv8s"
                                        alt="app screen"
                                        width="1536"
                                        height="1024"
                                    />
                                    <Image
                                        className="z-2 border-border/25 relative rounded-2xl border dark:hidden"
                                        src="https://zaixtvloxvtlauxdlrhg.supabase.co/storage/v1/object/sign/Images/4_paneles_kids.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNThhYmJhMy1jMjRlLTQ2ZjAtYjI3Ni0xODhlODhjMWQ1OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvNF9wYW5lbGVzX2tpZHMucG5nIiwiaWF0IjoxNzU1MzgxMDUyLCJleHAiOjE3ODY5MTcwNTJ9.s_4_gv-Sld6pUIXbSf137hV-3a4wANfL3Z6p5YlQv8s"
                                        alt="app screen"
                                        width="1536"
                                        height="1024"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}
