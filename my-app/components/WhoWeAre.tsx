'use client';

import LeafletMap from "./LeafletMap";
import dynamic from "next/dynamic"

const LeafletMapDynamic = dynamic(
  () => import("./LeafletMap"),
  { ssr: false }
)

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-2 auto-cols-auto items-center text-(--rs-black-1)">
        <div className="pl-20 gap-4 flex flex-col text-xl">
            <div className="text-2xl text-bold">
                Who we are
            </div>
        
            <div className="max-w-3xl">
                Established in 1995, Resources Surveys Services is a leading land 
                surveying consultancy based in Malaysia. We are dedicated to providing 
                professional and reliable surveying services to support land 
                development and infrastructure projects across the region.
            </div>
            <div className="max-w-3xl">
                Resources Surveys Services is a leading land surveying 
                consultancy providing professional and reliable surveying 
                services. With over 30 years of experience, we specialize in 
                delivering precise land measurements, mapping, and spatial 
                data solutions to support land development and infrastructure 
                projects.
            </div>
        </div>
        <div className="flex justify-center">
          <LeafletMap/>
        </div>
    </div>
  );
};

export default WhoWeAre;