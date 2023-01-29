import {
	FeatureGroup,
	LayerGroup,
	LayersControl,
	MapContainer,
	Marker,
	Polygon,
	Popup,
	TileLayer,
	Tooltip,
} from 'react-leaflet';

import { EditControl } from 'react-leaflet-draw';

import { providers } from './providers';

import { multiPolygon, polygon, purple, red } from '../../assets/vectors';

import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';
import './style.css';

const mapOptions = {
	center: [-23.2994, -45.9587],
	zoom: 20,
};

export function Map() {
	const createdFeature = (event) => {
		console.log('event', event);

		const { layerType, layer } = event;

		if (layerType === 'polygon') {
			const { _leaflet_id } = layer;

			console.log({ id: _leaflet_id, coords: layer.getLatLngs()[0] });
		}
	};

	return (
		<MapContainer className="map_container" center={mapOptions.center} zoom={mapOptions.zoom}>
			<TileLayer attribution={providers.osm.attribution} url={providers.osm.url} />
			{/* exemplo de como adicionar um marcador */}
			<Marker position={[-23.2994, -45.9587]}>
				<Popup>Grand Valle Elvira</Popup>
				<Tooltip>Jacareí</Tooltip>
			</Marker>
			{/* exemplo de como adicionar um polygon/multipolygon */}
			<Polygon pathOptions={purple} positions={polygon}>
				<Popup>Polygon Purple</Popup>
			</Polygon>
			<Polygon pathOptions={red} positions={multiPolygon}>
				<Popup>MultiPolygon Red</Popup>
			</Polygon>
			{/* exemplo de como adicionar controle de camadas */}
			<LayersControl position="topright">
				<LayersControl.Overlay name="Marker">
					<Marker position={[-23.2994, -45.9587]}>
						<Popup>Grand Valle Elvira</Popup>
					</Marker>
				</LayersControl.Overlay>
				<LayersControl.Overlay name="Polygon">
					<LayerGroup>
						<Polygon pathOptions={purple} positions={polygon}>
							<Popup>Polygon Purple</Popup>
						</Polygon>
						<Polygon pathOptions={red} positions={multiPolygon}>
							<Popup>MultiPolygon Red</Popup>
						</Polygon>
					</LayerGroup>
				</LayersControl.Overlay>
			</LayersControl>
			{/* exemplo de como adicionar controle de edição */}
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
	);
}
