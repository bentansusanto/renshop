import React from 'react'
import Link from 'next/link';

interface QuickProps {
    about : Link[];
    category : Link[];
    social : Social[];
    mobile : boolean
}

interface Link {
    name : string;
    link : string;
}

interface Social{
    social : any;
    link : string;
}

const Quicklink : React.FC<QuickProps> = ({about, category, social, mobile}) => {
  return (
    <div>
       <div className={`${mobile ? "grid-cols-2 mt-10" : "grid-cols-3 -ml-40"} grid gap-10`}>
        {/* About Link */}
        <div className='space-y-3'>
          <h4 className='text-[1rem] font-semibold'>About</h4>
          <ul className='space-y-3'>
            {
              about.map((val, idx) => (
                  <li key={idx} className="text-gray hover:text-black">
                    <Link href={val.link}>
                      {val.name}
                    </Link>
                  </li>
              ))
            }
          </ul>
        </div>
        {/* Category Link */}
        <div className='space-y-3'>
          <h4 className='text-[1rem] font-semibold'>Category</h4>
          <ul className='space-y-3'>
            {
              category.map((val, idx) => (
                  <li key={idx} className="text-gray hover:text-black">
                    <Link href={val.link}>
                      {val.name}
                    </Link>
                  </li>
              ))
            }
          </ul>
        </div>
        {/* Social Media */}
        <div className='space-y-6'>
          <h4 className='text-[1rem] font-semibold'>Follow Us</h4>
          <ul className='flex space-x-6 items-center'>
            {
              social.map((val, idx) => (
                  <li key={idx} className="text-gray hover:text-black text-xl">
                    <Link href={val.link}>
                      {val.social}
                    </Link>
                  </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Quicklink
