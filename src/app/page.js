import React from 'react';
import DBConnection from './components/utils/config/db';
import { auth } from './auth';
import { redirect } from 'next/navigation';
import UserNavigation from './components/UserNavigation';

const HomePage = async() => {

const session=await auth()


  await DBConnection()

  if(!session){
    redirect('/login')
  }

  return (
    <div>
      <UserNavigation/>
       <h1>Welcome to Holiday Resort</h1>
    </div>
  );
}

export default HomePage;
