import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 bg-purple-950'>
        {/*py-16 means: padding-top & padding-bottom = 64px*/}

      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
     {/*mx-auto means: it adjust the margin of the container automatically so that the container appears to
     be in the center*/}


     <div className='lg:col-span-2 my-4'>
      {/*my-4 means margin = 16px*/}

     <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold
     py-2'>Want updates and news about technology?</h1>

    <p>Sign up to our newsletter and stay updated.</p>
     </div>




     <div className='my-4'>
     <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
     <input className='p-3 flex w-full rounded-md text-black' type="email" 
     placeholder='Enter Email'/>

     <button className='bg-purple-500 text-white w-[200px] rounded-md font-medium
     ml-4 my-6 mx-auto md:mx-0 px-6 py-3'>Notify me</button>
     </div>

     </div>


     <p>We believe whatever is worth doing is what doing well <span className='text-blue-300'>
        Privacy Policy</span> </p>
      </div>



    </div>
  )
}

export default Newsletter