import React, { SyntheticEvent } from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';

const FormRegister = () => {
    const [name, setName] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const baseUrl = 'http://localhost:8000'
    const router = useRouter()

    const submitRegister = async(e : SyntheticEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseUrl}/api/register`, {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({name, username, email, password})
            })
            if(!response.ok){
                throw new Error
            }
            // console.log(response)
            router.push('/login')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit={submitRegister} className="mt-20 w-[20rem]">
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    placeholder="Enter your name"
                    className="bg-[#f5f5f5] w-full py-3 px-2 rounded-sm outline-none"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="bg-[#f5f5f5] w-full py-3 px-2 rounded-sm outline-none"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-[#f5f5f5] w-full py-3 px-2 rounded-sm outline-none"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-[#f5f5f5] w-full py-3 px-2 rounded-sm outline-none"
                    required
                  />
                </div>
                <div className="mb-3">
                  <button className="bg-black w-full py-3 mx-auto text-white font-semibold">
                    Register Now
                  </button>
                </div>
                <p className="text-gray text-center">
                  I have account, <Link href={"/login"} className="text-black">
                    Login Now
                  </Link>
                </p>
              </form>
    </div>
  )
}

export default FormRegister