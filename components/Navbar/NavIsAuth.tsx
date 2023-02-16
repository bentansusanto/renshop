import React,{useState} from 'react'
import Link from 'next/link'


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
              <p onMouseEnter={() => setDropDown(!dropDown)}>{data.name}</p>
              <div onMouseLeave={() => setDropDown(false)} className={` ${dropDown ? "bg-white p-2 absolute top-10 shadow-md rounded-md" : "hidden"}`}>
              <button onClick={Logout} className="text-[.9rem]">
                Logout
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