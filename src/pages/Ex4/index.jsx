import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet';

import { EditControl } from 'react-leaflet-draw';

import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';

const mapOptions = {
	center: [-23.2994, -45.9587],
	zoom: 20,
};

export function Ex4() {
	const createdFeature = (event) => {
		console.log('event', event);

		const { layerType, layer } = event;

		if (layerType === 'polygon') {
			const { _leaflet_id } = layer;

			console.log({ id: _leaflet_id, coords: layer.getLatLngs()[0] });
		}
	};

	return (
		<>
			<MapContainer className="map_container" center={mapOptions.center} zoom={mapOptions.zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<FeatureGroup>
					<EditControl
						position="topright"
						onCreated={createdFeature}
						draw={{
							rectangle: false,
							circle: false,
							marker: false,
							circlemarker: false,
							polyline: false,
						}}
					/>
				</FeatureGroup>
			</MapContainer>
			<div>
				<h1>exemplo de como adicionar controle de edição</h1>
			</div>
		</>
	);
}
