import React from 'react';
import DBConnection from './components/utils/config/db';
import { auth } from './auth';
import { redirect } from 'next/navigation';

const HomePage = async() => {

const session=await auth()


  await DBConnection()

  if(!session){
    redirect('/login')
  }

  return (
    <div>
       <h1>Welcome to Holiday Resort</h1>
    </div>
  );
}

export default HomePage;
