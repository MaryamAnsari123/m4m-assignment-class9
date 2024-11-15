import React from 'react'
import Image from 'next/image';

const Card2 = () => {
  return (
    <div className='mt-10 bg-gray-300 scroll-mt-32' id="card2">
    <h1 className='text-xl text-center lg:text-4xl font-bold text-blue-800
     p-3 lg:p-6'>
        <u>Flower &#x1F33C; Shape Rings</u></h1>
    <div className='flex items-center flex-col gap-8 lg:flex-row justify-center mt-6'>
      <div className='lg:w-2/12 w-9/12 md:w-6/12
      bg-indigo-100 shadow-lg shadow-indigo-400 mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/img/rf7.jpeg"
          alt="pic1"
          width={200}
          height={200}
          className='mx-auto h-32 w-36' />
          <p className='text-center text-green-600 font-bold pt-4'>PKR 2,490</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 131 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12
      bg-indigo-100 shadow-lg shadow-indigo-400 mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/img/rf8.jpeg"
          alt="pic2"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 1,599</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 241 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12
      bg-indigo-100 shadow-lg shadow-indigo-400 mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/img/rf9.jpeg"
          alt="pic3"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 1,999</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 251 Reviews</p>
          <div className='flex justify-center items-center my-3'>
            <button className='lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
            hover:bg-green-800 text-xs'>
              Buy Now
            </button>
          </div>
      </div>

      <div className='lg:w-2/12 w-9/12 md:w-6/12
      bg-indigo-100 shadow-lg shadow-indigo-400 mb-20 p-2 border-gray-400 border-2'>
          <Image 
          src="/img/f1.jpeg"
          alt="pic4"
          width={200}
          height={200}
          className='mx-auto h-32 w-36'/>
          <p className='text-center text-green-600 font-bold pt-4'>PKR 2,250</p>
          <p className="text-xs text-center mt-2">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 213 Reviews</p>
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

export default Card2;