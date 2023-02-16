import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Background from "../../public/assets/bg-login.jpg";
import FormLogin from "./Form/FormLogin";

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
            <FormLogin/>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex">
            <Image src={Background} alt="" className="w-[40vw] h-screen" />

            {/* Form */}
            <div className="ml-52 mt-32">
              <div className="space-y-2">
                <h1 className="text-[3rem] font-semibold font-oswald">Login</h1>
                <p className="text-[.9rem] w-[60%] text-gray">
                  Welcome! please input fill email and password for buy our
                  product
                </p>
              </div>
                <FormLogin/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
