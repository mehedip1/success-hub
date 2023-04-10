import React from 'react';
import logo from '.././components/images/logo.png'
import { useLoaderData } from 'react-router-dom';
import Detail from './Detail';





 

const Home = () => {
  const details = useLoaderData();
  

    return (
        <div>
          <section className='grid grid-cols-2 gap-5 mt-5'>
          <div>
          <h1 className='text-5xl mt-20 mb-10 ms-5 font-bold py-10 my-10'>
          One Step
          <h2 className='py-2'>Closer To Your</h2>
            <h3 className='text-cyan-400 py-2'>Dream Job</h3>
           </h1>
           <p className='ms-5'> 
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          
        
        <div className='py-5 ms-5'>
        <button  className='text-white  ms-5 px-5 mx-5 w-1/4 h-10 h-100% bg-indigo-500 rounded-full'>Get Started</button>
        </div>
        
         
          </div>
          <img src={logo}  alt="" />
          </section>
          <section>
            <div>
                <h1 className='text-5xl mt-5 text-center font-bold'>Job Category List</h1>
                <p className='text-center py-3'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>
           </section>
           <div className='grid grid-cols-2'>
         
          {
            details.map(detail => <Detail 
            key={detail.id}
            detail={detail}
            ></Detail>)
          }
              
            </div>
        </div>
    );
};

export default Home;
