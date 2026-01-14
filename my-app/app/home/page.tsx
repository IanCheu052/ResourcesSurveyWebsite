import React from 'react';
import Image from 'next/image';
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
            <div className='flex flex-col pb-24 px-60 items-center bg-[var(--rs-grey-bg-1)]'>
                <div className='text-[var(--rs-black-1)] text-4xl font-bold pt-12'>
                    We Can Map Anything
                </div>
                <div className='text-[var(--rs-grey-1)] max-w-3xl text-xl font-light py-6 px-6'>
                    Just Ask Us, and We Will Plan, Provide, Produce a Survey Plot Just For You
                </div>
                <div className='grid grid-cols-4 text-(--rs-black-1) bg-(--rs-white-1) text-2xl font-semibold gap-4 p-10 rounded-4xl'>
                    <div className='flex flex-col items-center'>
                        <div className='py-4 mb-4 bg-(--rs-black-1) text-(--rs-yellow-1) w-42 text-center rounded-2xl text-xl'>
                            Land

                        </div>
                        <Image src="/images/DJI_0005.JPG" alt="Aerial drone" width={500} height={1400} className="bg-no-repeat w-full h-full object-none rounded-2xl" />
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='py-4 mb-4 bg-(--rs-black-1) text-(--rs-yellow-1) w-42 text-center rounded-2xl text-xl'>
                            Water
                        </div>
                        <Image src="/images/DJI_0399.JPG" alt="Aerial drone" width={500} height={1400} className="bg-no-repeat w-full h-full object-none rounded-2xl" />
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='py-4 mb-4 bg-(--rs-black-1) text-(--rs-yellow-1) w-42 text-center rounded-2xl text-xl'>
                            Underground
                        </div>
                        <Image src="/images/DJI_0849.JPG" alt="Aerial drone" width={500} height={1400} className="bg-no-repeat w-full h-full object-none rounded-2xl" />
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='py-4 mb-4 bg-(--rs-black-1) text-(--rs-yellow-1) w-42 text-center rounded-2xl text-xl'>
                            Aerial
                        </div>
                        <Image src="/images/AIR.jpeg" alt="Aerial drone" width={500} height={1400} className="bg-no-repeat w-full h-full object-none rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}