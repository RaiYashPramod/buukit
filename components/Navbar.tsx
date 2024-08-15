import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <section className='bg-black/30 shadow-lg shadow-slate-500 top-0 left-0 w-full z-10 backdrop-blur-md fixed'>
        <div className='container mx-auto py-4 text-[24px] flex justify-between items-center'>
          <div className="cursor-pointer">
            <Link href='/'>Buukit</Link>
          </div>

          <div>
            <Link href='/cart'>Cart</Link>
          </div>
        </div>

      </section>
    </>
  )
}

export default Navbar