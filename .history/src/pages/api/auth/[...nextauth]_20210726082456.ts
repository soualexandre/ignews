import NextAuth from 'next-auth'
import { signIn } from 'next-auth/client'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        scope: 'read:user'
      }),
    ],

    callbacks: {
      async signIn(user, acount, profile){
        console.log(user);
        return true;
      }
    }
  })