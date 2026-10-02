"use client";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { renderToStaticMarkup } from 'react-dom/server'
import { LatLngExpression } from 'leaflet'

import { MapPin } from 'lucide-react'
import { useState } from 'react'


const center: LatLngExpression = [1.553152, 110.370111]

const LeafletMap = () => {
  const [viewMap, setViewMap] = useState(false);
  
  const pinIcon = L.divIcon({
    className: '',
    html: renderToStaticMarkup(
      <div className='flex flex-col items-center' onClick={() => setViewMap(true)}>
          
          <MapPin 
          size={32} 
          color="#0f172a"
          fill="#FF0000"
          strokeWidth={2} />

          <div className="
          mt-1
          px-2 py-0.5
          bg-white
          text-[10px] 
          font-medium
          text-(--rs-grey-1)
          rounded-md
          shadow
          whitespace-nowrap
          w-fit
        ">
          We are here!
        </div>
      </div>
    ),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  })

  return (
    <MapContainer
      center={center}
      zoom={18}
      className="h-100 w-100 rounded-4xl shadow-lg"
      
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={pinIcon} 
      eventHandlers={{
      click: () => {
        // Open another website in a new tab
        window.open("https://www.google.com/maps/place/Resources+Surveys+Services/@1.5532814,110.3699112,19.29z/data=!4m6!3m5!1s0x31fba7c9d66913cf:0xe527b80d9ed9300d!8m2!3d1.5533354!4d110.3701215!16s%2Fg%2F11bx51qhp5?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D", 
          '_blank');
        }
      }} />
      
    </MapContainer>
  )
}

export default LeafletMap;

