"use server"

import DBConnection from "../components/utils/config/db"
import UserModel from "../components/utils/models/User"

export async function registerAction(registerDetails){

    await DBConnection()
    console.log("register details:", registerDetails)

    try{
        await UserModel.create({
            username:registerDetails.username,
            email:registerDetails.email,
            password:registerDetails.password
        })
        return {success:true}

    }
    catch(error){
        console.log(error)

    }
}