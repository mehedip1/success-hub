import React from 'react'; 
import { Link } from 'react-router-dom';







 const Detail = ({detail}) => {


    
   
    
     const {logo,  title, sub } = detail;
   
    return (
        <nav>
        <section className='ms-5 mt-5'>
       <div className=" w-96 bg-base-100 shadow-xl ">
       <figure><img src={logo} alt="Shoes" /></figure>
      <div className="card-body">
       <h2 className='text-4xl'>{title}</h2>
       <p>{sub}</p>
       <div className='flex py-5 '>
       <button className="border-solid border-2 text-indigo-500 border-indigo-500">Remote</button>
      <div>
      <button className=" ms-5 border-solid border-2  border-indigo-500 text-indigo-500">Full Time</button>
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



