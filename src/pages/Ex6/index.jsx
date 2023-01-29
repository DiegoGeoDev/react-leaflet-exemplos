import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';

import { MapPrint } from './MapPrint';

import 'leaflet/dist/leaflet.css';

const mapOptions = {
	center: [-23.2994, -45.9587],
	zoom: 20,
};

export function Ex6() {
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

				<MapPrint
					position="topleft"
					sizeModes={['Current', 'A4Portrait', 'A4Landscape']}
					hideControlContainer={false}
					title="Print"
				/>
				<MapPrint
					position="topleft"
					sizeModes={['Current', 'A4Portrait', 'A4Landscape']}
					hideControlContainer={false}
					title="Export as PNG"
					exportOnly
				/>
			</MapContainer>
			<div>
				<h1>exemplo de como imprimir/baixar mapas</h1>
			</div>
		</>
	);
}
