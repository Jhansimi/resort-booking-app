'use server'
import DBConnection from "../components/utils/config/db"

export async function productAction(productDetails){

    await DBConnection()

    console.log("product details", productDetails)

}