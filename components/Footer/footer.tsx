import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/Renshop-black.svg'
import Quicklink from './components/Quicklink';
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'


type Link = {
  link : string;
  name : string;
}

type Social = {
  link : string;
  social : any;
}

const aboutLink : Link[] = [
  {name : 'Our Company', link : '/'},
  {name : 'Jobs', link : '/'},
  {name : 'Blog', link : '/'}
]

const categoryLink : Link[] = [
  {name : 'Men Clothing', link : '/'},
  {name : 'Women Clothing', link : '/'},
  {name : 'Jewerly', link : '/'},
  {name : 'Electronic', link : '/'},
]

const socialMedia : Social [] = [
  {social : <BsInstagram/>, link : "https://instagram.com"},
  {social : <ImFacebook/>, link : "https://facebook.com"},
  {social : <BsTwitter/>, link : "https://twitter.com"}
]

const Footer = () => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const mediaQuery = window.matchMedia("(max-width : 600px)");
      
      const handleMediaQuery = (event:MediaQueryListEvent) => {
        setMobile(event.matches);
      }

      mediaQuery.addListener(handleMediaQuery)

      return () => {
        mediaQuery.removeListener(handleMediaQuery)
      }
    }
  }, [])
  
  return (
    <>
    <div className='bg-[#fafafa] w-full h-56'>
      <div className={`${mobile ? "grid-cols-1 px-5" : "grid-cols-2 px-32"} grid py-5`}>
        <div className='space-y-4'>
          <Image src={Logo} alt="" className='w-10'/>
          <p className={`${mobile ? "w-[90%]" : "w-[40%]"} text-gray`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maxime repellat deserunt fugiat maiores modi ratione.</p>
        </div>
          <Quicklink about={aboutLink} category={categoryLink} social={socialMedia} mobile={mobile}/>
      </div>
    </div>
    </>
  )
}

export default Footer
