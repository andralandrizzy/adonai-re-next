"use client"

import { useState } from 'react';
import Logo from 'public/img/white_logo-min.jpeg'
import Image from 'next/image'
import Login from '../auth/Login';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Container from '../Container';
import Dropdown from './Dropdown';
import { useSelectedLayoutSegment } from 'next/navigation'

const navigation = [
    { id: '1', name: 'Home', href: '/', targetSegment: null },
    { id: '2', name: 'Properties', href: '/properties', targetSegment: 'properties' },
    { id: '3', name: 'Blog', href: '/blogs', targetSegment: 'blogs' },
    { id: '4', name: 'About', href: '/about', targetSegment: 'about' },
    { id: '5', name: 'Contact', href: '/contact', targetSegment: 'contact' },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isUserLoggedin = false
    const activeSegment = useSelectedLayoutSegment()

    return (
        <header className="absolute inset-x-0 top-[1.5%] z-50">
            <Container>
                <nav className="flex items-center justify-between bg-[#fff] rounded-full p-5 lg:px-4" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            {/* <span className="sr-only">Your Company</span> */}
                            <Image
                                className="h-12 w-auto"
                                src={Logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaBars className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <li className='list-none ' key={item.id}>
                                <Link href={item.href} style={{
                                    borderBottom: (activeSegment === item.targetSegment) ? 'solid 2px #2B3C92' : 'none',
                                    paddingBottom: '4px',
                                    textTransform: 'uppercase',
                                    fontSize: '0.91rem',
                                    letterSpacing: '0.3px',
                                    fontWeight: (activeSegment === item.targetSegment) ? 'bolder' : 'normal',
                                    color: (activeSegment === item.targetSegment) ? '#2B3C92' : '#2d2929',
                                }}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                    {isUserLoggedin ? (
                        <div className="relative hidden lg:flex lg:flex-1 lg:gap-[15px] lg:justify-end px-[1.5rem]">
                            <Dropdown />
                        </div>
                    ) : (

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            {/* <DarkModeToggle /> */}
                            <Login />
                        </div>
                    )}
                </nav>
            </Container>
            <Dialog as="div" className="lg:hidden" open={isOpen} onClose={setIsOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image
                                className="h-12 w-auto"
                                src={Logo}
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FaTimes className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <li className='list-none' key={item.id}>
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base uppercase leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                            {isUserLoggedin ? (
                                <div className="py-6 relative">
                                    <Dropdown />
                                </div>
                            ) : (

                                <div className="py-6">
                                    {/* <DarkModeToggle /> */}
                                    <li className="list-none">
                                        <Login />
                                    </li>
                                </div>
                            )}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}

export default Header