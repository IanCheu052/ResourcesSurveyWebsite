"use client";
import { LandPlot } from "lucide-react";
import { useState } from "react";
import ServiceDesc from "@/types/ServiceDesc";

const ServiceBox = ({contents}: {contents: ServiceDesc[]}) => {
        const [openSections, setOpenSections] = useState<Set<string>>(new Set());
        
    
        const toggleSection = (title: string) => {
            setOpenSections((prev) => {
                const updated = new Set(prev);
    
                if (updated.has(title)) {
                    updated.delete(title);
                } else {
                    updated.add(title);
                }
    
                return updated;
            });
        };
    
    return (
        <div className="grid grid-cols-1 md:grid-rows-2 items-center gap-4 p-4">
        {
            contents.map((content, i) => 
                <div 
                    className="flex flex-col gap-4"
                    key={contents[i].main ?? i}    
                >
                    <div className="flex flex-row items-center justify-center text-center">
                        <LandPlot className="w-24 h-24 md:w-32 md:h-32" />
                    </div>
                    <div className="w-full text-sm md:text-base">
                        <div className="border-b border-gray-300 py-3">
                            <button
                                type="button"
                                onClick={() => toggleSection(content.title)}
                                aria-expanded={openSections.has(content.title)}
                                className="flex w-full items-center justify-between gap-4 text-left font-semibold"
                            >
                                <span>{content.title}</span>
                                <span>
                                    {openSections.has(content.title) ? "−" : "+"}
                                </span>
                            </button>
                            {openSections.has(content.title) && (
                                <div className="pt-2 text-left font-normal text-gray-600">
                                    {content.description}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
                    
            {/* Icon and title
            <div className="flex flex-row items-center justify-center text-center">
                <LandPlot className="w-24 h-24 md:w-32 md:h-32" />

                <h2 className="font-bold text-base md:text-xl mt-4">
                    Land Development & Administration Consultancy
                </h2>
            </div>


            <div className="w-full text-sm md:text-base">


                <div className="border-b border-gray-300 py-3">
                    <button
                        type="button"
                        onClick={() =>
                            toggleSection("Land Development Consultancy")
                        }
                        aria-expanded={openSections.has(
                            "Land Development Consultancy"
                        )}
                        className="flex w-full items-center justify-between gap-4 text-left font-semibold"
                    >
                        <span>Land Development Consultancy</span>

                        <span>
                            {openSections.has("Land Development Consultancy")
                                ? "−"
                                : "+"}
                        </span>
                    </button>

                    {openSections.has("Land Development Consultancy") && (
                        <div className="pt-2 text-left font-normal text-gray-600">
                            Feasibility studies, layout plans, and planning briefs
                            for housing, commercial, industrial, and agricultural
                            developments.
                        </div>
                    )}
                </div>


                <div className="border-b border-gray-300 py-3">
                    <button
                        type="button"
                        onClick={() =>
                            toggleSection(
                                "Sarawak Land Administration Consultancy"
                            )
                        }
                        aria-expanded={openSections.has(
                            "Sarawak Land Administration Consultancy"
                        )}
                        className="flex w-full items-center justify-between gap-4 text-left font-semibold"
                    >
                        <span>
                            Sarawak Land Administration Consultancy
                        </span>

                        <span>
                            {openSections.has(
                                "Sarawak Land Administration Consultancy"
                            )
                                ? "−"
                                : "+"}
                        </span>
                    </button>

                    {openSections.has(
                        "Sarawak Land Administration Consultancy"
                    ) && (
                        <div className="pt-2 text-left font-normal text-gray-600">
                            Advisory services for land matters, approvals, and
                            compliance with Sarawak land regulations.
                        </div>
                    )}
                </div>

            </div> */}
        </div>

    );
}

export default ServiceBox;