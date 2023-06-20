"use client"

import Image from "next/image"
import Logo from 'public/img/white_logo-min.jpeg'
import Link from "next/link"
import { useState } from "react";

const SignupForm = () => {
    const [submitting, setIsSubmitting] = useState(false);
    const [account, setAccount] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });

    const handleSubmit = () => {
        return (
            <div>page</div>
        )
    }
    return (
        <form
            onSubmit={handleSubmit}
            className='mt-10 w-[100%] flex flex-col glassmorphism'
        >
            <div className="logo pb-[1.5rem] mx-auto">
                <Image src={Logo} alt="singn in page logo" width={180} height={180} />
            </div>
            <div>
                <input
                    value={account.firstname}
                    onChange={(e) => setAccount({ ...account, firstname: e.target.value })}
                    type='text'
                    placeholder='firstname'
                    required
                    className='form_input w-full border-2 border-[#3f3e3e44] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
                />
            </div>
            <div>
                <input
                    value={account.lastname}
                    onChange={(e) => setAccount({ ...account, lastname: e.target.value })}
                    type='text'
                    placeholder='lastname'
                    required
                    className='form_input w-full border-2 border-[#3f3e3e44] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
                />
            </div>
            <div>
                <input
                    value={account.email}
                    onChange={(e) => setAccount({ ...account, email: e.target.value })}
                    type='text'
                    placeholder='Email'
                    required
                    className='form_input w-full border-2 border-[#3f3e3e44] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
                />
            </div>
            <div>
                <input
                    value={account.password}
                    onChange={(e) => setAccount({ ...account, password: e.target.value })}
                    type='password'
                    placeholder='password'
                    required
                    className='form_input w-full border-2 border-[#3f3e3e44] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
                />
            </div>
            <div>
                <input
                    value={account.confirmPassword}
                    onChange={(e) => setAccount({ ...account, confirmPassword: e.target.value })}
                    type='password'
                    placeholder='Confirm password'
                    required
                    className='form_input w-full border-2 border-[#3f3e3e44] py-[.5rem] mb-[1.2rem] px-[1rem] rounded-md'
                />
            </div>


            <div className='text-start mb-5 gap-4'>
                <button
                    type='submit'
                    disabled={submitting}
                    className='px-5 py-[1.3rem] w-[100%] text-sm bg-indigo-800 rounded-lg text-white hover:bg-gradient-to-r from-blue-800 to-blue-700'
                >
                    Get Started <span aria-hidden="true">&rarr;</span>
                </button>
                <p className="text-sm text-center pt-[1rem]">Already a member? <Link className="text-indigo-600 font-bold" href={'/registration/login'}>Log In</Link></p>
            </div>
        </form>
    )
}

export default SignupForm