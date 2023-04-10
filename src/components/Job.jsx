import React from 'react';

const Job = ({job}) => {
    const {email} = job;
    return (
        <div>
        <div className='grid grid-cols-2'>
           <div className='mt-10'>
            <h1>Hello</h1>
           </div>
           <div className='mt-10'>
           <h1>Job Details</h1>
           <p>Email:{email}</p>
           </div>
        </div>
            
        </div>
    );
};

export default Job;