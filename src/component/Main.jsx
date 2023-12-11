import React from 'react'
import Typed from 'react-typed';
const Main = () => {
  return (
    <div className='w-full md:w-full text-black'>

    <div className=' lg:max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

  
    <h1 className='md:text-7xl  text-7xl font-bold md: py-6 -my-4 text-white'>.NET</h1>
    {/*py-6 means padding-top & padding-bottom = 24px */}

    <p className='md:text-4xl sm:text-3xl text-xl  py-4 text-white  '>Free. Cross-platform. Open source.</p>
    
    <p className='md:text-4xl sm:text-3xl text-xl  py-4 -my-4 text-white  '>A developer platform for building

    <Typed className='md:text-4xl sm:text-3xl text-xl md:pl-4 pl-2 text-white ' strings={['gaming', 'mobile', 'web']
} typeSpeed={120} backSpeed={140} loop/> apps</p>
      {/*pl-2 means padding on the left */}


    <div className='flex'>
    <button className='bg-white w-[200px] rounded-md  my-6 mx-auto py-3 ml-30 text-purple font-bold'>
        Get Started</button>

    
        <button className='bg-transparent border-2 border-white text-white w-[200px] rounded-md  my-6 mx-auto py-3 ml-30 text-purple font-bold'>
        Download</button>  

</div>


<p className='md:text-2xl sm:text-xl text-xl  py-4 -my-4 text-white'>Supported on macOS, Windows and Linux.</p>
    </div>
    </div>
  )
}

export default Main