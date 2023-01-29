import { useEffect } from 'react';

import { useMap } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet-easyprint';

export function MapPrint(props) {
	const map = useMap();

	useEffect(() => {
		const control = L.easyPrint({
			...props,
		});
		map.addControl(control);
		return () => {
			map.removeControl(control);
		};
	}, [map]);

	return null;
}
