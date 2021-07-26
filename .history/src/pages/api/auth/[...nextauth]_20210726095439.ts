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
  

    callbacks: {
      async signIn(user, acount, profile){
        const {email} = user
        
        try{
          await fauna.query(
           q.If(
             q.Not(
               q.Exists(
                 q.Match(
                   q.Indec('user_by_email'),
                   q.Casefold(user.email)
                 )
               )
             )
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