import React from 'react'
import Image from 'next/image';

const Card1 = () => {
  return (
    <div className='mt-10 bg-slate-300 scroll-mt-32' id="card1">
    <h1 className='text-center text-xl lg:text-3xl font-bold text-white
    bg-gradient-to-r to-blue-300 from-pink-500 p-3 lg:p-3'>
      &#x1F48D; Rings Collection</h1>
    <div className='flex items-center flex-col gap-8 lg:flex-row justify-center mt-6'>
      <div className='lg:w-2/12 w-9/12 md:w-6/12
       bg-gray-100 shadow-lg shadow-gray-500 mb-20 p-2 border-gray-300 border-2'>
          <Image 
          src="/img/r1.jpeg"
          alt="pic1"
          width={200}
          height={200}
          className='mx-auto h-32 w-36' />
          <p className='text-center text-green-600 font-bold pt-4'>PKR 1,999</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 621 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2  bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12 
      bg-gray-100 shadow-lg shadow-gray-500 mb-20 p-2 border-gray-300 border-2'>
          <Image 
          src="/img/r2.jpeg"
          alt="pic2"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 2,999</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 128 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12 
      bg-gray-100 shadow-lg shadow-gray-500 mb-20 p-2 border-gray-300 border-2'>
          <Image 
          src="/img/r3.jpeg"
          alt="pic3"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 1,499</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 551 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12 
      bg-gray-100 shadow-lg shadow-gray-500 mb-20 p-2 border-gray-300 border-2'>
          <Image 
          src="/img/r5.jpeg"
          alt="pic4"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 3,499</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 161 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Card1;