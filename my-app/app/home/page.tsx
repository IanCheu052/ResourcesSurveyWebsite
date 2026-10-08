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
            <div className="">
                <Header  />
                {
                    /*               
                    HERO BANNER SECTION
                    */
                }
            </div>
            <div className="bg-hero-home w-full bg-cover bg-center md:p-16 p-2 slide-right">
                <div className='md:text-8xl text-5xl font-bold leading-tight md:pl-20 pl-4 pt-10 md:pt-18 pb-12'>
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
                <div className='flex flex-row md:flex-row text-3xl text-(--rs-grey-bg-1) font-semibold md:pl-20 pl-4 pt-8 gap-2'>
                    <div className=''>
                        We Can Map
                    </div>
                    <div className='text-(--rs-yellow-1)'>
                        Everything
                    </div>
                </div>
                <div className='flex flex-row md:pl-20 pl-4 py-12'>
                    <button className='bg-(--rs-yellow-3) text-(--rs-black-2) rounded-lg font-bold py-4 px-10 mr-3
                    md:py-4 md:px-20 md:mr-6'>
                        Our Services
                    </button>
                    <button className='bg-(--rs-black-1) text-(--rs-yellow-1) rounded-lg font-bold py-4 px-10 mr-6  hover:bg-(--rs-black-2) transition duration-300
                    md:py-4 md:px-20 md:mr-6'>
                        Contact Us
                    </button>
                </div>
            </div>
            {
                /*
                 IMAGE VIEWING SECTION
                */
            }
            <div className='flex flex-col min-h-lg px-12 items-center bg-(--rs-grey-bg-1)'>
                <div className='text-(--rs-black-1) text-4xl font-bold pt-12 text-center lg:text-start'>
                    We Can Map Everything
                </div>
                <div className='text-(--rs-grey-1) text-xl font-light py-6 px-6 text-center`'>
                    Just Ask Us, and We Will Plan, Provide, Produce a Survey Plot Just For You
                </div>
                <div className={selectedImage ? 'fixed inset-0 z-9999 flex mx-auto items-center justify-center bg-black/80 ' : 'hidden' } onClick={() => setSelectedImage(null)}>
                        <Image src={selectedImage ?? "/images/hydro/DJI_0123.JPG"} alt="Preview" width={1000} height={1000} className="max-w-[90vw] max-h-[90vh] object-contain "/>
                        <div>
                            
                        </div>                
                </div> 
                <div className='min-w-screen h-screen min-h-screen grid lg:grid-cols-4 grid-cols-2 text-2xl mb:rounded-0 rounded-2xl font-semibold lg:gap-6 lg:px-8 lg:py-10 gap-2 px-4 py-1'>
                    
                    <div className=' relative flex flex-col items-center justify-center text-center p-4 bg-cover bg-center bg-no-repeat bg-[url("/images/landscape/DJI_0005.JPG")] group group-hover:bg-black/50' onClick={() => setSelectedImage("/images/landscape/DJI_0005.JPG")} >
                        {/* <Image src="/images/landscape/DJI_0005.JPG" alt="Land"  width={1000} height={1000} className="bg-no-repeat w-full h-full object-none" />
                    */}
                                           
                        <div className='text-center text-2xl font-bold text-yellow-400 
                        lg:text-3xl lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100'>
                            Land
                        </div>
                        
                    </div>
                    <div className='relative flex flex-col items-center justify-center text-center p-4 bg-cover bg-center bg-no-repeat bg-[url("/images/hydro/DJI_0123.JPG")] group' onClick={() => setSelectedImage("/images/hydro/DJI_0123.JPG")} >
                        
                        <div className='text-center text-2xl font-bold text-yellow-400 
                        lg:text-3xl lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100'>
                            Hydro
                        </div>
                    </div>

                     <div className='relative flex flex-col items-center justify-center text-center p-4 bg-cover bg-center bg-no-repeat bg-[url("/images/mining/DJI_0849.JPG")] group' onClick={() => setSelectedImage("/images/mining/DJI_0849.JPG")} >
                        <div className='text-center text-2xl font-bold text-yellow-400 
                        lg:text-3xl lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100'>
                            Mining
                        </div>
                    </div>

                    <div className='relative flex flex-col items-center justify-center text-center p-4 bg-cover bg-center bg-no-repeat bg-[url("/images/landscape-wps/AIR.jpeg")] group' onClick={() => setSelectedImage("/images/landscape-wps/AIR.jpeg")} >
                        {/* <Image src="/images/landscape-wps/AIR.jpeg" alt="Aerial drone" width={1000} height={1000} className="bg-no-repeat w-full h-full object-none" /> */}
                        <div className='text-center text-2xl font-bold text-yellow-400 
                        lg:text-3xl lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100'>
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

            <div className='min-h-screen bg-(--rs-grey-bg-1) text-(--rs-black-1) items-center justify-center flex flex-col '>
                <div className='center justify-center flex flex-col items-center'>
                    <div className="md:text-4xl lg:text-7xl text-3xl font-bold p-12 md:pb-20 pb-4 text-center ">
                        Land and Survey Services
                    </div>
                    <div className='md:text-xl text-lg font-light p-5 text-center'>
                        We provide complete surveying, geospatial, and land consultancy services,
                        supporting your vision from early planning until final completion.
                    </div>

                </div>
                <div className='grid md:grid-cols-3 md:grid-row-3 w-4/5 mx-auto'>
                    <div className='md:text-2xl text-lg font-bold p-12 flex flex-col items-center'>
                        <Medal size={48} className="mb-4" />
                        <div className='text-center'>
                            Trusted Expertise
                        </div>
                        <div className='text-center md:text-xl text-md font-light pt-4'>
                            Our experienced and qualified professionals deliver reliable surveying and consultancy
                            services with strong technical knowledge to your project.
                        </div>
                    </div>

                    <div className='md:text-2xl text-lg font-bold p-12 flex flex-col items-center'>
                        <Drone size={48} className="mb-4" />
                        <div className='text-center'>
                            Advanced Surveying Technology
                        </div>
                        <div className='text-center md:text-xl text-md font-light pt-4'>
                            We use modern surveying equipment and geospatial technologies and software
                            to ensure accurate, efficient, and high-quality results.
                        </div>
                    </div>

                    <div className='md:text-2xl text-lg font-bold p-12 flex flex-col items-center'>
                        <MessagesSquare size={48} className="mb-4" />
                        <div className='text-center'>
                            Our Commitment to You
                        </div>
                        <div className='text-center md:text-xl text-md font-light pt-4'>
                            Our work and commitment is to understand your needs for the project and
                            provide tailored practical and efficient solutions.
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-h-screen text-(--rs-black-1) bg-(--rs-grey-bg-2) text-2xl flex flex-col items-center justify-center pb-4'>
                <div className='font-bold p-8 mb-16 bg-(--rs-yellow-1) rounded-4xl'>
                    Our Affiliations
                </div>
                <div className="relative overflow-hidden w-full py-8">
                    <div className="flex w-full gap-8 animate-carousel">
                        {logos.map((logos, i) => (
                        <div key={i} className="grid grid-rows-2 items-center justify-center group">
                            
                                <img
                                src={logos}
                                alt={`Affiliation Logo ${i + 1}`}
                                className="md:w-60 md:h-60 sm:w-40 sm:h-40 h-30 w-30 object-contain object-fit md:gap-4 sm:gap-2 md:p-10 p-4 bg-white shadow-md transition-transform duration-300 hover:scale-110"
                                />
                                <div className="group-hover:opacity-100 md:opacity-0 transition-opacity duration-300 text-center md:text-lg text-sm md:max-w-60 sm:max-w-40 max-w-30 font-semibold" id={logoNamesRepeated[i]}>
                                    {logoNamesRepeated[i]}
                                </div>
                            
                        </div>
                        ))}
                    </div>   
                </div>
            </div>
            <div className=" min-h-screen auto-rows-min text-(--rs-black-1) text-4xl font-bold flex flex-col items-center justify-center p-12 bg-(--rs-grey-bg-1)">
                <div className='flex align-left md:items-start text-center text-5xl mb-12 font-bold'>
                    WE'RE HIRING
                </div>
                <div className='flex xl:flex-row flex-col item-center justify-center md:gap-12 gap-4'>
                    <div className='items-center justify-center'>
                        <img src='/icons/undraw_scrum-board.svg' alt="Aerial drone" width={600} height={400} className='object-fit' />

                    </div>
                    <div className='flex flex-col font-light mb-0 max-w-xl md:pt-12 md:pl-8 md:mt-10 text-center items-center'>
                        <div className='text-xl text-balanced p-4'>
                            We are expanding our team and are looking for dedicated professionals
                            to support our surveying and data processing services.
                        </div>
                        <button className='lg:opacity-100 opacity-0 bg-(--rs-yellow-1) text-2xl px-12 py-4 pt-4 whitespace-nowrap mt-20 font-bold rounded-lg hover:bg-(--rs-black-1) hover:text-(--rs-yellow-1) transition duration-300'>
                            Apply Now
                        </button>
                    </div>
                </div>
                <button className='lg:opacity-0 opacity10-0 bg-(--rs-yellow-1) text-2xl px-12 py-4 whitespace-nowrapfont-bold rounded-lg hover:bg-(--rs-black-1) hover:text-(--rs-yellow-1) transition duration-300'>
                    Apply Now
                </button>
            </div>
        </div>
    );
}