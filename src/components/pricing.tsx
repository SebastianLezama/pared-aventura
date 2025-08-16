import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Nuestros Productos</h1>
                    <p>Creemos que el juego y el movimiento son esenciales en la infancia, y que aprender a través de experiencias divertidas deja huellas valiosas.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card className='bg-gray-100 dark:bg-gray-800'>
                        <CardHeader>
                            <CardTitle className="font-medium">Cerro Champaquí</CardTitle>

                            <span className="my-3 block text-2xl font-semibold">$250.000</span>

                            <CardDescription className="text-sm">Kit para 3 a 5 años</CardDescription>
                            <Button
                                asChild
                                // variant="outline"
                                className="mt-4 w-full">
                                <Link href="">Encargar</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['4 Tableros de madera terciada', '20 Tomas de escalada', '4 Colores de tomas', 'Kit de instalacion', 'Kit de colocación de tomas'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="relative bg-gray-100 dark:bg-gray-800">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>

                        <CardHeader>
                            <CardTitle className="font-medium">Cerra Aconcagua</CardTitle>

                            <span className="my-3 block text-2xl font-semibold">$350.000</span>

                            <CardDescription className="text-sm">Kit para 5 a 8 años</CardDescription>

                            <Button
                                asChild
                                className="mt-4 w-full">
                                <Link href="">Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['6 Tableros de madera terciada', '30 Tomas de escalada', '5 Colores de tomas', 'Kit de instalacion', 'Kit de colocación de tomas'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col bg-gray-100 dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="font-medium">Startup</CardTitle>

                            <span className="my-3 block text-2xl font-semibold">$29 / mo</span>

                            <CardDescription className="text-sm">Per editor</CardDescription>

                            <Button
                                asChild
                                // variant="outline"
                                className="mt-4 w-full">
                                <Link href="">Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Pro Plan', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
