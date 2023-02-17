import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiCategory, BiHomeSmile, BiSearch,BiLogOut } from "react-icons/bi";
import { BsChevronDown, BsTelephoneOutbound } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import Logo from "../../public/assets/Renshop-black.svg";
import Avatar from "../../public/assets/avatar.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchCategories } from "../../slice/categorySlice";
import { fetchProductsByCategory } from "../../slice/productSlice";
// import useRef from 'react';
import { useRouter } from 'next/router';


interface NavAuthProps{
  isAuth : boolean
  data : Profile,
  Logout : any,
  about : About[]
}

interface Profile {
  _id : string,
  name : string,
  email : string,
}

interface About{
  page : string,
  link : string
}

const NavMobile : React.FC<NavAuthProps> = ({isAuth, about, data, Logout}) => {
  const [visible, isVisible] = useState(false);
  const [visibleSearch, isVisibleSearch] = useState(false)
  const {categories} = useSelector((state : RootState) => state.category)
  const dispatch = useDispatch<AppDispatch>()
  const categoryRef = useRef()
  const router = useRouter()
  const [dropDown, setDropDown] = useState(false)
  const [abouts, setAbouts] = useState(false)


  useEffect(() => {
    if(categoryRef.current === false){
        dispatch(fetchCategories());
    }
    dispatch(fetchCategories)
}, [dispatch])

  const handleCategoryRoute = (categoryId : string) => {
    dispatch(fetchProductsByCategory(categoryId))
    router.push(`/category/${categoryId}`)
  } 

  return (
    <div>
      <div className="px-5 py-4 flex items-center">
        {/* Logo Mobile */}
        <Link href={"/"} className="flex items-center space-x-3">
          <Image src={Logo} alt="" className="w-6" />
        </Link>

        {/* Search, Cart Mobile and Menu Sidebar */}
        <div className="ml-auto flex items-center space-x-8">
          {/* Search */}
          <div onClick={() => isVisibleSearch(!visibleSearch)}>
            <BiSearch className="text-xl " />
          </div>
          <div className="relative">
            <FiShoppingCart className="text-xl" />
            <span className="bg-red rounded-full px-1.5 text-[.8rem] absolute top-0 left-3.5">
              0
            </span>
          </div>
          <button onClick={() => isVisible(!visible)}>
            <AiOutlineAppstore className="text-xl" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          visible
            ? "bg-[#f5f5f5] w-full h-screen px-3 py-5 z-40 fixed top-0 ease-out"
            : "opacity-0 fixed bottom-0"
        } transition-opacity duration-500 `}
      >
        {/* Close Navbar mobile */}
        <div className="mb-5 flex items-center space-x-3">
          <GrFormClose className="text-2xl" onClick={() => isVisible(false)} />
          <h4 className="font-semibold">Menu Utama</h4>
        </div>
        <div className="bg-gray w-full h-[.5px]" />
        {/* Login and Register */}
        <div className="my-5 flex space-x-6">
          {
            isAuth ? 
            (<div className="flex space-x-4">
              <Image src={Avatar} alt="" className="w-16"/>
              <div>
                <p className="text-lg font-semibold capitalize">{data.name}</p>
                <p className="text-gray text-[.8rem]">{data.email}</p>
              </div>
            </div>) : 
            (<div className=" flex mx-auto space-x-5">
              <button className="border-black border px-5 py-2 rounded-sm text-[.9rem]">
                <Link href={"/login"}>Login</Link>
              </button>
              <button className="bg-black text-white px-5 py-2 rounded-sm text-[.9rem]">
                <Link href={"/register"}>Register</Link>
              </button>
            </div>)
          }
          
        </div>
        <div className="bg-gray w-full h-[.5px]" />
        {/* Quicklink */}
        <div className="space-y-5 mt-6">
          <h4 className="font-semibold">Quicklink</h4>
          <ul className="space-y-6">
            <li className="flex items-center space-x-3">
              <BiHomeSmile className="text-lg" />
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <div onClick={() => setDropDown(!dropDown)} className="flex items-center space-x-2.5">
                <BiCategory className="text-lg text-semibold" />
                <Link href={"/"}>Categories</Link>
                <BsChevronDown className="text-md mt-1 text-semibold" />
              </div>
              <ul className={`${dropDown ? "static space-y-3 ml-8 mt-4" : "hidden"}`}>
              {categories.map((val) => (
                    <li key={val} className="cursor-pointe">
                      <button onClick={() => handleCategoryRoute(val)} className="capitalize">
                        {val}
                      </button>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <div onClick={() => setAbouts(!abouts)} className="flex items-center space-x-2.5">
                <SiAboutdotme className="text-lg text-semibold" />
                <Link href={"/"}>About</Link>
                <BsChevronDown className="text-md mt-1 text-semibold" />
              </div>
              <ul className={`${abouts ? "static space-y-3 ml-7 mt-4" : "hidden"}`}>
                {
                  about.map((val, idx) => (
                    <li key={idx}>
                      <Link href={val.link}>{val.page}</Link>
                    </li>
                  ))
                }
              </ul>
            </li>
            <li className="flex items-center space-x-2.5">
              <BsTelephoneOutbound className="text-md mt-1 text-semibold" />
              <Link href={"/"}>Contact</Link>
            </li>
            {
              isAuth ? 
              (
                <li onClick={Logout} className="flex items-center space-x-2.5 text-red">
                  <BiLogOut className="text-lg mt-1 text-semibold" />
                  <p>Logout</p>
                </li>
              ) : ""
            }
            
          </ul>
        </div>
      </div>

      {/* Search */}
      <div className={`${
          visibleSearch
            ? "bg-[#f5f5f5] w-full h-screen px-3 py-5 z-40 fixed top-0 transition-opacity duration-500 ease-out"
            : "opacity-0 fixed bottom-0"
        }`}>
        <div>
        <GrFormClose className="text-2xl" onClick={() => isVisibleSearch(false)} />
          <div className="bg-gray w-full h-[.5px] my-5" />
          <div className="flex items-center space-x-2 w-full bg-[#fafafa] rounded-md py-1 px-3">
            <BiSearch className="text-xl text-gray " />
            <div className="bg-gray w-[1px] h-6" />
            <input
              type="text"
              placeholder="Search your product"
              className="rounded-md outline-none bg-[#fafafa] w-full px-2 placeholder:text-[.9rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
