import React from 'react'
import Link from 'next/link';

const SubscribeSection = () => {
  return (  
    <div className='mt-40 mb-20'>
        <h4 className='text-center font-oswald font-semibold text-3xl pb-2'>Subscribe to our Newsletter</h4>
        <p className='text-center w-[30%] mx-auto text-gray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti saepe itaque perspiciatis voluptatem similique dicta accusantium!</p>
        <div className='flex justify-center mt-6 space-x-2'>
          <input type="text" placeholder='Enter your email' className='bg-[#f5f5f5] rounded-sm outline-none px-2 py-2 w-56' />
          <button className='bg-black text-white px-5 rounded-sm'>
            <Link href={'/'}>
              Subscribe
            </Link>
          </button>
        </div>
    </div>
  ) 
}

export default SubscribeSection 