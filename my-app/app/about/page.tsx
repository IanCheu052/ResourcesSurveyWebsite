"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import dynamic from 'next/dynamic'
import WhoWeAre from "@/components/WhoWeAre";
import OurVision from "@/components/OurVision";
import OurOrganisation from "@/components/Ourorganisation";
import { AnimatePresence, motion } from "framer-motion";


export default function AboutPage() {
    const [scrolled, setScrolled] = useState(false)
    type Section = "Who We Are" | "Our Vision" | "Our Organisation"
    const [content, setContent] = useState<Section>("Who We Are")

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 200)
            
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    return (
        <div className='bg-[#d9d9d9]'>
            <Header />
            <div className="relative overflow-hidden">
                
                    <div className= "relative bg-transparent bg-[url('/images/mining/DJI_0741.JPG')] bg-cover bg-center flex flex-col items-center min-h-screen mb-4 text-6xl font-bold leading-tight pl-20 pt-96 pb-12 text-(--rs-yellow-1)">
                        <div className="w-full min-h-[120%] pt-32">
                            <div className="text-left w-full">
                                About Us
                            </div>
                        
                            <div className="text-left w-full text-3xl font-light pt-8 text-(--rs-grey-bg-1)">
                                Where it all started
                            </div>
                            <div className="grid grid-cols-4 font-light max-w-6/7 text-(--rs-grey-bg-2) text-xl items-center text-center opacity-70 pt-24 px-20 gap-20 mb-20">
                                <span className={content === "Who We Are" ? "underline underline-offset-8 decoration-4 decoration-(--rs-yellow-1) cursor-pointer" : "cursor-pointer"}
                                    onClick={() => setContent("Who We Are")}>
                                    Who We Are
                                </span>
                                <span className={content === "Who We Are" ? "underline underline-offset-8 decoration-4 decoration-(--rs-yellow-1) cursor-pointer" : "cursor-pointer"}
                                    onClick={() => setContent("Who We Are")} >
                                    Find us Here
                                </span>
                                <span className={content === "Our Vision" ? "underline underline-offset-8 decoration-4 decoration-(--rs-yellow-1) cursor-pointer" : "cursor-pointer"}
                                    onClick={() => setContent("Our Vision")}>
                                    Our Vision
                                </span>
                                <span className={content === "Our Organisation" ? "underline underline-offset-8 decoration-4 decoration-(--rs-yellow-1) cursor-pointer" : "cursor-pointer"}
                                    onClick={() => setContent("Our Organisation")}>
                                    Our Organisation
                                </span>
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={content}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="text-xl font-light
                                            text-(--rs-grey-bg-1)
                                            bg-(--rs-white-1)/30
                                            p-8
                                            rounded-4xl
                                            w-11/12
                                            shadow-lg
                                            overflow-hidden
                                            "
                                >
                                {content === "Who We Are" && <WhoWeAre/>}
                                {content === "Our Vision" && <OurVision/>}
                                {content === "Our Organisation" && <OurOrganisation/>}
                            </motion.div>        
                        </AnimatePresence>                  

                    </div>
                </div>
            </div>
    );
}