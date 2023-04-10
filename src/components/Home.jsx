import React from 'react';
import logo from '.././components/images/logo.png'
import { useLoaderData } from 'react-router-dom';
import Detail from './Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faLightbulb, faHandPointer, faLink } from '@fortawesome/free-solid-svg-icons'





 

const Home = () => {
  const details = useLoaderData();
  
  

    return (
        <div>
          <section className='ms-auto grid grid-cols-2 gap-5 mt-5'>
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
                <div className='mx-auto ms-10 grid grid-cols-4 py-5'>
                   <div>
                    <FontAwesomeIcon className='bg-indigo-500 w-15 ' icon={faCoins} />
                  <h1>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                   </div>
                   <div className="job">
                   <FontAwesomeIcon icon={faLightbulb} />
                  
                   <h1>Creative Design</h1>
                    <p>200 Jobs Available</p>
                   </div>
                   <div className="job">
                   <FontAwesomeIcon icon={faHandPointer} />
                   <h1>Marketing & Sales</h1>
                    <p>150 Jobs Available</p>
                   </div>
                   <div className="job">
                   <FontAwesomeIcon icon={faLink} />
                   <h1>Engineering Job</h1>
                    <p>224 Jobs Available</p>
                   </div>
                </div>
            </div>
           </section>
           {/* work-end */}
           <div>
            <h1 className='text-5xl mt-10 text-center font-bold'>Featured Jobs</h1>
            <p className='text-center py-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className='grid grid-cols-2'>
         
          {
            details.map(detail => <Detail 
            key={detail.id}
            detail={detail}
            ></Detail>)
          }
              
            </div>
            <div className='ms-5 mx-5 px-5 py-5 items-center'>
            <button className='text-white mx-5  bg-indigo-500 rounded w-1/4 h-10'>See All Jobs</button>
            </div>
            
        </div>
    );
};

export default Home;
