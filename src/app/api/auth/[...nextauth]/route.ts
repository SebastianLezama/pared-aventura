import NextAuth, { NextAuthOptions } from "next-auth"
import Google from "next-auth/providers/google"

const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!

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
      return true
    }
  }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }