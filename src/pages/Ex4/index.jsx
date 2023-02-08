import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet';

import { EditControl } from 'react-leaflet-draw';

import GeoJSON from 'ol/format/GeoJSON.js';
import WKT from 'ol/format/WKT.js';

import proj4 from 'proj4';
proj4.defs(
	'EPSG:31982',
	'+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs'
);

// proj4.defs(
// 	'EPSG:31983',
// 	'+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs'
// );

import * as L from 'leaflet';

import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';

const mapOptions = {
	center: [-21.771292, -53.26838], // y, x
	zoom: 15,
};

export function Ex4() {
	const createdFeature = (event) => {
		// console.log('event', event);

		const { layerType, layer } = event;

		if (layerType === 'polygon') {
			const { _leaflet_id } = layer;

			const coords = layer.getLatLngs()[0];
			const newCoords = coords.map((item) => {
				const result = proj4('EPSG:4326', 'EPSG:31982', [
					Number(item.lng.toFixed(6)),
					Number(item.lat.toFixed(6)),
				]);
				return { lng: result[0], lat: result[1] };
				// 500000, 7456480.2364686
				// console.log(proj4('EPSG:4326', 'EPSG:31983', [-45, -23]));
			});

			const polygon = L.polygon(newCoords);

			const layerGeoJSON = polygon.toGeoJSON();
			const geojson = new GeoJSON();
			const geojsonRead = geojson.readFeature(layerGeoJSON);
			const wkt = new WKT({});
			const wktWrite = wkt.writeFeature(geojsonRead);

			console.log(wktWrite);

			// console.log({ id: _leaflet_id, coords: layer.getLatLngs()[0] });
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
