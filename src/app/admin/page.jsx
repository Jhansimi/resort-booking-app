import React from 'react';
import { redirect } from 'next/navigation';
import { auth } from '../auth';
import Link from 'next/link';
import AddProducts from '../components/AddProducts';
import AdminNavbar from '../components/AdminNavbar';

const AdminPage = async() => {
    const session =await auth()

    if(!session){
        redirect("/login")
    }
  return (
    <div>
   {session ? (<>
    <AdminNavbar/>
    <AddProducts/>
   </>): "Not Authorized" }
        
    </div>
  );
}

export default AdminPage;
