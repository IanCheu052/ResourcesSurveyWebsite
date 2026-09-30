"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import { Fullscreen, Medal } from 'lucide-react';
import { Drone } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';


export default function HomePage() {
    const logo =[
        "/logos/ACLS.png" ,
        "/logos/CENTEXS.png",
        "/logos/GOVERNMENT SARAWAK.png",
        "/logos/JUPEM.png",
        "/logos/LEMBAGAN JURUUKUR TANAH.png",
        "/logos/LNS KUCHING.png",
        "/logos/LSB.png",
        "/logos/RISM.png"
    ]
    const logoNames = [
        "ACLS",
        "CENTEXS",
        "GOVERNMENT SARAWAK",
        "JUPEM",
        "LEMBAGAN JURUUKUR TANAH",
        "LNS KUCHING",
        "LSB",
        "RISM"
    ]

    const logos = [...logo, ...logo, ...logo];
    const logoNamesRepeated = [...logoNames, ...logoNames, ...logoNames];
    const images = [
                        ["landscape", "/images/landscape/DJI_0123.JPG"], 
                        ["hydro", "/images/hydro/DJI_0123.JPG"], 
                        ["mining", "/images/mining/DJI_0123.JPG"], 
                        ["air", "/images/air/DJI_0123.JPG"]
                    ];

    const showImagesDetail = (image: string) => {
        setSelectedImage(image);
    }

    const [offset, setOffset] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
   

    useEffect(() => {
    const handleScroll = () => {
        const y = Math.min(window.scrollY * 0.3, 150); // Maximum 150px
        setOffset(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div 
            className="overflow-x-hidden h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth"
        >
            <div className="snap-start">
                <Header  />
                {
                    /*               
                    HERO BANNER SECTION
                    */
                }
            </div>
            <div className="bg-hero-home  h-screen w-full bg-cover bg-center pt-16 slide-right">
                <div className='text-8xl font-bold leading-tight pl-20 pt-18 pb-12'>
                    <div className='text-(--rs-yellow-1)'>
                        Resources
                    </div>
                    <div className='text-(--rs-yellow-2)'>
                        Surveys
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
                    <button className='bg-(--rs-black-1) text-(--rs-yellow-1) font-bold py-4 px-20 mr-6 rounded-lg hover:bg-(--rs-black-2) transition duration-300'>
                        Contact Us
                    </button>
                </div>
            </div>
            {
                /*
                 IMAGE VIEWING SECTION
                */
            }
            <div className='flex flex-col max-h-screen px-12 items-center bg-(--rs-grey-bg-1) snap-start'>
                <div className='text-(--rs-black-1) text-4xl font-bold pt-12'>
                    We Can Map Everything
                </div>
                <div className='text-(--rs-grey-1) text-xl font-light py-6 px-6'>
                    Just Ask Us, and We Will Plan, Provide, Produce a Survey Plot Just For You
                </div>
                <div className={selectedImage ? 'fixed inset-0 z-9999 flex mx-auto items-center justify-center bg-black/80 ' : 'hidden' } onClick={() => setSelectedImage(null)}>
                        <Image src={selectedImage ?? "/images/hydro/DJI_0123.JPG"} alt="Preview" width={1000} height={1000} className="max-w-[90vw] max-h-[90vh] object-contain "/>
                        <div>
                            
                        </div>                
                </div> 
                <div className='min-w-screen h-screen max-h-screen grid grid-cols-4 text-2xl font-semibold gap-12 px-24 py-10'>
                    
                    <div className=' relative flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-[url("/images/landscape/DJI_0005.JPG")] group group-hover:bg-black/50' onClick={() => setSelectedImage("/images/landscape/DJI_0005.JPG")} >
                        {/* <Image src="/images/landscape/DJI_0005.JPG" alt="Land"  width={1000} height={1000} className="bg-no-repeat w-full h-full object-none" />
                    */}
                                           
                        <div className='text-center text-4xl font-bold text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            Land
                        </div>
                        
                    </div>
                    <div className='relative flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-[url("/images/hydro/DJI_0123.JPG")] group' onClick={() => setSelectedImage("/images/hydro/DJI_0123.JPG")} >
                        
                        <div className='text-center text-4xl font-bold text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            Hydro
                        </div>
                    </div>

                     <div className='relative flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-[url("/images/mining/DJI_0849.JPG")] group' onClick={() => setSelectedImage("/images/mining/DJI_0849.JPG")} >
                        <div className='text-center text-4xl font-bold text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            Mining
                        </div>
                    </div>

                    <div className='relative flex flex-col items-center justify-center text-center  bg-cover bg-center bg-no-repeat bg-[url("/images/landscape-wps/AIR.jpeg")] group' onClick={() => setSelectedImage("/images/landscape-wps/AIR.jpeg")} >
                        {/* <Image src="/images/landscape-wps/AIR.jpeg" alt="Aerial drone" width={1000} height={1000} className="bg-no-repeat w-full h-full object-none" /> */}
                        <div className='text-center text-4xl font-bold text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            Airborne
                        </div>
                    </div>
                </div>
            </div>

            {
                /*
                 Bullet points section
                */
            }

            <div className='snap-start min-h-screen bg-(--rs-grey-bg-1) text-(--rs-black-1) items-center justify-center flex flex-col '>
                <div className='center justify-center flex flex-col items-center'>
                    <div className="text-7xl font-bold p-12 pb-20 text-center ">
                        Land and Survey Services
                    </div>
                    <div className='text-2xl font-light py-10 text-center'>
                        We provide complete surveying, geospatial, and land consultancy services,
                        supporting your vision from early planning until final completion.
                    </div>

                </div>
                <div className='grid grid-cols-3 w-4/5 mx-auto'>
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
            <div className='snap-start min-h-screen text-(--rs-black-1) bg-(--rs-grey-bg-2) text-2xl flex flex-col items-center justify-center pb-4'>
                <div className='font-bold p-8 mb-16 bg-(--rs-yellow-1) rounded-4xl'>
                    Our Affiliations
                </div>
                <div className="relative overflow-hidden w-full py-8">
                    <div className="flex w-full gap-8 animate-carousel">
                        {logos.map((logos, i) => (
                        <div key={i} className="flex flex-col items-center justify-center group">
                            
                                <Image
                                src={logos}
                                alt={`Affiliation Logo ${i + 1}`}
                                width={120}
                                height={120}
                                className="w-full h-full object-contain p-12 bg-white shadow-md transition-transform duration-300 hover:scale-110"
                                />
                                <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 pt-4 text-center text-lg font-semibold" id={logoNamesRepeated[i]}>
                                    {logoNamesRepeated[i]}
                                </div>
                            
                        </div>
                        ))}
                    </div>   
                </div>
            </div>
            <div className="snap-start min-h-screen auto-rows-min text-(--rs-black-1) text-4xl font-bold flex flex-col items-center justify-center p-12 bg-(--rs-grey-bg-1)">
                <div className='flex align-left items-start text-5xl mb-12 font-bold'>
                    WE'RE HIRING
                </div>
                <div className='flex flex-row item-center gap-24'>
                    <div className='items-center  '>
                        <Image src='/icons/undraw_scrum-board.svg' alt="Aerial drone" width={600} height={400} />

                    </div>
                    <div className='flex flex-col font-light max-w-xl pt-12 pl-8 mt-10 items-center'>
                        <div className='text-xl text-balanced'>
                            We are expanding our team and are looking for dedicated professionals
                            to support our surveying and data processing services.
                        </div>
                        <button className='bg-(--rs-yellow-1) text-2xl px-12 py-4 whitespace-nowrap mt-20 font-bold rounded-lg hover:bg-(--rs-black-1) hover:text-(--rs-yellow-1) transition duration-300'>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}