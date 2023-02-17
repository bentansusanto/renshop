import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '../../public/assets/avatar.svg'
import {BiLogOut} from 'react-icons/bi'

interface NavProps{
    isAuth : boolean,
    data : Profile,
    Logout : any
}

interface Profile {
  _id : string,
  name : string,
  email : string,
}

const NavIsAuth : React.FC<NavProps> = ({isAuth, data, Logout}) => {
    const [dropDown, setDropDown] = useState(false)

  return (
    <div>
        {
            isAuth ? 
            (<div className='relative'>
              <div onMouseEnter={() => setDropDown(!dropDown)} className='flex space-x-2 items-center'>
                <Image src={Avatar} alt="" className='w-8'/>
                <p>{data.name}</p>
              </div>
              <div onMouseLeave={() => setDropDown(false)} className={` ${dropDown ? "bg-white p-2 absolute top-12 shadow-md rounded-md" : "hidden"}`}>
              <button onClick={Logout} className="text-[.9rem] flex space-x-2 items-center text-red">
                <BiLogOut className="text-lg mt-1 text-semibold" />
                <p>Logout</p> 
              </button>
              </div>
            </div>) : 
            (<div className='space-x-8'>
                <Link href={"/login"} className="text-[.9rem]">
                Login
              </Link>
              <button className="bg-black py-2 px-5 rounded-sm text-white text-[.9rem]">
                <Link href={"/register"}>Sign Up</Link>
              </button>
            </div>)
        }
    </div>
  )
}

export default NavIsAuth