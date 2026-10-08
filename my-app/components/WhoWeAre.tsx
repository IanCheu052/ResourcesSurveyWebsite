'use client';

import dynamic from "next/dynamic"

const LeafletMap = dynamic(
  () => import("./LeafletMap"),
  { ssr: false }
)

const WhoWeAre = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-rows-1 auto-cols-auto items-center text-(--rs-black-1) w-full mx-auto">
        <div className="md:pl-20 p-0 md:gap-4 gap-2 flex flex-col text-xl">
            <div className="text-2xl text-bold">
                Who we are
            </div>
        
            <div className="md:text-xl text-sm max-w-3xl">
                Established in 1995, Resources Surveys Services is a leading land 
                surveying consultancy based in Malaysia. We are dedicated to providing 
                professional and reliable surveying services to support land 
                development and infrastructure projects across the region.
            </div>
            <div className="md:text-xl text-sm max-w-3xl">
                Resources Surveys Services is a leading land surveying 
                consultancy providing professional and reliable surveying 
                services. With over 30 years of experience, we specialize in 
                delivering precise land measurements, mapping, and spatial 
                data solutions to support land development and infrastructure 
                projects.
            </div>

        </div>
        <div className="flex justify-center p-4">
          <LeafletMap/>
        </div>
    </div>
  );
};

export default WhoWeAre;