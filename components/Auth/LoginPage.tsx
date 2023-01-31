import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Background from "../../public/assets/bg-login.jpg";

const LoginPage = () => {
  const [Mobile, setMobile] = useState(false);

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
      {Mobile ? (
        <div>
          <div className="mt-20 mx-6">
            {/* Form mobile */}
            <div className="space-y-2">
              <h1 className="text-[3rem] font-semibold font-oswald">
                Welcome!
              </h1>
              <p className="text-[.9rem] w-[60%] text-gray">
                Sign in to continue!
              </p>
            </div>

            <form action="" className="w-[20rem] mt-20">
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#f5f5f5] w-full py-3 px-2 text-[.9rem]"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-[#f5f5f5] w-full py-3 px-2 text-[.9rem]"
                />
              </div>
              <div className="mb-3 float-right">
                <Link href={"/login"} className="text-[.9rem]">
                  Forgot password
                </Link>
              </div>
              <div className="mb-3">
                <button className="bg-black mx-auto text-white font-semibold w-full py-3">
                  Login Now
                </button>
              </div>
            </form>
            <p className="text-gray text-center">
              I don`t have account,
              <Link href={"/register"} className="text-black">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex">
            <Image src={Background} alt="" className="w-[80vh] h-screen" />

            {/* Form */}
            <div className="ml-20 mt-32">
              <div className="space-y-2">
                <h1 className="text-[3rem] font-semibold font-oswald">Login</h1>
                <p className="text-[.9rem] w-[60%] text-gray">
                  Welcome! please input fill email and password for buy our
                  product
                </p>
              </div>
              <form action="" className="mt-20 w-[20rem]">
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#f5f5f5] w-full py-3 px-2 rounded-sm outline-none"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-[#f5f5f5] w-full py-3 px-2 rounded-sm outline-none"
                  />
                </div>
                <div className="mb-3 float-right">
                  <Link href={"/login"} className="text-[.9rem]">
                    Forgot password
                  </Link>
                </div>
                <div className="mb-3">
                  <button className="bg-black w-full py-3 mx-auto text-white font-semibold">
                    Login Now
                  </button>
                </div>
                <p className="text-gray text-center">
                  I dont have account,
                  <Link href={"/register"} className="text-black">
                    Register Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
