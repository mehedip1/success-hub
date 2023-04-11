import React from 'react';



const Job = ({job}) => {

    const {email, salary, Title, phone, address} = job;
 
    
   

 
    return (
        <div>
         <div className='grid grid-cols-2 gap-5 ms-5'>
           <div className='mt-10'>
            <h1 className='text-2xl font-bold'>Job Description: </h1>
            <p>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface</p> <br />
            <h1 className='font-bold'>Job Responsibility: </h1>
            <small>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</small>
            <br />
            <br />

            
            <h1 className='font-bold'>Educational Requirements:</h1>
            <p>Bachelor degree to complete any reputational university.</p>
            <br />
            <h1 className='font-bold'>Experiences:</h1>
            <small>2-3 Years in this field.</small>
           </div>
           <div className='mt-10 '>
           <h1 className='underline underline-offset-1 text-3xl'>Job Details</h1>
           <div className='mt-5'>
           <div className='shadow-md'>
           <p>Salary: {salary}</p>
           <p>Job Title:{Title}</p>
           <h1 className='text-3xl mt-5'>Contact Information</h1>
           </div>
            </div>
          <div>
          <p>Email:{email}</p>
           <p>Phone:{phone}</p>
           <p>Address{address}</p>
          </div>
          <div className='mt-5 py-5'>
            <button className='text-white mx-5  bg-indigo-500 rounded-md w-2/4 h-10'>Apply Now</button>
          </div>

           </div>
           </div>
      
       
        </div>

    
    );
};

export default Job ;

