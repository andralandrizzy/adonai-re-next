import FooterLogo from '@/public/img/logo-min.jpeg';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Container from './Container';
import Link from 'next/link';


const Footer = () => {
    return (
        <section className="w-full py-[3rem] text-[#a4a1a1] bg-[#000000]">
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 
                justify-center gap-20 items-start">
                    <div className="flex-col justify-center items-center">
                        <Image className="rounded-md" src={FooterLogo} width={250} alt='footer logo' />
                        <p className='text-sm py-[2rem] tracking-wide leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores velit omnis placeat,
                            repellat asperiores minima in quae doloremque cupiditate natus
                            doloribus mollitia libero ea molestiae.</p>
                        <div className="flex justify-start items-center gap-8">
                            <Link href="#" className="flex justify-center items-center gap-8 w-[35px] p-[1.2rem] decoration-0 text-[1.425em]
                     h-[35px] rounded-full border-2 border-indigo-800 text-indigo-800"><i><FaFacebookF /></i></Link>
                            <Link href="#" className="flex justify-center items-center gap-8 w-[35px] p-[1.2rem] decoration-0 text-[1.425em]
                     h-[35px] rounded-full border-2 border-indigo-800 text-indigo-800"><i><FaTwitter /></i></Link>
                            <Link href="#" className="flex justify-center items-center gap-8 w-[35px] p-[1.2rem] decoration-0 text-[1.425em]
                     h-[35px] rounded-full border-2 border-indigo-800 text-indigo-800"><i><FaInstagram /></i></Link>
                            <Link href="#" className="flex justify-center items-center gap-8 w-[35px] p-[1.2rem] decoration-0 text-[1.425em]
                     h-[35px] rounded-full border-2 border-indigo-800 text-indigo-800"><i><FaLinkedinIn /></i></Link>
                        </div>
                    </div>
                    <div className="flex-col">
                        <h1 className='pb-[1.5rem] text-[1.56rem] text-indigo-800'>Important Link</h1>
                        <li className='list-none text-[1.1rem] tracking-wide'>Why Choose us</li>
                        <li className='list-none text-[1.1rem] tracking-wide py-[1.1rem]'>Leave Testimonial</li>
                        <li className='list-none text-[1.1rem] tracking-wide'>Reviews</li>
                    </div>
                    <div className="flex-col">
                        <h1 className='pb-[1.5rem] text-[1.56rem] text-indigo-800'>Newsletter</h1>
                        <p className='text-sm tracking-wide leading-relaxed pb-[2rem]'>Subscribe To Our Newsletter To Get Updates About Our Services</p>
                        <form className="space-y-6" action="#" method="POST">
                            <div className="mt-2">
                                <input id="email" name="email" type="email" placeholder='Email Address' required className="block w-full 
                        rounded-md border-0 py-2.5 px-[8px] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-center
                        ocus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center 
                        rounded-md px-3 py-2.5 text-md font-semibold leading-6 
                        text-white shadow-sm focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                        bg-indigo-800 rounded-full text-white hover:bg-gradient-to-r from-blue-800 to-blue-700"
                                >Subscribe
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                <p className="text-md text-center pt-[3.5rem]"> Copyright &copy;2023 All rights reserved | Created by Andral Orelus</p>
            </Container>
        </section>
    )
}

export default Footer