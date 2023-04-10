import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ms-auto  mx-auto p-5 lg:mt-5 bg-gradient-to-r from-sky-300 to-indigo-700 font-bold'>
            <div className='py-5 ms-5 grid grid-cols-3 gap-4'>
            <h1 className='text-5xl ms-5 text-bold'>SuccessHub</h1>
              <div className='px-5 py-5 ms-5'>
              <Link className='px-5' to='/'>Home</Link>
             <Link className='px-5' to='/statistics'>Statistics</Link>
             <Link className='px-5' to='/Jobs'>Jobs</Link>
             <Link className='px-5' to='/Blog'>Blog</Link>
              </div>
              <button className='rounded ms-5 w-2/4 text-white bg-indigo-500'>Star Applying</button>
           </div>
        </div>
    );
};

export default Header;