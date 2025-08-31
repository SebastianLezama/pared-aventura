import { createClient } from "@/utils/supabase/server";
import { CreateOrder } from "@/utils/utils";

export const createOrder = async (formData: CreateOrder) => {
  const supabase = await createClient();
  const email = (await (supabase).auth.getUser()).data.user?.email;

  const { data, error } = await supabase.from('profiles').select('id').eq('email', email).single();

}