import Image from "next/image";
import { useEffect, useState } from "react";
import Background from "../../public/assets/bg-login.jpg";
import FormRegister from "./Form/FormRegister";

const RegisterPage = () => {
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
              <h1 className="text-[3rem] font-semibold font-oswald">Hi!</h1>
              <p className="text-[.9rem] w-[60%] text-gray">
                Create new account
              </p>
            </div>
              <FormRegister/>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex">
            <Image src={Background} alt="" className="w-[80vh] h-screen" />

            {/* Form */}
            <div className="ml-20 mt-32">
              <div className="space-y-2">
                <h1 className="text-[3rem] font-semibold font-oswald">
                  Register
                </h1>
                <p className="text-[.9rem] w-[60%] text-gray">
                  Welcome! please input field email and password for get member
                </p>
              </div>
                <FormRegister/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
