import Image from "next/image";
import Link from "next/link";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiCategory, BiHomeSmile, BiSearch } from "react-icons/bi";
import { BsChevronDown, BsTelephoneOutbound } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { IoMdArrowBack } from "react-icons/io";
import Logo from "../../../public/assets/Renshop-black.svg";

const NavMobile = () => {
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
          <div className="ml-auto py-2 px-2">
            <BiSearch className="text-xl " />
          </div>
          <div className="relative">
            <FiShoppingCart className="text-xl" />
            <span className="bg-red rounded-full px-1.5 text-[.8rem] absolute top-0 left-3.5">
              0
            </span>
          </div>
          <button>
            <AiOutlineAppstore className="text-xl" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="bg-[#f5f5f5] w-full h-screen px-3 py-5 z-50 relative -mt-20 hidden">
        {/* Close Navbar mobile */}
        <div className="mb-5 flex items-center space-x-3">
          <GrFormClose className="text-2xl" />
          <h4 className="font-semibold">Menu Utama</h4>
        </div>
        <div className="bg-gray w-full h-[.5px]" />
        {/* Login and Register */}
        <div className="my-5 flex justify-center space-x-6">
          <button className="border-black border px-5 py-2 rounded-sm text-[.9rem]">
            <Link href={"/"}>Login</Link>
          </button>
          <button className="bg-black text-white px-5 py-2 rounded-sm text-[.9rem]">
            <Link href={"/"}>Register</Link>
          </button>
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
            <li className="flex items-center space-x-2.5">
              <BiCategory className="text-lg text-semibold" />
              <Link href={"/"}>Categories</Link>
              <BsChevronDown className="text-md mt-1 text-semibold" />
            </li>
            <li className="flex items-center space-x-2.5">
              <SiAboutdotme className="text-lg text-semibold" />
              <Link href={"/"}>About</Link>
              <BsChevronDown className="text-md mt-1 text-semibold" />
            </li>
            <li className="flex items-center space-x-2.5">
              <BsTelephoneOutbound className="text-md mt-1 text-semibold" />
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Search */}
      <div className="bg-[#f5f5f5] w-full h-screen px-3 py-8 z-50 relative -mt-20 hidden">
        <div>
          <IoMdArrowBack className="text-xl" />
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
