import React from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import { Medal } from 'lucide-react';
import { Drone } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';


export default function HomePage() {
    return (
        <div className='bg-[#d9d9d9]'>
            <Header />
            <div className="bg-hero h-screen bg-cover bg-center mb-4 pt-16">
                <div className='text-8xl font-bold leading-tight pl-20 pt-18 pb-12'>
                    <div className='text-(--rs-yellow-1)'>
                        Resources
                    </div>
                    <div className='text-(--rs-yellow-2)'>
                        Survey
                    </div>
                    <div className='text-(--rs-grey-bg-1)'>
                        Services
                    </div>
                </div>
                <div className='flex flex-row text-4xl text-(--rs-grey-bg-1) font-semibold pl-20 pt-8'>
                    We Can Map
                    <div className='pl-2 text-(--rs-yellow-1)'>
                        Everything
                    </div>
                </div>
                <div className='flex flex-row pl-20 pt-12'>
                    <button className='bg-(--rs-yellow-3) text-(--rs-black-2) font-bold py-4 px-20 mr-6 rounded-lg'>
                        Our Services
                    </button>
                    <button className='bg-(--rs-black-1) text-(--rs-yellow-1) font-bold py-4 px-20 mr-6 rounded-lg hover:bg-[var(--rs-black-2)] transition duration-300'>
                        Contact Us
                    </button>
                </div>
            </div>
            <div className='flex flex-col pb-24 px-60 items-center bg-(--rs-grey-bg-1)'>
                <div className='text-(--rs-black-1) text-4xl font-bold pt-12'>
                    We Can Map Anything
                </div>
                <div className='text-(--rs-grey-1) max-w-3xl text-xl font-light py-6 px-6'>
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

            <div className='bg-(--rs-black-1) text-(--rs-yellow-1) items-center '>
                <div>
                    <div className="text-4xl font-bold pt-12 text-center">
                        Land and Survey Services
                    </div>
                    <div className='text-xl font-light pt-6 px-60 text-center text-(--rs-yellow-2)'>
                        We provide complete surveying, geospatial, and land consultancy services,
                        supporting your vision from early planning until final completion.
                    </div>

                </div>
                <div className='grid grid-cols-3 w-3/4 mx-auto'>
                    <div className='text-2xl font-bold p-12 flex flex-col items-center'>
                        <Medal size={48} className="mb-4" />
                        <div className='text-center'>
                            Trusted Expertise
                        </div>
                        <div className='text-center text-xl font-light pt-4'>
                            Our experienced and qualified professionals deliver reliable surveying and consultancy
                            services with strong technical knowledge to your project.
                        </div>
                    </div>

                    <div className='text-2xl font-bold p-12 flex flex-col items-center'>
                        <Drone size={48} className="mb-4" />
                        <div className='text-center'>
                            Advanced Surveying Technology
                        </div>
                        <div className='text-center text-xl font-light pt-4'>
                            We use modern surveying equipment and geospatial technologies and software
                            to ensure accurate, efficient, and high-quality results.
                        </div>
                    </div>

                    <div className='text-2xl font-bold p-12 flex flex-col items-center'>
                        <MessagesSquare size={48} className="mb-4" />
                        <div className='text-center'>
                            Our Commitment to You
                        </div>
                        <div className='text-center text-xl font-light pt-4'>
                            Our work and commitment is to understand your needs for the project and
                            provide tailored practical and efficient solutions.
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-(--rs-black-1) bg-(--rs-grey-bg-2) text-2xl flex flex-col px-12 py-12'>
                <div className='font-bold p-4 bg-(--rs-yellow-1) w-48 text-center rounded-4xl'>
                    Our Affliation
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}