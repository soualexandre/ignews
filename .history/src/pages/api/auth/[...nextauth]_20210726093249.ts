import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {fauna} from '../../../services/fauna'
import {query as q} from 'faunadb'
export default NextAuth({
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        scope: 'read:user'
      }),
    ],
    jwt: {
      signinKey: process.env.SIGNING_KEY,
    },

    callbacks: {
      async signIn(user, acount, profile){
        const {email} = user
        
        try{
          await fauna.query(
            q.Create(
              q.Collection('users'),
              { data: { email } }
            )
          )
        return true
        }
        catch{
          return false
        }
      }
    }
  })