"use client";
import EnquiryForm from "@/components/forms/EnquiryForm";
import HireForm from "@/components/forms/HireForm";
import Header from "@/components/Header";
import { useState } from "react";

export default function ContactPage() {
    const [currentForm, setCurrentForm] = useState<"enquiry" | "hire">("enquiry")
    return (
        <div className="bg-(--rs-grey-bg-1) fill-background min-h-screen max-w-screen">
            <Header/>
            <div className="grid grid-cols-2 items-center min-h-screen max-w-screen gap-x-10">                 
                <div className="flex flex-col items-start gap-10 p-20 ">
                    <div className="text-5xl text-start font-bold pl-10">
                        Contact Us
                    </div>

                    <img src="/icons/undraw_people-search_xpq4 (2).svg" alt="Contact Us" className="w-150 h-150" />
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex flex-row">
                        <button className="bg-(--rs-bg-grey-1) text-(--rs-black-1) font-bold py-4 px-12 mr-6 rounded-lg hover:bg-(--rs-grey-1) hover:text-white transition duration-300" 
                        onClick={() => setCurrentForm("enquiry")}>
                            For Enquiry
                        </button>
                        <button className="bg-(--rs-bg-grey-1) text-(--rs-black-1) font-bold py-4 px-12 rounded-lg hover:bg-(--rs-grey-1) hover:text-white transition duration-300"
                        onClick={() => setCurrentForm("hire")}>
                            For Hiring
                        </button>
                    </div>
                    <div className="min-w-[70%]">
                        {currentForm === "enquiry" ? <EnquiryForm /> : <HireForm />}
                    </div>
                </div>
            </div>
        </div>
    );
}