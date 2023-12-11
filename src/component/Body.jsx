import React from 'react'
import { AiFillAccountBook, AiFillBank, AiFillDatabase, AiFillInstagram, AiFillWindows } from 'react-icons/ai';
import { AiFillMobile} from 'react-icons/ai'
const Body = () => {
  return (

    <div className='grid grid-cols-2 lg:grid-cols-3'>

    <div className='w-full md:w-full text-black bg-white py-16 px-4 flex'>
        <AiFillWindows className='cursor-pointer' size={50}/>
        <h2 className='font-bold ml-2 mt-2'>Web</h2>
        <p className='sm:hidden lg:flex text-[16px] mt-10 -ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit autem fuga </p>
    </div>


    <div className='w-full md:w-full text-black bg-white py-16 px-4 flex'>
        <AiFillMobile className='cursor-pointer' size={50}/>
        <h2 className='font-bold ml-2 mt-2'>Mobile</h2>
        <p className='sm:hidden lg:flex text-[16px] mt-10 -ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit autem fuga </p>
    </div>


    <div className='w-full md:w-full text-black bg-white py-16 px-4 flex'>
        <AiFillDatabase className='cursor-pointer' size={50}/>
        <h2 className='font-bold ml-2 mt-2'>Database</h2>
        <p className='sm:hidden lg:flex text-[16px] mt-10 -ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit autem fuga </p>
    </div>



    <div className='w-full md:w-full text-black bg-white py-16 px-4 flex'>
        <AiFillBank className='cursor-pointer' size={50}/>
        <h2 className='font-bold ml-2 mt-2'>Finance</h2>
        <p className='sm:hidden lg:flex text-[16px] mt-10 -ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit autem fuga </p>
    </div>



    <div className='w-full md:w-full text-black bg-white py-16 px-4 flex'>
        <AiFillInstagram className='cursor-pointer' size={50}/>
        <h2 className='font-bold ml-2 mt-2'>Social</h2>
        <p className='sm:hidden lg:flex text-[16px] mt-10 -ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit autem fuga </p>
    </div>



    <div className='w-full md:w-full text-black bg-white py-16 px-4 flex'>
        <AiFillAccountBook className='cursor-pointer' size={50}/>
        <h2 className='font-bold ml-2 mt-2'>Account</h2>
        <p className='sm:hidden lg:flex text-[16px] mt-10 -ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit autem fuga </p>
    </div>



    </div>
  )
}

export default Body