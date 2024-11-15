import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 overflow-hidden w-full'>
      <header className="text-center">
        <nav>
            <h1 className="bg-gradient-to-bl to-gray-500 from-red-500 
            lg:text-6xl text-2xl p-3 text-white font-bold">
                R&#x1F48D;NGS VILL&hearts;
                </h1>
        <div className="bg-slate-600 text-white font-bold lg:text-xl p-1
         lg:space-x-14 space-x-5 text-sm ">
        <Link href="/" className="hover:text-yellow-400
         hover:border-b-cyan-400 hover:border-b-2">Home</Link>
    
        <Link href="#card1" className=" hover:text-yellow-400
         hover:border-b-cyan-400 hover:border-b-2">Collection</Link>
        
        <Link href="#card3" className=" hover:text-yellow-400
         hover:border-b-cyan-400 hover:border-b-2">Heart</Link>
        
        <Link href="#card2" className=" hover:text-yellow-400
         hover:border-b-cyan-400 hover:border-b-2">Flower</Link>
        
      </div>
        </nav>
    </header> 
    </div>
  )
}

export default Navbar
