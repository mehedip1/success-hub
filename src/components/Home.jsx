import React from 'react';
import logo from '.././components/images/logo.png'

 

const Home = () => {
    return (
        <div className='grid grid-cols-2 gap-5 mt-5'>
          <div>
          <h1 className='text-5xl mt-15 mb-10 ms-5 font-bold py-10 my-10'>
          One Step Closer To Your <br /><span className='text-cyan-400'>Dream Job</span>
         </h1>
         <p className='ms-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <div className='py-5 ms-5'>
        <button  className='text-white  ms-5 px-5 mx-5 w-2/4 h-100% bg-indigo-500 rounded'>Get Started</button>
        </div>
        
         
          </div>
          <img src={logo}  alt="" />
        </div>
    );
};

export default Home;
