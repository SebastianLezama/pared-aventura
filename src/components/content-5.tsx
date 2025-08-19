import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link';
import { use } from 'react';
import { param } from 'motion/react-client';


export type Params = Promise<{ id: string }>

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ContentProduct(props: {params: Params}) {

    const params = await(props).params;
    const cerro = params.id;
    console.log(cerro)

    type ProductLabel = { label: string; img: string; img2: string; tomas: number; paneles: number; colors: number; age: string }


    const productLabels: Record<string, ProductLabel> = {
        champaqui: {label: "Champaquí", img: "https://zaixtvloxvtlauxdlrhg.supabase.co/storage/v1/object/sign/Images/Champaqui.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNThhYmJhMy1jMjRlLTQ2ZjAtYjI3Ni0xODhlODhjMWQ1OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvQ2hhbXBhcXVpLnBuZyIsImlhdCI6MTc1NTU0ODc2MCwiZXhwIjoxNzg3MDg0NzYwfQ.Ut1rURUgFQ4XW0pJAgBRq6jIPW9blUjd4gITYTVO3tM", img2: "https://zaixtvloxvtlauxdlrhg.supabase.co/storage/v1/object/sign/Images/real_4paneles_2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNThhYmJhMy1jMjRlLTQ2ZjAtYjI3Ni0xODhlODhjMWQ1OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvcmVhbF80cGFuZWxlc18yLnBuZyIsImlhdCI6MTc1NTU1MTk5NSwiZXhwIjoxNzg3MDg3OTk1fQ.gDculJhDYs0O1C2A7VEg-n1fXTO-dvD-Z3hwdE7PpkU", tomas: 20, paneles: 4, colors: 5, age: "3 a 6"},
        aconcagua: {label: "Aconcagua", img: "https://zaixtvloxvtlauxdlrhg.supabase.co/storage/v1/object/sign/Images/Aconcagua.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNThhYmJhMy1jMjRlLTQ2ZjAtYjI3Ni0xODhlODhjMWQ1OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvQWNvbmNhZ3VhLnBuZyIsImlhdCI6MTc1NTU0ODc3NSwiZXhwIjoxNzg3MDg0Nzc1fQ.5w819TvgtofvzEZtrhuSAgiISaKC096dWl4KUORTG4w", img2: "https://zaixtvloxvtlauxdlrhg.supabase.co/storage/v1/object/sign/Images/dibujo_6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNThhYmJhMy1jMjRlLTQ2ZjAtYjI3Ni0xODhlODhjMWQ1OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvZGlidWpvXzYucG5nIiwiaWF0IjoxNzU1NTUzMjExLCJleHAiOjE3ODcwODkyMTF9.Q6dA36i1JzcFvpvDMUkVbWubtnbBfjANENaoWv8iKeE", tomas: 30, paneles: 6, colors: 6, age: "3 a 8"},
    }

    const product = productLabels[cerro].label
    const productImg = productLabels[cerro].img
    const productImg2 = productLabels[cerro].img2
    const productTomas = productLabels[cerro].tomas
    const productPaneles = productLabels[cerro].paneles
    const productColors = productLabels[cerro].colors
    const productAge = productLabels[cerro].age

    return (
        <main className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Kit Cerro {product}</h2>
                    <p>Recomendado para niños y niñas de entre {productAge} años.</p>
                </div>
                <div className="mx-auto flex justify-between p-2 text-center">

                <Image className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 " src={productImg} alt="cerro image" height={400} width={600} loading="lazy" />
                
                </div>

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Diseño</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{productPaneles} paneles hexagonales de 60cm hechos en madera terciada agujereados listos para colocar.
</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Versatilidad</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{productTomas} tomas de escalada de {productColors} colores para posicionar en los paneles y armar tus rutas.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Seguridad</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Tornillos de 6mm, kit de instalación y llave Allen para la colocación de las tomas más instructivo de uso y sugerencias de rutas.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Crecimiento</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Stickers para pegar en los paneles y promover el refuerzo positivo tras los logros alcanzados.</p>
                    </div>
                </div>
            </div>
            <section className="py-16 md:py-32">
                        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Descripción</h2>
                            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                                <div className="relative mb-6 sm:mb-0">
                                    <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                                        <Image src={productImg2} className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                                    </div>
                                </div>
            
                                <div className="relative space-y-4">
                                    <p className="text-muted-foreground">
                                        Los kits de Pared Aventura están diseñados para fomentar la actividad física y el juego sin pantallas en los niños y niñas. 
                                        <span className="text-accent-foreground font-bold">Es una excelente manera de promover la escalada segura y divertida.</span> 
                                    </p>
                                    <p className="text-muted-foreground">Tené en cuenta que en escalada deportiva el
                                    propósito en la elección de los colores de las
                                    tomas, tiene la siguiente lógica: uno debe escalar
                                    sujeto de las tomas de un mismo color, cualquiera sea. Para
                                    niños, la colocación de los pies es libre.</p>
            
                                    <div className="pt-6">
                                        <blockquote className="border-l-4 pl-4">
                                                <span className="text-accent-foreground font-bold">
                                                    Escalada en niños
                                                    </span>
                                            <p>Para los más chiquitos, el juego de
                                            escalada puede ser 100% libre, es decir que no
                                            necesariamente tienen que seguir un color
                                            específico. Pero en la medida en la que puedan,
                                            se los puede ir desafiando en el seguimiento de
                                            un color.
                                                </p>
            
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Encargue el kit {product}</h2>
                </div>
                <div className="mt-8 md:mt-20">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-2xl font-semibold">Suite Enterprise</h3>
                                <p className="mt-2 text-lg">For your company of any size</p>
                                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                                    <span className="text-4xl">$</span>234
                                </span>

                                <div className="flex justify-center">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href="#">Get started</Link>
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-12 text-sm">Includes : Security, Unlimited Storage, Payment, Search engine, and all features</p>
                            </div>
                            <div className="relative">
                                <ul
                                    role="list"
                                    className="space-y-4">
                                    {['First premium advantage', 'Second advantage weekly', 'Third advantage donate to project', 'Fourth, access to all components weekly'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground mt-6 text-sm">Team can be any size, and you can add or switch members as needed. Companies using our platform include:</p>
                                <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                        alt="Nvidia Logo"
                                        height="20"
                                        width="auto"
                                    />
                                    <img
                                        className="h-4 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/column.svg"
                                        alt="Column Logo"
                                        height="16"
                                        width="auto"
                                    />
                                    <img
                                        className="h-4 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/github.svg"
                                        alt="GitHub Logo"
                                        height="16"
                                        width="auto"
                                    />
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/nike.svg"
                                        alt="Nike Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                    
        </main>
    )
}
