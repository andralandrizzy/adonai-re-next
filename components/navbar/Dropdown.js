"use client"
import Link from 'next/link';
import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

const loginNav = [
    { id: '1', name: 'Dashboard', href: '/admin/dashboard' },
    { id: '2', name: 'Profile', href: '#' },
    { id: '3', name: 'Account', href: '#' },
    { id: '4', name: 'Logout', href: '#' },
]
const Dropdown = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <>
            <button
                onClick={() => setToggleMenu((prev) => !prev)}
                className="pt-[2px] font-bold text-sm text-center inline-flex"
                type="button">( John Doe ) {!toggleMenu ? (<i className='text-[1.59rem]'><RiArrowDropDownLine /></i>)
                    : (<i className='text-[1.59rem]'><RiArrowDropUpLine /></i>)}
            </button>
            {
                toggleMenu && (
                    <div className="w-[240px] text-start bg-white lg:right-0 top-[110%] absolute rounded-md">
                        <ul className="py-[1rem] text-sm text-gray-700 dark:text-gray-200">
                            {loginNav.map((item) => (
                                <li key={item.id}>
                                    <Link href={item.href} className="block text-sm px-4 py-4 font-semibold leading-6 text-gray-900">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }

        </>
    )
}

export default Dropdown