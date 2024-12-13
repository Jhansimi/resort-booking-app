import DBConnection from "@/app/components/utils/config/db";
import ProductModel from "@/app/components/utils/models/Product";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    await DBConnection()
    const {id}= params
    console.log("dynamic id", id)

    try{
        if(!id){
            return NextResponse.json({success:false, message:"no product found"}, {status:404})
        }
        const product=await ProductModel.findById(id)
        return NextResponse.json({success:true, data:product})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({success:false,message:'Id is missing'})
    }

}