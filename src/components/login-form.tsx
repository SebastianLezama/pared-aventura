import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import OneTapComponent from "./oneTap"
import { createSupabaseClient } from "@/utils/supabase/client"
import GoogleButton from "./google-button"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const supabase = createSupabaseClient()
  
  return (
    <div className={cn("flex flex-col gap-6 min-w-sm ", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Bienvenido!</CardTitle>
          <CardDescription>
            Inicie sesión con su cuenta de Google
          </CardDescription>
        </CardHeader>
        <CardContent>
                <GoogleButton />
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <OneTapComponent/>
                
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  o continue con su email
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Contraseña</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      ¿Olvidó su contraseña?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full hover:cursor-pointer">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm">
                ¿No tiene una cuenta?{" "}
                <Button
                    asChild
                    variant="link"
                    className="px-2">
                    <Link href="/signup">Registarse</Link>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      {/* <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  )
}
