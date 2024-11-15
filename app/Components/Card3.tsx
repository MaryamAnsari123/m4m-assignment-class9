import React from 'react'
import Image from 'next/image';

const Card3 = () => {
  return (
    <div className='mt-10 bg-gray-200 scroll-mt-32' id="card3">
    <h1 className='text-xl text-center lg:text-4xl font-bold text-pink-700
     p-3 lg:p-6'><u>Heart <span className='text-red-700'>&#10084;</span> Shape Rings</u></h1>
    <div className='flex items-center flex-col gap-8 lg:flex-row justify-center mt-6'>
      <div className='lg:w-2/12 w-9/12 md:w-6/12
      bg-pink-100 shadow-lg shadow-pink-400 mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/img/h3.jpeg"
          alt="pic1"
          width={200}
          height={200}
          className='mx-auto h-32 w-36' />
          <p className='text-center text-green-600 font-bold pt-4'>PKR 2,350</p>
          <p className="text-xs text-center mt-2">
          <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 821 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-4 py-2 bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12
      bg-pink-100 shadow-lg shadow-pink-400 mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/img/rh3.jpeg"
          alt="pic2"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 4,999</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 510 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-4 py-2 bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12
      bg-pink-100 shadow-lg shadow-pink-400 mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/img/rh6.jpeg"
          alt="pic3"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 2,099</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 221 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-4 py-2 bg-blue-700
             text-white rounded-md 
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12
      bg-pink-100 shadow-lg shadow-pink-400 mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/img/h1.jpeg"
          alt="pic4"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 1,499</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 511 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-4 py-2
            text-xs bg-blue-700 text-white rounded-md
            hover:bg-green-800'>
              Buy Now
            </button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Card3;