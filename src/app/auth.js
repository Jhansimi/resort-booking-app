import NextAuth from "next-auth"
import credentialProvider from "next-auth/providers/credentials"
import UserModel from "./components/utils/models/User"


export const {auth,signIn,singOut,handlers:{GET,POST}}=NextAuth({
    providers:[
        credentialProvider({
            name:'credentials',
            async authorize(credentials){
                const user=await UserModel.findOne({email:credentials?.email})
               if(!user){
                   return null
               }
               if(credentials?.password!==user.password){
                return null
           
            }
            return {name:user.username,email:user.email, role:user.role}
        }
        })

    ],
    secret:process.env.SECRET_KEY

})