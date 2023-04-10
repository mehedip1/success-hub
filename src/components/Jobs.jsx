import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';

const Jobs = () => {
    const jobs = useLoaderData();
    
    return (
        <div>
            <h1 className='text-5xl text-center mt-5'>Jobs Details</h1>
            
            {
                jobs.map(job => <Job
                key={job.id}
                job={job}></Job>)
            }
           </div>
           



    );
};

export default Jobs;