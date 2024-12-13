import DBConnection from "@/app/components/utils/config/db";
import UserModel from "@/app/components/utils/models/User";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    await DBConnection()
    const {id}= params
    console.log("dynamic id", id)

    try{
        if(!id){
            return NextResponse.json({success:false, message:"no user found"}, {status:404})
        }
        const user=await UserModel.findById(id)
        return NextResponse.json({success:true, data:user})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({success:false,message:'Id is missing'})
    }

}