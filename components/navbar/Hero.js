"use client"

import React, { useState, useEffect } from 'react';
import Container from '../Container';


const Hero = () => {
    const slides = [
        {
            url: '/img/beach_house-min.jpeg',
        },
        {
            url: '/img/flower_house_com.jpeg',
        },
        {
            url: '/img/pool_com.jpeg',
        },
        {
            url: '/img/lightsnow-min.jpeg',
        },
        {
            url: '/img/treehouse-min.jpg',
        },
        {
            url: '/img/mansion_com.jpeg',
        }
    ];
    const [currentState, setCurrentState] = useState(0);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === slides.length - 1) {
                
                setCurrentState(0)
            } else {
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [currentState])

    return (
        <div className='max-w-full h-full w-full m-auto relative'>
            <div
                style={{ backgroundImage: `url(${slides[currentState].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div>

            <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full flex  justify-center items-center bg-blue-600/10 backdrop-brightness-50">

                <div className="absolute flex flex-col items-stretch justify-center bottom-0 top-0 left-0 right-0 w-full">
                    <h1 className='head_text text-center uppercase text-5xl mx-auto mb-8 text-transparent
                    font-bold bg-opacity-2 bg-clip-text bg-gradient-to-r from-blue-300 via-stone-300 to-blue-500
                    '>
                        Find your dream
                        <br />
                        <span> house with us</span>
                    </h1>
                    <div className="relative mb-4 lg:flex mx-auto gap-2 sm:w-6/12 flex items-stretch">
                        <input
                            type="search"
                            className="relative m-0 -mr-0.5 block lg:w-[1px] min-w-0 
                            flex-auto rounded-lg bg-white bg-clip-padding px-3 py-[.60rem] 
                            text-base font-normal leading-[1.6] text-neutral-700 outline-none 
                            transition duration-200 ease-in-out focus:z-[3] focus:border-primary 
                            focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] 
                            focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-zinc-500 
                            dark:focus:border-primary placeholder:text-[.8rem]"
                            placeholder="Your zip code or city (e.g, Miami)"
                            aria-label="Search"
                            aria-describedby="button-addon3" />

                        {/* Search button*/}
                        <button
                            className="relative z-[2] rounded-lg text-white px-6 
                            py-2 text-xs font-medium uppercase text-primary transition 
                            duration-150 ease-in-out focus:outline-none focus:ring-0
                            bg-indigo-800 rounded-full text-white hover:bg-gradient-to-r from-blue-800 to-blue-700"
                            type="button"
                            id="button-addon3"
                            data-te-ripple-init>
                            Search
                        </button>
                    </div>
                </div>
            </div>

        </div >
    );
}


export default Hero