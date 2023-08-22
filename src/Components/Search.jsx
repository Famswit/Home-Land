import React from 'react';
import Location from './Location';
import Price from './Price';
import Property from './Property';
import {BiSearchAlt2} from 'react-icons/bi'



const Search = () => {
  return (
   <div className=' max-w-[1040px] bg-white mx-auto'>
    <div className=' relative max-w-[960px] bg-white shadow-lg mx-auto
     -my-20 py-5 grid md:grid-cols-4 gap-5 md:gap-36 items-center
     md:bg-transparent md:backdrop-blur-sm'>
        <Location />
        <Property />
        <Price />
        <button className='bg-purple-600 w-[300px] mx-auto md:w-[100px] py-3 my-auto shadow-lg rounded-lg hover:scale-105 hover:duration-100'>
        <BiSearchAlt2 size={25} className='text-white mx-auto' />
        </button>
    </div>

   </div>
           
       
  )
}

export default Search;