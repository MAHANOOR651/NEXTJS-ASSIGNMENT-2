import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-rose-600 h-12'>
      <div className='text-yellow-400 flex justify-between items-center'>
      <h1 className='text-xl m-2 cursor-pointer'>Navbar</h1>
      <ul className='flex gap-3 mr-4 cursor-pointer'>
        <Link className='hover:text-blue-700' href="/">Home</Link>
        <Link className='hover:text-orange-700' href="/">About</Link>
        <Link className='hover:text-pink-800' href="/">Contact</Link> 
        <Link className='hover:text-amber-700' href="/">Skills</Link>
        
</ul>
    </div>
    </div>
  )
}

export default Navbar
