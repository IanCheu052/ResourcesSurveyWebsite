import Header from "@/components/Header";
import { Earth } from 'lucide-react';

export default function ServicesPage() {
    return (
        <div className="bg-(--rs-grey-bg-1) min-h-screen">
            <Header />
            <div className="flex flex-col items-center text-(--rs-black-1) text-4xl font-bold py-12">
                Our Services
                <div className="text-xl font-semibold mt-2 opacity-40 underline underline-offset-8 my-4">
                    Services that we will provide
                </div>

                <div className="grid grid-cols-2 text-(--rs-black-1) gap-12 mt-6">
                    <div className="bg-(--rs-grey-1) shadow-mxl max-w-140 items-center">
                        <div className="flex flex-row items-center p-6 gap-16">
                            <Earth className="w-30 h-30 ml-4 text-center" />

                            <span className="text-3xl font-semibold">
                                Land Development & Administration
                            </span>
                        </div>

                        <div className="p-6 text-lg font-normal leading-7">
                            <div className="font-bold">
                                Land Development Consultancy
                            </div>

                            Feasibility studies, layout plans, and planning briefs for housing, commercial,
                            industrial, and agricultural developments.

                            <div className="font-bold mt-4">
                                Sarawak Land Adminstration Consultancy
                            </div>
                            Advisory services for land matters, approvals and compliance with Sarawak land regulations.
                        </div>

                        <button className="text-(--rs-yellow-1) bg-(--rs-black-1) text-lg font-normal py-3 px-6 m-6 rounded">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}