import {redirect} from "next/navigation";
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import api from "../../../api/mp-api";
import { Form } from "@/components/ui/form";
import PaymentCard from "@/components/payment-card";


export const dynamic = "force-static";

// export default async function HomePage() {
//   const messages = await api.message.list();

//   async function add(formData: FormData) {
//     "use server";

//     const message = formData.get("text") as string;
//     const url = await api.message.submit(message);

//     redirect(url);
//   }

//   return (
//     <section className="grid gap-8">
//       <form action={add}>
//         <textarea name="text" placeholder="Hola perro" rows={3} />
//         <button type="submit">Enviar</button>
//       </form>
//       <ul>
//         {messages.map((message) => (
//           <li key={message.id}>{message.text}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }


export default function Payment({ params }: { params: Promise<{ id: string  }> }) {

    return (
        <main className="my-auto py-16 md:py-32 ">
            <div className="mx-auto max-w-5xl px-6">
                
                <PaymentCard params={params}/>
                
            </div>
        </main>
    )
}