import React from 'react'
import {AiOutlineCar, AiOutlineSlackSquare} from 'react-icons/ai'
import {FaCartPlus} from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import House from './House'

const Cards = ({ house }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/house');
       
    }
    
  return (
    <div className='  max-w-[1040px] bg-white  mx-auto'>
        <div className='py-24  md:max-w-[960px] bg-white md:mx-auto m-auto
        grid md:grid-cols-3 md:gap-10 items-center justify-center'>
            <div className='  hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
       <img onClick={handleClick}
        className=' cursor-pointer m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]'
                  src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                   alt="house-one" />
        
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2 w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                <div className='  hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
            <img className='m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
                
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2 w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                <div className=' hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
            <img className='m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
                
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2 w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                <div className=' hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
            <img className='m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
                
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2 w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                <div className=' hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
            <img className='m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
                
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2 w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                <div className=' hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
            <img className='m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
                
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2 w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                <div className=' hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
            <img className='m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
                
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2 w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                <div className=' hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
            <img className='m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
                
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2 w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                <div className=' hover:scale-105 duration-300 bg-white w-[250px] md:w-[290px] md:h-[450px] shadow-2xl my-5 rounded-tl-[100px] m-auto '>
            <img className='m-5 md:px-0 w-[210px]  md:w-[250px] md:h-[230px] h-[200px]
                 object-cover rounded-tl-[90px] rounded-br-[50px]' src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
                
                <div className=' px-5 flex gap-2 text-white text-xs'>
                    <p className=' bg-green-400 md:px-5 px-3 md:font-bold font-medium rounded-xl'>House</p>
                    <p className=' bg-purple-600 md:px-5 px-3 md:font-bold font-medium rounded-xl'>Lagos</p>
                </div>
            
                <p className=' text-xs p-5 w-44 md:font-bold font-medium'>No 50, Oluyole close, Ikeja Lagos</p>
                <div className=' mx-3 px-2 md:px-2  w-[150px] md:w-[200px] text-xs md:text-sm text-gray-600 flex justify-between items-center'>
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
                <p className=' px-5 py-2 text-sm font-bold text-purple-800'>$10000</p>

                </div>

                

                
            
        </div>
    </div>
  )
}

export default Cards
