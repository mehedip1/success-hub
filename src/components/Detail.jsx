import React from 'react'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'








 const Detail = ({detail}) => {


    
   
    
     const {logo, address, salary,  title, sub } = detail;
   
    return (
        <nav>
        <section className='ms-5 mt-5'>
       <div className=" bg-base-100 ms-5 shadow-xl ">
       <figure><img className='w-30 h-10' src={logo} alt="Shoes" /></figure>
      <div className='items-center justify-center'>
       <h2 className='text-4xl'>{title}</h2>
       <p>{sub}</p>
       <div className='flex py-3'>
       <div>
       <button className="border-solid border-2 text-indigo-500 border-indigo-500 ">Remote</button>
       </div>
      <div>
      <button className=" ms-5 border-solid border-2  border-indigo-500 text-indigo-500">Full Time</button>
      <div className='flex  mt-3'>
         <p><small><FontAwesomeIcon icon={faLocation} /> {address}</small> </p>
        <p className='ms-5'>{salary}</p>
                  </div>
     </div>
       </div>
       
      </div>
       </div>
   <div className='my-5 ms-5'>
   
   
  <Link to="/jobs"><button  className='text-white bg-indigo-500 rounded w-1/4 h-10 '>View Details</button></Link>
   </div>
   
       </section>
       
       
      </nav>
    );
};

export default Detail;



