import React from 'react';


const Footer = () => {
    return (
        <div className='bg-black h-max mt-16'>
    
            <div className='grid mx-auto grid-cols-2 gap-2  mt-10'>
            <div className='ms-5'>
              <h1 className='text-white py-5 text-5xl'>SuccessHub</h1>
              <p className='text-white mt-5'>There are many variations of passages of<br />Lorem Ipsum ,but the majority have suffered <br />alteration in some form.</p>
              
             </div>
              <div>
                <div className='grid grid-cols-3 py-5 gap-4'>
               
               <div className='text-white'>
                <h1 className='text-3xl'>Company</h1>
                <p className='mt-5'>About Us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Careers</p>
               </div>
               <div className='text-white'>
                <h1 className='text-3xl'>Product</h1>
                <p className='mt-5'>Prototype</p>
                <p>Plans & Pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
               </div>
               <div className='text-white'>
                <h1 className='text-3xl'>Support</h1>
                <p className='mt-5'>Help Desk</p>
                <p>Sales</p>
                <p>Become a Partner</p>
                <p>Developers</p>
               </div>


                
            </div>
                </div>
              </div>

              <h1 className='text-white mx-auto ms-5'>@2023 CareerHub. All Rights Reserved</h1>
              
        </div>
    );
};

export default Footer;