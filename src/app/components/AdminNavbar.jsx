import React from 'react';
import Link from 'next/link';

const AdminNavbar = () => {
  return (
   
      <div className='navSection'>
    <div className="title">
     <h2>Holiday Resort</h2>
    </div>
   
    
    <p>Welcome: Admin</p>
    <Link href="/api/auth/signout" className='link'>
    <div className="logout">
        Logout
    </div>
    </Link>
</div>
    
  );
}

export default AdminNavbar;
