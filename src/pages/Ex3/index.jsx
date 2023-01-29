import {
	LayerGroup,
	LayersControl,
	MapContainer,
	Marker,
	Polygon,
	Popup,
	TileLayer,
} from 'react-leaflet';

import { multiPolygon, polygon, purple, red } from '../../assets/vectors';

import 'leaflet/dist/leaflet.css';

const mapOptions = {
	center: [-23.2994, -45.9587],
	zoom: 20,
};

export function Ex3() {
	return (
		<>
			<MapContainer className="map_container" center={mapOptions.center} zoom={mapOptions.zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LayersControl position="topright">
					<LayersControl.Overlay name="Marker" checked>
						<Marker position={[-23.2994, -45.9587]}>
							<Popup>Lorem ipsum</Popup>
						</Marker>
					</LayersControl.Overlay>
					<LayersControl.Overlay name="Polygons">
						<LayerGroup>
							<Polygon pathOptions={purple} positions={polygon}>
								<Popup>Lorem ipsum</Popup>
							</Polygon>
							<Polygon pathOptions={red} positions={multiPolygon}>
								<Popup>Lorem ipsum</Popup>
							</Polygon>
						</LayerGroup>
					</LayersControl.Overlay>
				</LayersControl>
			</MapContainer>
			<div>
				<h1>exemplo de como adicionar controle de camadas</h1>
			</div>
		</>
	);
}
