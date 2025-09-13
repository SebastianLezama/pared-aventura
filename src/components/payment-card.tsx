import {redirect} from "next/navigation";
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import api from "../app/api/mp-api";
import { Params } from "./content-product";
import { productLabels } from "@/utils/utils";
import Image from "next/image";
import MPLogo from "../assets/mp_logo.svg";
import { createClient } from "@/utils/supabase/server";
import { UUID } from "node:crypto";
import { Logo } from "./logo";

const PaymentCard = async (props: {params: Params}) => {

  async function add(formData: FormData) {
    "use server";

    const supabase = await createClient()

    // const isAuthenticated = (await supabase.auth.getSession()).data.session?.user ? true : false

    // if (!isAuthenticated) {
    //   redirect("/login")
    // }
    
    const user = supabase.auth.getUser()
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
    <>
    <section className="relative py-16 md:py-32">
      <form action={add} className="space-y-4">
        <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">Encargue su kit {label}</h1>
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
                        <input
                          type="hidden"
                          name="text"
                          value={`Kit ${label}` } />
                        <input
                          type="hidden"
                          name="price"
                          value={ productPrice } />

                        <div className="flex justify-center">
                          <Button
                          className="w-full cursor-pointer"
                          type="submit"
                          >
                          Pagar con
                          <Image className="h-auto" src={MPLogo} alt="mp" height={80} width={100}/>
                          </Button>
                        </div>

                        <p className="text-muted-foreground mt-12 my-4 text-sm">Incluye: tarugos y tornillos para amurar los paneles y tornillos y arandelas para fijar las tomas</p>
                        </div>
                        <div className="relative">
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
        </form>
      </section>
    </>

  )
}

export default PaymentCard