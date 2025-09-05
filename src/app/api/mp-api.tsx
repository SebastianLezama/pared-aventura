import {readFileSync, writeFileSync} from "node:fs";

import {MercadoPagoConfig, Preference} from "mercadopago";
import { createClient } from "@/utils/supabase/server";
import { UUID } from "node:crypto";
import { HOST } from "@/utils/utils";

interface Message {
  id: number;
  text: string;
}

interface Order {
  email: string;
  kit: string;
  price: number;
  mp_id?: number;
  user_id?: UUID;
}

export const mercadopago = new MercadoPagoConfig({accessToken: process.env.MP_ACCESS_TOKEN!});


const api = {
  message: {
    async list(): Promise<Order[] | null> {
      // Leemos el archivo de la base de datos de los mensajes
      // const db = readFileSync("db/message.db");
      const supabase = await createClient()
      const {data, error} = await supabase.from("orders").select()

      // Devolvemos los datos como un array de objetos
      return data;
    },
    async add(order: Order): Promise<void> {
      // Obtenemos los mensajes
      const db = await api.message.list();

      // Si ya existe un mensaje con ese id, lanzamos un error
      if (db?.some((_dborder) => _dborder.mp_id === order.mp_id)) {
        throw new Error("order already added");
      }

      const supabase = await createClient()

      const { data, error } = await supabase.from("orders").insert(order).select()

      if (error || !data) throw new Error (error.message || ' Failed to create order.')
    },
    async submit(order: Order) {
      // Creamos la preferencia incluyendo el precio, titulo y metadata. La información de `items` es standard de Mercado Pago. La información que nosotros necesitamos para nuestra DB debería vivir en `metadata`.
      const preference = await new Preference(mercadopago).create({
        body: {
          items: [
            {
              id: order.email,
              unit_price: order.price,
              quantity: 1,
              title: order.kit,
            },
          ],
          metadata: {
            order,
          },
          back_urls: {
            success: `${HOST}/success`
          }
        },
      });

      // Devolvemos el init point (url de pago) para que el usuario pueda pagar
      return preference.init_point!;
    },
  },
};

export default api;