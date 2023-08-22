import React, { useState } from 'react'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'

const Price = () => {
  const [price, setPrice] = useState(false)
  return (
    <div>
    <button onClick={() => setPrice((prev) => !prev)}
     className='w-[300px] md:w-[230px] mx-auto h-16 bg-white shadow-lg flex flex-row gap-4 
    justify-center items-center px-2 md:mx-6 hover:scale-105 hover:duration-100'>
         <GiMoneyStack size={30} className=' text-xl' />
         <div className='text-start w-full'><h1 className='  text-xs font-bold'>Price Range(any)</h1>
         <p className=' text-xs'>Select your place</p>
         </div>
            
         {!price ? (
            <MdKeyboardArrowUp className=' mx-3' size={30} />
         ) : (<MdKeyboardArrowDown className=' mx-3' size={30}/>
         )

         }
        </button>
        {price && (
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

export default Price