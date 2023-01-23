import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import {FiShoppingCart} from 'react-icons/fi'
import Logo from "../../public/assets/Renshop-black.svg";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  // Responsive mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width : 600px)");

      const handleMediaQuery = (event: MediaQueryListEvent) => {
        setMobile(event.matches);
      };

      mediaQuery.addListener(handleMediaQuery);

      return () => {
        mediaQuery.removeListener(handleMediaQuery);
      };
    }
  }, []);

  return (
    <div>
      <div className={`${Mobile ? "px-5" : "px-20 bg-[#fefefe] shadow-md"} py-4 flex`}>
        {/* Logo */}
        <Link href={"/"} className="flex items-center space-x-3">
          <Image src={Logo} alt="" className="w-8" />
        </Link>

        <div className="ml-auto space-y-3">
          {/* Search */}
          <div className="flex items-center w-[30rem] bg-[#f5f5f5] rounded-md">
            <input type="text" placeholder="Search your product" className="rounded-md outline-none bg-[#f5f5f5] w-full px-2"/>
            <div className="ml-auto rounded-md bg-gray py-2 px-2">
                <BiSearch className="text-xl "/>
            </div>
          </div>
          {/* Navigation list */}
          <ul className="flex space-x-5 items-center">
            <li className="list-none">
              <Link href={"/"}>Women</Link>
            </li>
            <li className="list-none">
              <Link href={"/"}>Men</Link>
            </li>
            <li className="list-none">
              <Link href={"/"}>Jewerly</Link>
            </li>
            <li className="list-none">
              <Link href={"/"}>Electronic</Link>
            </li>
          </ul>
        </div>

        {/* Cart, Login */}
        <div className="flex items-center space-x-8 ml-auto">
            <div className="relative">
                <FiShoppingCart className="text-xl"/>
                <span className="bg-red rounded-full px-1 text-[.8rem] absolute top-0 left-3.5">0</span>
            </div>
            <Link href={'/'} className="text-[.9rem]">
                    Login
                </Link>
            <button className="bg-black py-2 px-5 rounded-sm text-white text-[.9rem]">
                <Link href={'/'} >
                    Sign Up
                </Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
