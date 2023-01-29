import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const mapOptions = {
	center: [-23.2994, -45.9587],
	zoom: 20,
};

export function Ex1() {
	return (
		<>
			<MapContainer className="map_container" center={mapOptions.center} zoom={mapOptions.zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[-23.2994, -45.9587]}>
					<Popup>Lorem ipsum</Popup>
					<Tooltip>Lorem ipsum</Tooltip>
				</Marker>
			</MapContainer>
			<div>
				<h1>exemplo de como adicionar um marcador</h1>
			</div>
		</>
	);
}
