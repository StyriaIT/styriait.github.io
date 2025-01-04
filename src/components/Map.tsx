import { divIcon } from "leaflet";
import { MapContainer, TileLayer, Marker  } from 'react-leaflet';

export default function Map() {
    const size = 15;
    const icon = divIcon({
        iconSize: [size, size],
        iconAnchor: [size / 2, size + 9],
        className: "mymarker",
        html: `
        <svg width="25" height="25" viewBox="-4 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-125.000000, -643.000000)">
                    <g transform="translate(37.000000, 169.000000)">
                        <g transform="translate(78.000000, 468.000000)">
                            <g transform="translate(10.000000, 6.000000)">
                                <path 
                                    d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill="#FF6E6E">
                                </path>
                                <circle fill="#0C0058" fill-rule="nonzero" cx="14" cy="14" r="7">
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>`
    });

    return (
        <MapContainer center={[52.5172077, 13.3833228]} zoom={15} scrollWheelZoom={false} className="w-full h-[90%]">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[52.51723056767026, 13.386262468175785]} icon={icon} />
        </MapContainer>
    );
}