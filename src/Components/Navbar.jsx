import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-[1040px] bg-white mx-auto  p-4 border-b'>
        <div className='flex justify-between items-center 
        md:px-10  '>
         <div>
            <h1 className=' text-lg font-bold py-1 md:text-3xl'>HomeLand.</h1>
            </div>
        <div className=' w-[150px] flex justify-between items-center '>
            <a href="/House">Log in</a>
            <button className=' bg-purple-700 p-2 rounded-lg text-white md:font-bold hover:scale-105 duration-100 '>sign up</button>
        </div>

        </div>

    </div>
  )
}

export default Navbar