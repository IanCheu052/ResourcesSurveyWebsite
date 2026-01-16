import React from "react";
import Header from "@/components/Header";

export default function AboutPage() {
    return (
        <div className='bg-[#d9d9d9]'>
            <Header />

            <div className="bg-hero-about h-screen bg-rotate-90 bg-cover bg-center mb-4 text-6xl font-bold leading-tight pl-20 pt-18 pb-12 text-(--rs-yellow-1)">
                About Us
                <div className="text-4xl font-light pt-8 text-(--rs-grey-1)">
                    How it all started
                </div>
                <div className="flex flex-row pt-12 text-2xl font-light text-(--rs-grey-1) max-w-4xl">
                    <div>
                        Who we are
                    </div>
                    <div></div>
                </div>
            </div>



        </div>
    );
}