"use client";
import React from "react";
import Header from "@/components/Header";
import dynamic from 'next/dynamic'
import WhoWeAre from "@/components/WhoWeAre";


export default function AboutPage() {
    const LeafletMap = dynamic(
        () => import('@/components/LeafletMap'),
        { ssr: false }
)
    return (
        <div className='bg-[#d9d9d9]'>
            <Header />
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-about w-[120%] min-h-[160%] -translate-x-1/2 -translate-y-1/2
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
                        <div className="pt-12 text-xl font-light text-(--rs-grey-bg-1) bg-(--rs-white-1)/30 p-8 rounded-4xl w-4/5 shadow-lg">
                            <WhoWeAre/>
                        </div>
                         
                    </div>
                </div>
            </div>
    );
}