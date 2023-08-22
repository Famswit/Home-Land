import React from 'react'

const Heading = () => {
  return (
    <div className='max-w-[1040px] bg-white mx-auto '>
       <div className='grid md:grid-cols-2 gap-10 py-20 md:py-40' >
            <div className='p-4 md:px-14 text-start mx-auto'>
                <h1 className='w-[300px] text-2xl md:text-4xl font-bold'><span className=' text-purple-800'>Rent</span> Your Dream House with us.</h1>
                <p className='max-w-[350px] py-4 text-xs'>Powerful, self-serve product and growth analytics to help you convert
                    engage and retain more
                </p>
            </div>
            <div>
                <img className=' mx-auto px-5 md:px-0 md:w-[500px] md:h-[400px] h-[300px] md:-my-32 
                 object-cover rounded-br-[100px] md:rounded-br-none rounded-tl-[100px] md:rounded-tl-[150px]' src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house-one" />
            </div>

       </div>
    
    
    </div>
  )
}

export default Heading