import {Payment} from "mercadopago";
import {revalidatePath} from "next/cache";

import api, {mercadopago} from "../mp-api";

export async function POST(request: Request) {
  
  const body: {data: {id: string}} = await request.json();
  const payment = await new Payment(mercadopago).get({id: body.data.id});

  if (payment.status === "approved") {
    await api.message.add({mp_id: payment.id!, email: payment.metadata.order.email, price: payment.metadata.order.price, kit: payment.metadata.order.kit, user_id: payment.metadata.order.user_id});

    revalidatePath("/");
  }

  return new Response(null, {status: 200});
}