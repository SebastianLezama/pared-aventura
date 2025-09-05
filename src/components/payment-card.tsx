import {redirect} from "next/navigation";
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import api from "../app/api/mp-api";
import { Params } from "./content-5";
import { productLabels } from "@/utils/utils";
import Image from "next/image";
import MPLogo from "../assets/mp_logo.svg";
import { createClient } from "@/utils/supabase/server";
import { UUID } from "node:crypto";

const PaymentCard = async (props: {params: Params}) => {

  async function add(formData: FormData) {
    "use server";
    
    const user = (await createClient()).auth.getUser()
    const email = (await user).data.user?.email as string
    const userId = (await user).data.user?.id as UUID

    const message = formData.get("text") as string;
    const price = Number(formData.get("price") as string);
    const order = {email: email, kit: message, price: price, user_id: userId}
    const url = await api.message.submit(order);

    redirect(url);
  }

  const params = await(props).params;
  const id = params.id

    const label = productLabels[id].label
    const productImg = productLabels[id].img
    const productImg2 = productLabels[id].img2
    const productTomas = productLabels[id].tomas
    const productPaneles = productLabels[id].paneles
    const productColors = productLabels[id].colors
    const productAge = productLabels[id].age
    const productPrice = productLabels[id].price
    const torTar = productPaneles * 4

    const productDesc = [`${productPaneles} paneles de madera terciada`, `${productTomas} tomas de escalada`, `${productColors} colores de tomas para armar las rutas`, `Stickers adhesivos`, `Para niños y niñas de entre ${productAge} años` ]
    const productDesc2 = [`${productPaneles} paneles de madera terciada`, `${productTomas} tomas de escalada`, `${productColors} colores de tomas para armar las rutas`, `Stickers adhesivos`, `Para niños y niñas de entre ${productAge} años`, '1 Lave Allen', `${torTar} tarugos de 10mm`, `${torTar} tornillos y arandelas para amurar los paneles`, `${productTomas} tornillos M6 y arandelas para fijar las tomas` ]

  return (
    <form action={add} className="space-y-4">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">Encargue su kit {label}</h1>
          <p>Listo para amurar</p>
      </div>
      <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
            <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                <div className="space-y-2">
                        <Image className=" w-full inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 " src={productImg2} alt="cerro image" priority height={200} width={300}  />

                    

                </div>
            </div>

            <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)] align-middle align-center">
                <div className="grid mt-10 align-middle align-center gap-6 sm:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                          <h2 className="font-medium">Cerro {label}</h2>
                          <span className="my-3 block text-2xl font-semibold">${productPrice}</span>
                          <p className="text-muted-foreground text-sm">Hasta tres pagos</p>
                      </div>
                      <input
                          type="hidden"
                          name="text"
                          value={`Kit ${label}` } />
                      <input
                          type="hidden"
                          name="price"
                          value={ productPrice } />
                      <Button
                          className="w-full cursor-pointer"
                          type="submit"
                          >
                        Pagar con
                        <Image className="h-auto" src={MPLogo} alt="mp" height={80} width={100}/>
                      </Button>
                    </div>

                    <div>
                        <div className="text-sm font-medium">Incluye:</div>

                        <ul className="mt-4 list-outside space-y-3 text-sm">
                            {productDesc2.map((item, index) => (
                              <li
                              key={index}
                              className="flex items-center gap-2">
                                    <Check className="size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </form>

  )
}

export default PaymentCard