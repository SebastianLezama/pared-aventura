import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="flex py-16 md:py-32 justify-center h-full">
            <div className="mx-auto mt-16 max-w-8xl justify-center justify-items-center space-y-8 px-6 md:space-y-16">
                <h2 className="justify-center justify-items-center z-10 max-w-xl text-4xl font-medium lg:text-5xl">Conocenos!</h2>
                <div className="justify-center md:flex md:gap-12 lg:gap-20">
                    <div className="z-10 space-y-4 md:w-1/2 justify-items-center">
                        <p className= "text-justify ">
                            Somos Sebastián y Agustina, vivimos en Tigre, Buenos Aires. Este proyecto nació en 2025 con mucha ilusión, inspirado por la noticia de la llegada de nuestro primer hijo. Ese momento nos llevó a reflexionar sobre cómo queríamos que se desarrollara jugando, en sus primeros años de vida.<br />
                        </p>
                        <p className="text-justify font-medium">Sebastián practica escalada desde hace varios años y ha experimentado en primera persona los múltiples beneficios de este deporte: fortalecimiento físico, mejora de la coordinación y la concentración, y estimulación del pensamiento lógico al resolver los desafíos que presenta cada recorrido.</p>
                        <p className='text-justify'>Agustina, como psicóloga, se interesó en cómo la escalada también favorece el desarrollo de habilidades cognitivas y emocionales, como la toma de decisiones, la tolerancia a la frustración, la autoconfianza y la capacidad de superación.</p>
                        <p className="text-justify font-medium">Creemos que el juego y el movimiento son esenciales en la infancia, y que aprender a través de experiencias divertidas deja huellas valiosas. Además, sabemos lo importante que es hoy ofrecer alternativas que inviten a los niños a moverse, explorar y conectarse con su cuerpo, alejándolos por un rato de las pantallas para sumergirse en experiencias reales y estimulantes.</p>
                        <p className='text-justify'>Por eso, decidimos crear Pared Aventura, un espacio donde los niños y niñas puedan disfrutar de la escalada de manera segura y divertida, mientras desarrollan habilidades físicas y emocionales que les acompañarán toda la vida.</p>
                        <p className='text-justify'>Nos alegra profundamente haber creado una propuesta que permite a muchos niños y niñas acercarse a este deporte desde sus casas, de forma práctica, creativa, divertida y segura, transformando cada momento de juego en una oportunidad para crecer.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Agustina Pascali</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Licenciada en Psicología, especializada en Psicoterapias Contextuales </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Sebastian Lezama</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Desarrollador</p>
                            </div>
                        </div>
                    <div className="mt-12 h-fit md:-inset-y-12 md:inset-x-0 md:mt-0 px-20">
                        <div aria-hidden className=" z-1 to-background absolute inset-0 hidden px-20  md:block"></div>
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image src="https://zaixtvloxvtlauxdlrhg.supabase.co/storage/v1/object/sign/Images/about.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNThhYmJhMy1jMjRlLTQ2ZjAtYjI3Ni0xODhlODhjMWQ1OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvYWJvdXQucG5nIiwiaWF0IjoxNzU1MzgwNDg0LCJleHAiOjE3ODY5MTY0ODR9.6OjOWzo76L_urptkb7KN4winAcWeJ-61JDD3xbvMAFs" className="hidden rounded-[12px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="https://zaixtvloxvtlauxdlrhg.supabase.co/storage/v1/object/sign/Images/about.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNThhYmJhMy1jMjRlLTQ2ZjAtYjI3Ni0xODhlODhjMWQ1OTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvYWJvdXQucG5nIiwiaWF0IjoxNzU1MzgwNDg0LCJleHAiOjE3ODY5MTY0ODR9.6OjOWzo76L_urptkb7KN4winAcWeJ-61JDD3xbvMAFs" className="rounded-[12px] shadow dark:hidden" alt="payments illustration light" width={800} height={600} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
