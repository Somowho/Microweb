import React from 'react'
import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineArrowUp} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);


const handleNav = () => {
setNav(!nav);

}


  return (
    <div className='sm:w-full md:w-full lg: flex justify-between items-center h-12 max-w-[1400px] mx-auto px-4 w-full bg-white text-black'> 
    {/*h-12 means height = 48px */}

    <img className='w-6' 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX0TiSBuQABpO//uQL////zPgD839q71418twCUz/YAoO54tQDo8dz/2ZT/tgAAnu7c7fz/143zKgD83Ne21YX++fjx9+qNzPbr9f3/6cIAmu7/1ojz0lEEAAABIElEQVR4nO3PNxLCQAAEwQMk4YX3//8nGSIh3eKg5wNTXUqstmteTWejVDkgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEh4RcK21j7wyA8LmOVLtdpEJ5XsUrz6xHWH2H9EdYfYf39gXAe63Idtrd1rLKIdd8Owkcfq4xjbd6Eu36SipCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBzT1a6jroC5x5uAAAAAElFTkSuQmCC" alt="/" />
    <h1 className='w-full text-2xl ml-2 font-bold text-black'>Microsoft</h1>

    <AiOutlineArrowUp size={40}/>

    <ul className='hidden md:flex text-black cursor-pointer'>

    <li className='p-4'>Home</li> {/*p-4 means padding = 16px*/}
    <li className='p-4'>About</li>
    <li className='p-4'>Services</li>
    <li className='p-4'>Training</li>
    </ul>




    <div onClick={handleNav} className='block bg-white  md:hidden'>
    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>






{/*Mobile version */}


<ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-900 bg-white ease-in-out duration-500' : 'ease-in-out durtion-500 fixed left-[-100%]'}>

<h1 className='w-full text-3xl font-bold text-blue-500'>Microsoft</h1>


<li className='p-4 border-b border-blue-500'>Home</li>

<li className='p-4 border-b border-blue-500'>About</li>

<li className='p-4 border-b border-blue-500'>Services</li>


<li className='p-4 border-b border-blue-500'>Training</li>
</ul>

    </div>
  )
}

export default Navbar