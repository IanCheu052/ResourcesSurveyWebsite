'use client'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from 'leaflet'

const center: LatLngExpression = [1.553152, 110.370111]

const LeafletMap = () => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      className="h-100 w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} />
    </MapContainer>
  )
}

export default LeafletMap;

