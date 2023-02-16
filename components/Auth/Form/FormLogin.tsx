import React, { SyntheticEvent, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const FormLogin = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const baseUrl = 'http://localhost:8000'
    const router = useRouter()
    
    const submitLogin = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseUrl}/api/login`, {
                method : "POST",
                credentials : "include",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({email, password})
            })
            if(!response.ok){
                throw new Error
            }
            // console.log(response)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit={submitLogin} className="mt-20 w-[20rem]">
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-[#f5f5f5] w-full py-3 px-2 rounded-sm outline-none"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  I dont have account, <Link href={"/register"} className="text-black">
                    Register Now
                  </Link>
                </p>
              </form>
    </div>
  )
}

export default FormLogin