import mongoose from "mongoose"

 const DBConnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
           console.log("database conencted ")
    }

    catch(error){
        console.log(error)

    }




}

export default DBConnection