import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className="bg-slate-600 text-center p-3">
      <p className=" text-white text-center text-base lg:text-xl mt-2">Responsive Design</p>
  <p className=" text-white text-center text-xs lg:text-base">Homework Done!<br /> Given by <br /> <b>Sir Ali Jawad</b></p>
  <p className="lg:text-base text-xs text-white mt-2">Slot: Tuesday 7 to 10</p>
</div>
<p className="text-black text-center text-sm bg-blue-200">Made by
<Link href="https://www.linkedin.com/in/maryam-ansari-a196312b5" target="_blank"
                className="hover:text-green-700 cursor-pointer font-bold"> Maryam Ansari</Link></p>
    </div>
  )
}

export default Footer
