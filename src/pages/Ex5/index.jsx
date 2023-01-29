import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';

import Chart from 'react-apexcharts';

import bairrosGeometrias from '../../assets/jsons/geometrias_bairros.json';
import bairrosPopulacao from '../../assets/jsons/populacao_bairros.json';

import 'leaflet/dist/leaflet.css';

const mapOptions = {
	center: [-23.2225, -45.9157],
	zoom: 14,
};

const chartOptions = {
	series: [
		{
			name: '1 - Jd. Colinas',
			data: bairrosPopulacao
				.filter((item) => item.id_geometria === 1)
				.map((item) => Number(item.populacao)),
		},
		{
			name: '2 - Jd. das Industrias',
			data: bairrosPopulacao
				.filter((item) => item.id_geometria === 2)
				.map((item) => Number(item.populacao)),
		},
		{
			name: '3 - Jd. Alvorada',
			data: bairrosPopulacao
				.filter((item) => item.id_geometria === 3)
				.map((item) => Number(item.populacao)),
		},
		{
			name: '4 - Pq. Res. Aquarius',
			data: bairrosPopulacao
				.filter((item) => item.id_geometria === 4)
				.map((item) => Number(item.populacao)),
		},
	],
	options: {
		colors: ['#2E93fA', '#66DA00', '#546E7A', '#E91E63'],
		chart: {
			type: 'line',
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'straight',
		},
		title: {
			text: 'Evolução Populacional',
			align: 'left',
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'],
				opacity: 0.5,
			},
		},
		xaxis: {
			categories: [...new Set(bairrosPopulacao.map((item) => item.ano))],
		},
	},
};

export function Ex5() {
	const onEachBairro = (bairro, layer) => {
		const { id, name, setor, zona } = bairro.properties;

		layer.bindPopup(`ID: ${id}</br>Nome: ${name}</br>Setor: ${setor}</br>Zona: ${zona}`);

		layer.options.color = {
			'1': '#2E93fA',
			'2': '#66DA00',
			'3': '#546E7A',
			'4': '#E91E63',
		}[id];

		layer.on({
			click: (event) => {
				console.log('event', event);
			},
			mouseover: (event) => {
				console.log('event', event);
			},
		});
	};

	return (
		<>
			<MapContainer className="map_container" center={mapOptions.center} zoom={mapOptions.zoom}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<GeoJSON data={bairrosGeometrias.features} onEachFeature={onEachBairro}></GeoJSON>
			</MapContainer>
			<div>
				<h1 style={{ marginBottom: 50 }}>exemplo de como adicionar um GeoJSON</h1>
				<Chart
					options={chartOptions.options}
					series={chartOptions.series}
					type="line"
					height={350}
					width={500}
				/>
			</div>
		</>
	);
}
