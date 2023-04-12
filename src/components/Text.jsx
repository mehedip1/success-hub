import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const Text = ({text}) => { 
  const {logo, title, salary, sub, address} = text;

    return (
        <div>
         

        <section className='grid grid-cols-3 gap-5 mt-5  justify-center items-center'>
        <div>
            <img className=' mx-auto w-25 max-h-10' src={logo} alt="" />
            </div>
           
            <div>
                  <h1>{title}</h1>
                  <p>{sub}</p>
                  <div className='flex'>
                  <p> <small> <FontAwesomeIcon icon={faLocation} /> {address}</small> </p>
                  <p className='ms-5'>{salary}</p>
                  </div>
                  
                  <div className='flex py-5 '>
        <button className="border-solid border-2 text-indigo-500 border-indigo-500">Remote</button>
       <div>
       <button className=" ms-5 border-solid border-2  border-indigo-500 text-indigo-500">Full Time</button>
        </div>
       </div>
        </div>
        <div>
        <button className='text-white bg-indigo-500 rounded w-2/4 h-10'>View Details</button>
        </div>
        </section>
            
           
                
               
           
          
            </div>
    );
};

export default Text;