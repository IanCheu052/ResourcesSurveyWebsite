import React from "react";
import Header from "@/components/Header";

export default function AboutPage() {
    return (
        <div className='bg-[#d9d9d9]'>
            <Header />

            <div className="bg-hero-about h-screen bg-rotate-90 bg-cover bg-center mb-4 text-6xl font-bold leading-tight pl-20 pt-18 pb-12 text-(--rs-yellow-1)">
                About Us
                <div className="text-4xl font-light pt-8 text-(--rs-grey-2)">
                    How it all started
                </div>
                <div className="flex flex-row pt-12 text-2xl font-light text-(--rs-grey-1) max-w-4xl">
                    <div>
                        Who we are
                    </div>
                    <div>
                        Established in 1995, Resources Surveys Services is a leading land 
                        surveying consultancy based in Malaysia. We are dedicated to providing 
                        professional and reliable surveying services to support land 
                        development and infrastructure projects across the region.
                    </div>
                    <div>
                        Resources Surveys Services is a leading land surveying 
                        consultancy providing professional and reliable surveying 
                        services. With over 30 years of experience, we specialize in 
                        delivering precise land measurements, mapping, and spatial 
                        data solutions to support land development and infrastructure 
                        projects.
                    </div>
                    <div>
                        Our vision is to "MAP everything" and anything. This mission requires us to be a
                        continuously learning and evolving mapping company. We will provide the most precise 
                        mapping along with the greatest team to support your needs.
                    </div>
                </div>
            </div>



        </div>
    );
}