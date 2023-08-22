import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

const Property = () => {
    const[property, setProperty] = useState(false)

  return (
    <div>
    <button  onClick={() => setProperty((prev) => !prev)} 
    className='w-[300px] md:w-[240px] h-16 bg-white shadow-lg flex flex-row gap-4 
    justify-center items-center px-1 mx-auto md:mx-6 hover:scale-105 hover:duration-100'>
         <AiOutlineHome size={30} className=' text-xl' />
         <div className='text-start w-full'><h1 className='  text-xs font-bold'>Property type(only)</h1>
         <p className=' text-xs'>choose property type</p>
         </div>

         {!property ? (
            <MdKeyboardArrowUp className=' mx-3' size={30} />
         ) : (<MdKeyboardArrowDown className=' mx-3' size={30}/>
         )

         }
            
            
        </button>
        {property && (
            <div className='w-[240px] absolute bg-white p-6 my-4 md:mx-6 mx-12 shadow-2xl text-start rounded-lg '>
                <p>Lagos</p>
                <p>Lagos</p>
                <p>Lagos</p>
                <p>Lagos</p>
            </div>
        )}
        </div>
  )
}

export default Property