
'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Circles } from 'react-loader-spinner'
import UserNavigation from '@/app/components/UserNavigation';
import Link from 'next/link';

const Dynamicproduct = () => {

    const [record,setRecord]=useState('')
    
    const params=useParams()

    const {id}=params
    console.log("dynamic cleintid",id)


    const dynamicProducthandler=async()=>{
     const response=await fetch(`http://localhost:3000/api/admin/add-product/product/${id}`)
     const newData=await response.json()
setRecord(newData.data)

}

    useEffect(()=>{
      dynamicProducthandler()
    },[])


    const bookingHandler=()=>{

    }
  return (
    <div>

    <UserNavigation/>
    <Link href="/">
    <p align="center">Go Back</p>
    </Link>
   
  {record? 
     (<div className="">
        <div className="singleSection">
        <div className="singleLeft">
          <div className="">
           <h2>{record.title}</h2>
          </div>
          <img src={record.image} alt={record.title} className="singleImage"/>
          </div>
          <div className="singleCenter">
           <div className="singlePrice">Rs.{record.price}</div>
           <p className="singleDesc">{record.desc}</p>
           <div className="">
               {record.amen.map((item, i)=>{
                   return(
                       <div className="singleAmen"  key={i}>
                          <span>*</span> {item}
                       </div>
                   )
               })}
           </div>
           <div className="offer">
           <span>*</span>
              <button>  Discount {record.offer}</button>
           </div>
           <div className="singleBtn">
               <button className="" onClick={bookingHandler}  >Book Now</button>
           </div>
          </div>
        </div>

       </div>)
    :<h1 style={{position:'absolute', top:'50%', left:'50%'}}>    <Circles
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    /></h1>}
</div>
)


}

export default Dynamicproduct;
