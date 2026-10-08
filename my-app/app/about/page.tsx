"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import WhoWeAre from "@/components/WhoWeAre";
// import OurVision from "@/components/OurVision";
import OurOrganisation from "@/components/Ourorganisation";
import { AnimatePresence, motion } from "framer-motion";
import OurVision from "@/components/OurVision";


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
                
                    <div className= "relative bg-transparent bg-[url('/images/mining/DJI_0741.JPG')] bg-cover bg-center flex flex-col items-center min-h-screen mb-4 md:text-6xl text-2xl font-bold leading-tight md:pl-20 pl-3 md:pt-96 pt-30 pb-12 text-(--rs-yellow-1)">
                        <div className="w-full min-h-[120%] sm:pt-32 pt-10">
                            <div className="text-left w-full">
                                About Us
                            </div>
                        
                            <div className="text-left w-full md:text-3xl text-xl font-light pt-8 text-(--rs-grey-bg-1)">
                                Where it all started
                            </div>
                            <div className="grid grid-cols-4 font-light md:max-w-6/7 text-(--rs-grey-bg-2) md:text-xl text-sm items-center text-center opacity-70 md:pt-24 pt-2 md:px-20 px-2 md:gap-20 gap-2 my-20">
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
                                    className="md:text-xl text-sm font-light
                                            text-(--rs-grey-bg-1)
                                            bg-(--rs-white-1)/30
                                            md:p-8
                                            py-2
                                            px-1
                                            rounded-4xl
                                            lg:w-11/12
                                            w-fit
                                            shadow-lg
                                            overflow-hidden
                                            "
                                >
                                {content === "Who We Are" && <WhoWeAre/>}
                                {content === "Our Vision" &&     
                                <OurVision/>}
                                {content === "Our Organisation" && <OurOrganisation/>}
                            </motion.div>        
                        </AnimatePresence>                  

                    </div>
                </div>
            </div>
    );
}