import NextAuth, { NextAuthOptions } from "next-auth"
import Google from "next-auth/providers/google"
import { createClient } from '@/utils/supabase/server'

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!


const authOption: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
  async signIn({ account, profile }) {
    if (!profile?.email) {
      throw new Error('No profile')
    }
    const supabase = await createClient();
    await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: account!.id_token!,
      nonce: typeof account!.nonce === 'string' ? account!.nonce : '',
    })
    return true
  }
  }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
