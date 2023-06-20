import Container from "./Container"
import SectionHeadText from "./SectionHeadText"
import keyImg from '@/public/img/keys-min.jpeg'
import Image from "next/image"
import Link from "next/link"
import { ImHome3 } from 'react-icons/im'
import { FaUserAlt } from 'react-icons/fa'
import { MdOutlineSecurity } from 'react-icons/md'


const FunFacts = () => {
    return (
        <section className="w-full h-auto py-10">
            <Container>
                <div className="lg:flex justify-center gap-20 items-center shadow-lg">
                    <div className="w-[100%] h-auto rounded-md">
                        <Image className="rounded-md" alt="fun fact image section" src={keyImg} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className="w-[100%] h-[100%] flex-col justify-center p-[15px] items-start">
                        <div className="icons flex gap-8 justify-center items-center">
                            <Link className="p-[1.8rem] decoration-0 text-[1.425em] text-center bg-gray-100 rounded-full text-indigo-700" href=""><i><ImHome3 /></i></Link>
                            <div className="info py-[1.8rem]">
                                <h1 className="uppercase text-[1.58rem] font-bold py-[.89rem]">QUALITY PROPERTIES</h1>
                                <p className="text-neutral-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius praesentium at</p>
                            </div>
                        </div>
                        <div className="icons flex gap-8 justify-center items-center">
                            <Link className="p-[1.8rem] decoration-0 text-[1.425em] text-center bg-gray-100 rounded-full text-indigo-700" href=""><i><FaUserAlt /></i></Link>
                            <div className="info py-[1.8rem]">
                                <h1 className="uppercase text-[1.58rem] font-bold py-[.89rem]">QUALITY PROPERTIES</h1>
                                <p className="text-neutral-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius praesentium at</p>
                            </div>
                        </div>
                        <div className="icons flex gap-8 justify-center items-center">
                            <Link className="p-[1.8rem] decoration-0 text-[1.425em] text-center bg-gray-100 rounded-full text-indigo-700" href=""><i><MdOutlineSecurity /></i></Link>
                            <div className="info py-[1.8rem]">
                                <h1 className="uppercase text-[1.58rem] font-bold py-[.89rem]">QUALITY PROPERTIES</h1>
                                <p className="text-neutral-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius praesentium at</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] py-[3.5rem] px-[1.5rem] flex flex-wrap gap-10 justify-between items-center">
                    <h1 className="text-[3rem] text-bold text-center text-indigo-700 leading-[35px]">462<br />
                        <span className="text-[1.098rem] text-neutral-800 tracking-wider">#Of Buy Properties</span>
                    </h1>
                    <h1 className="text-[3rem] text-bold text-center text-indigo-700 leading-[35px]">254<br />
                        <span className="text-[1.098rem] text-neutral-800 tracking-wider">#Of Sell Properties</span>
                    </h1>
                    <h1 className="text-[3rem] text-bold text-center text-indigo-700 leading-[35px]">894<br />
                        <span className="text-[1.098rem] text-neutral-800 tracking-wider">#Of All Properties</span>
                    </h1>
                    <h1 className="text-[3rem] text-bold text-center text-indigo-700 leading-[35px]">462<br />
                        <span className="text-[1.098rem] text-neutral-800 tracking-wider">#Of Licenced Brokers</span>
                    </h1>
                </div>
            </Container>
        </section>
    )
}

export default FunFacts