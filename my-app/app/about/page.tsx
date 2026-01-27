"use client";
import React from "react";
import Header from "@/components/Header";
import dynamic from 'next/dynamic'


export default function AboutPage() {
    const LeafletMap = dynamic(
        () => import('@/components/LeafletMap'),
        { ssr: false }
)
    return (
        <div className='bg-[#d9d9d9]'>
            <Header />
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-about w-[120%] min-h-[120%] -translate-x-1/2 -translate-y-1/2
                left-1/2 top-1/2 rotate-90 bg-cover bg-center z-0"/>
                    <div className= "relative bg-() z-10 flex flex-col items-center min-h-screen mb-4 text-6xl font-bold leading-tight pl-20 pt-96 pb-12 text-(--rs-yellow-1)">
                        <div className="w-full min-h-[120%] pt-32">
                        <div className="text-left w-full">
                            About Us
                        </div>
                        
                        <div className="text-left w-full text-3xl font-light pt-8 text-(--rs-grey-bg-1)">
                            Where it all started
                        </div>
                            <div className="grid grid-cols-4 font-light max-w-6/7 text-(--rs-grey-bg-2) text-xl items-center text-center opacity-70 pt-24 px-20 gap-20 mb-20">
                                <span>
                                    Who We Are
                                </span>
                                <span>
                                    Find us Here
                                </span>
                                <span>
                                    Our Vision
                                </span>
                                <span>
                                    Our Organisation
                                </span>
                                
                            </div>
                        </div>
                        <div className="pt-12 text-xl font-light text-(--rs-grey-bg-1) bg-(--rs-white-1)/30 p-8 rounded-4xl w-4/5">
                            <div className="text-2xl text-bold">
                                Who we are
                            </div>
                            <div className="max-w-3xl gap-4 pt-4 pb-8">
                                Established in 1995, Resources Surveys Services is a leading land 
                                surveying consultancy based in Malaysia. We are dedicated to providing 
                                professional and reliable surveying services to support land 
                                development and infrastructure projects across the region.
                            </div>
                            <div className="max-w-3xl gap-4 pt-4 pb-8">
                                Resources Surveys Services is a leading land surveying 
                                consultancy providing professional and reliable surveying 
                                services. With over 30 years of experience, we specialize in 
                                delivering precise land measurements, mapping, and spatial 
                                data solutions to support land development and infrastructure 
                                projects.
                            </div>
                            <div className="text-2xl font-bold pt-8">
                                Our vision is to "MAP everything" and anything. This mission requires us to be a
                                continuously learning and evolving mapping company. We will provide the most precise 
                                mapping along with the greatest team to support your needs.
                            </div>
                            <LeafletMap />
                        </div>
                         
                    </div>
                </div>
            </div>
    );
}