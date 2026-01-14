import React from 'react';
import Header from "@/components/Header";

export default function HomePage() {
    return (
        <div className='bg-[#d9d9d9]'>
            <Header />
            <div className="bg-hero h-screen bg-cover bg-center mb-4 pt-16">
                <div className='text-8xl font-bold leading-tight pl-20 pt-18 pb-8'>
                    <div className='text-[var(--rs-yellow-1)]'>
                        Resources
                    </div>
                    <div className='text-[var(--rs-yellow-2)]'>
                        Survey
                    </div>
                    <div className='text-[var(--rs-grey-bg-1)]'>
                        Services
                    </div>
                </div>
                <div className='flex flex-row text-4xl text-[var(--rs-grey-bg-1)] font-semibold pl-20 pt-8'>
                    We Can Map
                    <div className='pl-2 text-[var(--rs-yellow-1)]'>
                        Everything
                    </div>
                </div>
                <div className='flex flex-row pl-20 pt-12'>
                    <button className='bg-[var(--rs-yellow-3)] text-[var(--rs-black-2)] font-bold py-4 px-20 mr-6 rounded-lg'>
                        Our Services
                    </button>
                    <button className='bg-[var(--rs-black-1)] text-[var(--rs-yellow-1)] font-bold py-4 px-20 mr-6 rounded-lg hover:bg-[var(--rs-black-2)] text-[var(--rs-yellow-3)] transition duration-300'>
                        Contact Us
                    </button>
                </div>
            </div>
            <div className='flex flex-col pb-24 px-48 items-center bg-[var(--rs-grey-bg-2)]'>
                <div className='text-[var(--rs-black-1)] text-4xl font-bold pt-12 pb-6'>
                    We Can Map Anything
                </div>
                <div className='text-[var(--rs-grey-bg-2)] max-w-3xl text-xl font-light py-6 px-6'>
                    Just Ask Us, and We Will Plan, Provide, Produce a Survey Plot Just For You
                </div>
                <div className='flex flex-row text-[var(--rs-black-1)] text-2xl font-semibold gap-12 pt-12'>
                    <div className='flex flex-column'>
                        <div>
                            Land
                        </div>
                        <div className="bg">

                        </div>

                    </div>
                    <div className='flex flex-column'>
                        Water
                    </div>
                    <div className='flex flex-column'>
                        Underground
                    </div>
                    <div className='flex flex-column'>
                        Aerial
                    </div>
                </div>
            </div>
        </div>
    );
}