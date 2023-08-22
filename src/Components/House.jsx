import React from 'react'
import Navbar from './Navbar'
import {AiOutlineCar, AiOutlineSlackSquare} from 'react-icons/ai'
import {FaCartPlus} from 'react-icons/fa'
import Footer from './Footer'

const House = () => {
  return (
    <div className='  max-w-[1040px] bg-white  mx-auto'>
        <div className=' max-w-[960px] mx-auto bg-white py-2'>
            <Navbar />
            <div className=' md:px-11 md:py-3 md:flex justify-between items-center'>
                <div className=' p-3'> <h1 className=' font-bold'>House 8</h1>
                <p className=' text-xs font-semibold'>No 50, Oluyole close, Ikeja Lagos</p>
                </div>

                <div className=' px-3 py-2 flex h-full gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
                <p className=' px-3 py-2 text-sm font-bold text-purple-800'>$10000</p>
            </div>


            <div className=' md:flex justify-between items-center'>
                <div className='m-3'>
            <img className=' md:mx-10 md:px-0 w-[350px]  md:w-[550px] md:h-[300px] h-[250px]
                 object-cover' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
            <div className=' my-4 md:mx-4 md:px-5 w-[150px] md:w-[200px] text-xs md:text-sm text-purple-600 flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                    <AiOutlineCar /> <p>6</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                    <FaCartPlus /> <p>3</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                    <AiOutlineSlackSquare /> <p>1000sq ft</p>
                    </div>
                    
                </div>

                <p className='my-4 md:mx-4 md:px-5 md:w-[550px] text-xs md:text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum itaque minus ea soluta quae aperiam asperiores incidunt natus quas exercitationem laborum
                     provident dolores culpa consectetur rerum laudantium, fugit ullam.</p>
            </div>


            <div className='mx-3 bg-white shadow-lg border-2 max-w-[300px] h-[420px] p-4'>
                <div className=' flex gap-3'>
                    <img className=' w-20 h-20 rounded-[100%]  object-cover' src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
                    <div className=' py-3'>
                        <h1 className=' font-bold'>Phil Jones</h1>
                        <p className=' text-xs text-gray-600 font-bold my-2'>+234-81-6831-4822</p>
                    </div>

                </div>

                <form className=' my-3'>
                    <input className='p-3 shadow-md  rounded-lg border w-full text-xs hover:scale-105 duration-300' type="text" placeholder='Name' />
                    <input className='p-3 shadow-md my-2 rounded-lg border w-full text-xs hover:scale-105 duration-300' type="text" placeholder='Email' />
                    <input className='p-3 shadow-md rounded-lg border w-full text-xs hover:scale-105 duration-300' type="number" placeholder='Phone no' />
                    <textarea className='p-3 shadow-md my-2 rounded-lg border w-full text-xs hover:scale-105 duration-300' type="text" placeholder='Hello, i am interested in'></textarea>
                </form>
                    <div className=' flex justify-between items-center'>
                        <button className=' bg-purple-600 px-4 py-3 rounded-lg text-white text-sm shadow-md hover:scale-105 duration-300'>send message</button>
                        <button className=' w-24 border-2 border-gray-400 p-2 rounded-lg text-black text-sm shadow-md hover:scale-105 duration-300'>call</button>
                    </div>
                
            </div>

            </div>



        </div>

        <Footer />
    
    
    </div>
  )
}

export default House