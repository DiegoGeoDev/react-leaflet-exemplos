import { MapContainer, Polygon, Popup, TileLayer } from 'react-leaflet';

import { multiPolygon, polygon, purple, red } from '../../assets/vectors';

import 'leaflet/dist/leaflet.css';

const mapOptions = {
	center: [-23.2994, -45.9587],
	zoom: 20,
};

export function Ex2() {
	return (
		<>
			<MapContainer className="map_container" center={mapOptions.center} zoom={mapOptions.zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Polygon pathOptions={purple} positions={polygon}>
					<Popup>Lorem ipsum</Popup>
				</Polygon>
				<Polygon pathOptions={red} positions={multiPolygon}>
					<Popup>Lorem ipsum</Popup>
				</Polygon>
			</MapContainer>
			<div>
				<h1>exemplo de como adicionar um polygon/multipolygon</h1>
			</div>
		</>
	);
}
