import {redirect} from "next/navigation";
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import api from "../../../api/mp-api";
import { Form } from "@/components/ui/form";
import PaymentCard from "@/components/payment-card";


export const dynamic = "force-static";


export default function Payment({ params }: { params: Promise<{ id: string  }> }) {

    return (
        <main className="my-auto py-16 md:py-32 ">
            <div className="mx-auto max-w-5xl px-6">
                
                <PaymentCard params={params}/>
                
            </div>
        </main>
    )
}