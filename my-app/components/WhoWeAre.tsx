'use client';

import LeafletMap from "./LeafletMap";
import dynamic from "next/dynamic"

const LeafletMapDynamic = dynamic(
  () => import("./LeafletMap"),
  { ssr: false }
)

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-2 auto-rows-auto items-center min-w-full gap-32">
        <div>
            <div className="text-2xl text-bold">
                Who we are
            </div>
        
            <div className="max-w-3xl gap-4 pt-4 pb-8">
                Established in 1995, Resources Surveys Services is a leading land 
                surveying consultancy based in Malaysia. We are dedicated to providing 
                professional and reliable surveying services to support land 
                development and infrastructure projects across the region.
            </div>
            <div className="max-w-3xl gap-4 pt-4 pb-8">
                Resources Surveys Services is a leading land surveying 
                consultancy providing professional and reliable surveying 
                services. With over 30 years of experience, we specialize in 
                delivering precise land measurements, mapping, and spatial 
                data solutions to support land development and infrastructure 
                projects.
            </div>
        </div>
        <LeafletMap/>
    </div>
  );
};

export default WhoWeAre;