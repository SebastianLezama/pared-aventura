import { Logo, LogoIcon, LogoString } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import GoogleButton from './google-button'

export default function SignUp({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <section className={cn("flex bg-background px-4  dark:bg-transparent", className)} {...props}>
            <form
                action=""
                className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
                <div className="p-8 pb-6">
                        
                        <h1 className=" mb-1 mt-4 text-xl font-semibold">Cree una cuenta</h1>
                        <p className="text-sm">Bienvenido! Cree una cuenta para empezar</p>

                    <div className="mt-6 grid gap-3">
                        <GoogleButton />
                    </div>

                    <hr className="my-4 border-dashed" />

                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="firstname"
                                    className="block text-sm">
                                    Nombre
                                </Label>
                                <Input
                                    type="text"
                                    required
                                    name="firstname"
                                    id="firstname"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="lastname"
                                    className="block text-sm">
                                    Apellido
                                </Label>
                                <Input
                                    type="text"
                                    required
                                    name="lastname"
                                    id="lastname"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="block text-sm">
                                Email
                            </Label>
                            <Input
                                type="email"
                                required
                                name="email"
                                id="email"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="pwd"
                                className=" text-sm">
                                Contraseña
                            </Label>
                            <Input
                                type="password"
                                required
                                name="pwd"
                                id="pwd"
                                className="input sz-md variant-mixed"
                            />
                        </div>

                        <Button className="w-full  cursor-pointer">Continuar</Button>
                    </div>
                </div>

                <div className="text-center text-sm" >
                    <p className="text-accent-foreground text-center text-sm pb-6">
                        Tiene una cuenta?
                        <Button
                            asChild
                            variant="link"
                            className="px-2">
                            <Link href="/login">Inicie sesión</Link>
                        </Button>
                    </p>
                </div>
            </form>
        </section>
    )
}
