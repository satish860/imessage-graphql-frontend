import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "./prismadb"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret:process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks:{
    async session({ session, user, token }) {
      const sessionUser = { ...session.user, ...user };
      console.log(sessionUser)
      return Promise.resolve({
        ...session,
        user: sessionUser,
      });
    },
  }
})