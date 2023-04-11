import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:grid'>
           <section className='md:grid lg:mt-5 bg-gradient-to-r from-sky-300 to-indigo-300 font-bold'>
           <div1 className='py-5 mx-auto grid grid-cols-3 gap-4'>
            <h1 className='text-5xl ms-5 text-bold'>SuccessHub</h1>
            <div className='px-2 py-5 ms-5'>
           <Link className='px-3' to='/'>Home</Link>
          <Link className='px-3' to='/statistics'>Statistics</Link>
            <Link className='px-2' to='/jobs'>Applied Jobs</Link>
           <Link className='px-2' to='/Blog'>Blog</Link>
             
           </div>
           <button className='rounded-full ms-5 px-5 mx-5 w-2/4 text-white bg-indigo-500'>Star Applying</button>
             
           </div1>
           </section>
          
            </div>
        
    );
};

export default Header;