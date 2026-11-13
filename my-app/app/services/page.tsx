'use client';

import Header from "@/components/Header";
import { LandPlot } from "lucide-react";
import { useState } from "react";
import ServiceBox from "@/components/ServiceBox";
import ServiceDesc from "@/types/ServiceDesc";

export default function ServicesPage() {
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

    const serviceContents: ServiceDesc[] = [
        {
        title: "Land Development Consultancy",
        description: "Feasibility studies, layout plans, and planning briefs for housing, commercial, industrial, and agricultural developments."
        },
        {
        title: "Sarawak Land Administration Consultancy",
        description: "Support for land administration processes in Sarawak, including permits, registrations, and compliance."
        },
        {
        title: "Topographic Surveying",
        description: "Detailed mapping of land features, elevations, and contours for various applications."
        },
        {
        title: "Hydrographic Surveying",
        description: "Mapping and analysis of water bodies, including rivers, lakes, and coastal areas."
        },
        {
        title: "Construction Surveying",
        description: "Surveying services for construction projects, ensuring accurate measurements and layouts."
        },
        {
        title: "Engineering Surveying", 
        description: "Surveying services for engineering projects, including infrastructure and utilities."
        },
        {
        title: "Geodetic Surveying",
        description: "High-precision surveying for establishing control networks and geospatial data."
        },
        {
        title: "Mining Surveying",
        description: "Surveying services for mining operations, including exploration, extraction, and reclamation."
        }
    ];

    return (
        <div>
            <Header/>
            <ServiceBox contents={serviceContents}/>
            {/* 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8 w-full">

                Land Development & Administration Consultancy
                <div className="grid grid-cols-1 md:grid-rows-2 items-center gap-4 p-4">

                    
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

                    </div>
                </div>

                
                <div className="flex items-center gap-4 p-4">
                    <LandPlot className="w-16 h-16 shrink-0 md:w-24 md:h-24" />
                    <span>Topographic Surveying</span>
                </div>

                <div className="flex items-center gap-4 p-4">
                    <LandPlot className="w-16 h-16 shrink-0 md:w-24 md:h-24" />
                    <span>Hydrographic Surveying</span>
                </div>

                <div className="flex items-center gap-4 p-4">
                    <LandPlot className="w-16 h-16 shrink-0 md:w-24 md:h-24" />
                    <span>Construction Surveying</span>
                </div>

                <div className="flex items-center gap-4 p-4">
                    <LandPlot className="w-16 h-16 shrink-0 md:w-24 md:h-24" />
                    <span>Engineering Surveying</span>
                </div>

                <div className="flex items-center gap-4 p-4">
                    <LandPlot className="w-16 h-16 shrink-0 md:w-24 md:h-24" />
                    <span>Geodetic Surveying</span>
                </div>

                <div className="flex items-center gap-4 p-4">
                    <LandPlot className="w-16 h-16 shrink-0 md:w-24 md:h-24" />
                    <span>Mining Surveying</span>
                </div>

            </div> */}
        </div>
    );
}
