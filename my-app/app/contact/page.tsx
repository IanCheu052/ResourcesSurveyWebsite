"use client";
import EnquiryForm from "@/components/forms/EnquiryForm";
import HireForm from "@/components/forms/HireForm";
import Header from "@/components/Header";
import { useState } from "react";

export default function ContactPage() {
    const [currentForm, setCurrentForm] = useState<"enquiry" | "hire">("enquiry")
    return (
        <div className="bg-(--rs-grey-bg-1) fill-background min-h-screen">
            <Header/>
            <div className="grid grid-cols-2 items-center justify-center min-h-screen px-40 gap-20 pb-40">
                <div className="flex flex-col items-start gap-10">
                    <div className="text-5xl font-bold text-left">
                    Contact Us
                    </div>
                    <img src="/icons/undraw_people-search_xpq4 (2).svg" alt="Contact Us" className="w-150 h-150" />
                    
                </div>
                <div>
                    <button className="bg-(--rs-bg-grey-1) text-(--rs-black-1) font-bold py-4 px-12 mr-6 rounded-lg hover:bg-(--rs-grey-1) hover:text-white transition duration-300" 
                    onClick={() => setCurrentForm("enquiry")}>
                        For Enquiry
                    </button>
                    <button className="bg-(--rs-bg-grey-1) text-(--rs-black-1) font-bold py-4 px-12 rounded-lg hover:bg-(--rs-grey-1) hover:text-white transition duration-300"
                    onClick={() => setCurrentForm("hire")}>
                        For Hiring
                    </button>
                
                    {currentForm === "enquiry" ? <EnquiryForm /> : <HireForm />}
                </div>
            </div>
        </div>
    );
}