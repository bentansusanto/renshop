import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../../public/assets/Renshop-black.svg";
import NavMobile from "./NavMobile";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../store/store';
import { fetchCategories } from '../../slice/categorySlice';
import { fetchProductsByCategory } from '../../slice/productSlice';

// type navItem = {
//   page: string;
//   link: string;
// };

// const links: navItem[] = [
//   { page: "Women", link: "/women" },
//   { page: "Men", link: "/men" },
//   { page: "Jewerly", link: "/jewerly" },
//   { page: "Electronic", link: "/electronic" },
// ];

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const {categories} = useSelector((state : RootState) => state.category)
  const dispatch = useDispatch<AppDispatch>()
  const categoryRef = useRef(false)
  const router = useRouter()


  useEffect(() => {
    if(categoryRef.current === false){
        dispatch(fetchCategories());
    }
    dispatch(fetchCategories)
}, [dispatch])

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

  const handleCategoryRoute = (categoryId : string) => {
    dispatch(fetchProductsByCategory(categoryId))
    router.push(`/category/${categoryId}`)
  }

  return (
    <div>
      {Mobile ? (
        // Mobile
        <div>
          <NavMobile/>
        </div>
      ) : (
        // Desktop
        <div
          className="px-20 bg-[#fefefe] shadow-md
        py-4 flex"
        >
          {/* Logo */}
          <Link href={"/"} className="flex items-center space-x-3">
            <Image src={Logo} alt="" className="w-8" />
          </Link>

          <div className="ml-auto flex items-center space-x-5">
            {/* Navigation list */}
            <div className="relative">
              <li
                className="cursor-pointer"
                onMouseEnter={() => setOpen(!open)}
              >
                Categories
              </li>
              {open && (
                <ul
                  className={`${open ? "space-y-3 items-center mt-3 bg-[#fafafa] shadow-md rounded-md px-4 py-2 absolute top-8 transition-opacity duration-500 ease-in-out" : "opacity-0"}`}
                  onMouseLeave={() => setOpen(false)}
                >
                  {categories.map((val) => (
                    <li key={val} className="cursor-pointer">
                      <button onClick={() => handleCategoryRoute(val)}>
                        {val}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Search */}
            <div className="flex items-center w-[25rem] bg-[#f5f5f5] rounded-md">
              <input
                type="text"
                placeholder="Search your product"
                className="rounded-md outline-none bg-[#f5f5f5] w-full px-2"
              />
              <div className="ml-auto rounded-md bg-[#f5f5f5] py-2 px-2">
                <BiSearch className="text-xl " />
              </div>
            </div>
          </div>

          {/* Cart, Login */}
          <div className="flex items-center space-x-8 ml-auto">
            <div className="relative">
              <FiShoppingCart className="text-xl" />
              <span className="bg-red rounded-full px-1.5 text-[.8rem] absolute top-0 left-3.5">
                0
              </span>
            </div>
            <Link href={"/login"} className="text-[.9rem]">
              Login
            </Link>
            <button className="bg-black py-2 px-5 rounded-sm text-white text-[.9rem]">
              <Link href={"/register"}>Sign Up</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
