import { createBrowserClient } from "@supabase/ssr";
import { User } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createSupabaseClient = () =>
  createBrowserClient(
    supabaseUrl!,
    supabaseKey!,
  );

  export function SignOut():void {
  const supabase = createSupabaseClient();

  supabase.auth.signOut()
  window.location.reload()
}

export async function GetUser(): Promise<User | null> {
  const supabase = createSupabaseClient();

  const { data } = await supabase.auth.getUser()
  const user = data.user

  return user
}