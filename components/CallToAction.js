"use client"

import { FiMap } from 'react-icons/fi'
import { ImUserTie, ImHome3 } from 'react-icons/im'
import Container from './Container'
import Link from 'next/link'

const callToActionContent = [
    {
        id: 1,
        icon: <FiMap />,
        title: 'We can help find places Anywhere in the world',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet accusamus fugiat, quam illum dolorum quidem earum vero reiciendis porro sapiente.'
    },
    {
        id: 2,
        icon: <ImUserTie />,
        title: 'We Have Agents win Long lime Experiences',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet accusamus fugiat, quam illum dolorum quidem earum vero reiciendis porro sapiente.'
    },
    {
        id: 3,
        icon: <ImHome3 />,
        title: 'With Us You Can Buy and Rent Modern Properties',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet accusamus fugiat, quam illum dolorum quidem earum vero reiciendis porro sapiente.'
    },
]


const CallToAction = () => {
    return (
        <>
            <section className='w-full pb-[15px] pt-[35px] bg-gray-100'>
                <Container>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] justify-center w-full">
                        {callToActionContent.map(content => (
                            <div key={content.id} className=" mb-5 bg-white flex-col justify-center items-center text-start py-10 px-10 rounded-md shadow-md">
                                <Link href='#' className='w-20 h-20 flex mx-auto justify-center items-center text-center rounded-full border-2 border-indigo-700' >
                                    <i className='text-3xl font-bold text-indigo-900'>{content.icon}</i>
                                </Link>
                                <h1 className='py-5 text-2xl'>{content.title}</h1>
                                <p className='leading-normal tracking-wider text-sm'>{content.text}</p>
                            </div>

                        ))}
                    </div>
                </Container>
            </section>

        </>
    )
}

export default CallToAction