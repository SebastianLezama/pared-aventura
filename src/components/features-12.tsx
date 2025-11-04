'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/magicui/border-beam'
import { FEATURE_01, FEATURE_02, FEATURE_03, FEATURE_04 } from '@/assets/images'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: 'https://sdepasczvfemrliuatcb.supabase.co/storage/v1/object/public/images/feature_01.png',
            alt: 'Que es Mini Boulder',
        },
        'item-2': {
            image: 'https://sdepasczvfemrliuatcb.supabase.co/storage/v1/object/public/images/feature_02.png',
            alt: 'Beneficios de la escalada',
        },
        'item-3': {
            image: 'https://sdepasczvfemrliuatcb.supabase.co/storage/v1/object/public/images/feature_03.png',
            alt: 'Por que stickers',
        },
        'item-4': {
            image: 'https://sdepasczvfemrliuatcb.supabase.co/storage/v1/object/public/images/feature_04.png',
            alt: 'Nuestros Kits',
        },
    }

    const items = [
        { value: 'item-1',
        label: '¿Qué es el Mini Boulder Pared Aventura?',
        content: 'En Pared Aventura ofrecemos paneles y tomas de escalada para niños y niñas, listos para colocar en casa, guardería o escuela.',
        svg: <Database className="size-4" />
        },
        { value: 'item-2',
        label: 'Beneficios de la escalada',
        content: <span>

        A nivel físico, cada movimiento implica un trabajo coordinado de fuerza, equilibrio y flexibilidad. Al escalar, se fortalece la musculatura, se estimula el desarrollo óseo y se mejora la coordinación motriz. También se potencia la conciencia corporal y se fortalece el sistema propioceptivo y vestibular, fundamentales para el control del cuerpo en el espacio.
        <p>

        En el plano cognitivo, la escalada es un ejercicio constante de atención, concentración y resolución de problemas. Cada recorrido es un reto que requiere planificación, pensamiento lógico y creatividad para encontrar el mejor camino. Los niños aprenden a evaluar opciones, adaptarse a cambios inesperados y pensar estratégicamente mientras juegan.
        </p>
        <p>
        En lo emocional, escalar favorece la autoconfianza a través de los logros alcanzados y fomenta la tolerancia a la frustración, al aprender que equivocarse y volver a intentarlo es parte natural del proceso. Además, es una vía saludable para canalizar energía, liberar tensiones y regular las emociones
        </p>
        </span>,
        svg: <Fingerprint className="size-4" />
        },
        { value: 'item-3',
        label: '¿Por qué usamos stickers?',
        content: <span>

        Desde la psicología infantil, el refuerzo positivo es una de las formas más efectivas de motivar conductas saludables y reforzar aprendizajes. Cada vez que un niño o niña completa un recorrido, inventa un camino nuevo, se anima a intentarlo de nuevo o simplemente se esfuerza.
        <p>
            ¡Puede elegir un sticker y pegarlo en su panel de escalada como una medalla simbólica!
        </p>
        Esto reafirma su confianza, aumenta su motivación, le permite visualizar sus avances y convierte el juego en una experiencia significativa y positiva.

        </span>,
        svg: <IdCard className="size-4" />
        },
        { value: 'item-4',
        label: 'Nuestros Kits',
        content: 'Podés elegir entre dos opciones de kits, la diferencia entre ellos radica en la cantidad de paneles y tomas de escalada. Ambos kits están diseñados para adaptarse a las necesidades de los niños y niñas, fomentando su desarrollo y diversión.',
        svg: <ChartBarIncreasingIcon className="size-4" />
        },
    ]

    return (
        <section id='info' className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">¿Por qué jugar a escalar?</h2>
                    <p>La escalada no es solo un juego: es una experiencia integral que estimula el desarrollo físico, cognitivo y emocional de los niños y niñas.</p>
                </div>

                <div className="grid gap-12 sm:px-20 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        {items.map((item) => (
                            <AccordionItem key={item.value} value={item.value}><AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    {item.svg}
                                    {item.label}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                                ))}
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-2xl border p-3">
                        <div className="w-10 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-180/220 bg-background relative w-[calc(3/4*100%+5rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={1200}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={400}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
