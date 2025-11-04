import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link';

import { Logo } from './logo';
import { productLabels } from "@/utils/utils";



export type Params = Promise<{ id: string }>

// interface PageProps {
//     params: Promise<{ id: string }>;
// }

export default async function ContentProduct(props: {params: Params}) {

    const params = await(props).params;
    const cerro = params.id;
    console.log(cerro)

    const product = productLabels[cerro].label
    const productImg = productLabels[cerro].img
    const productImg2 = productLabels[cerro].img2
    const productTomas = productLabels[cerro].tomas
    const productPaneles = productLabels[cerro].paneles
    const productColors = productLabels[cerro].colors
    const productAge = productLabels[cerro].age
    const productPrice = productLabels[cerro].price

    const productDesc = [`${productPaneles} paneles de madera terciada`, `${productTomas} tomas de escalada`, `${productColors} colores de tomas para armar las rutas`, `${productColors} colores de tomas para armar las rutas`, `Para niños y niñas de entre ${productAge} años` ]

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
                        <p className="text-muted-foreground text-sm">{productPaneles} paneles hexagonales de 60cm hechos en madera terciada listos para colocar. Con agujeros para colocar las tomas de escalada en varias posiciones.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Versatilidad</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{productTomas} tomas de escalada de {productColors} colores para posicionar en los paneles como vos quieras y armar tus rutas según el color.</p>
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
                                        Los kits de Pared Aventura están diseñados para fomentar la actividad física y el juego sin pantallas para los niños y niñas.
                                        <br/>
                                        <br/>
                                        <span className="text-accent-foreground font-bold"> Es una excelente manera de promover la escalada segura y divertida.</span> 
                                    </p>
                                    <p className="text-muted-foreground">Tené en cuenta que en escalada deportiva el
                                    propósito en la elección de los colores de las
                                    tomas tiene la siguiente lógica: uno debe escalar
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
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-3xl">Kit Cerro {product}</h2>
                </div>
                <div className="mt-8 md:mt-20">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-2xl font-semibold">Kit de instalacion</h3>
                                <p className="mt-2 text-lg">Listo para amurar y armar</p>
                                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                                    <span className="text-4xl">$</span>{productPrice}
                                </span>

                                <div className="flex justify-center">
                                    <Button
                                        asChild
                                        size="lg">
                                        <Link href={`/products/${cerro}/payment`}>Empecemos</Link>
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-12 my-4 text-sm">Incluye: tarugos y tornillos para amurar los paneles y tornillos y arandelas para fijar las tomas</p>
                            </div>
                            <div className="relative">
                                <ul
                                    role="list"
                                    className="space-y-4">
                                    {productDesc.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground mt-6 text-sm">Para armar, jugar, aprender y crecer.</p>
                                <div className="mt-6 flex flex-wrap items-center gap-6">
                                    <Logo />
                                    <div className="lg:grid items-center space-x-2 sm:flex-row sm:justify-center">
                                        <span className="text-sm font-script ">Mini Boulder</span>

                                        <span className="text-lg mt-0 font-casual lg:inline-block">Pared Aventura</span>
                                    </div>
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
