import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapThumb.css';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN;

export default function MapThumb({path}) {
    const [wayPoints, setWayPoints] = useState(null);
    const [pathName, setPathName] = useState('');
    const [travelMode, setTravelMode] = useState('cycling'); 
    const mapContainer = useRef(null);
    const map = useRef(null);
    const directions = useRef(null);

    //CHANGE TO DATABASE DATA
    const origin = path.originCoordinates;
    const destination = path.destinationCoordinates;
  
    useEffect(() => {
        if (map.current) return; // Initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          zoom: 11,
          center: [((origin[0]+destination[0])/2).toFixed(6), ((origin[1]+destination[1])/2).toFixed(6)],
          style: 'mapbox://styles/mapbox/streets-v12',
        });
    
        directions.current = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: 'metric',
          profile: `mapbox/${travelMode}`, 
          controls: {
            interactive: false,
            inputs: true,
            instructions: true,
            profileSwitcher: true,
          },
        });

        const markerStart = new mapboxgl.Marker({rotation: 270})
        .setLngLat(origin)
        .addTo(map.current);
        
        const markerEnd = new mapboxgl.Marker({rotation: 90})
        .setLngLat(destination)
        .addTo(map.current);

        const getRoute = async (origin, destination) => {
            const url = `https://api.mapbox.com/directions/v5/mapbox/${travelMode}/${origin.join(',')};${destination.join(',')}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
            const response = await fetch(url);
            const data = await response.json();
            const route = data.routes[0].geometry.coordinates;
      
            // Create a GeoJSON object for the route
            const routeGeoJSON = {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: route,
              },
            };
      
            // Add the route as a layer on the map
            map.current.addSource('route', {
              type: 'geojson',
              data: routeGeoJSON,
            });
      
            map.current.addLayer({
              id: 'route',
              type: 'line',
              source: 'route',
              layout: {
                'line-join': 'round',
                'line-cap': 'round',
              },
              paint: {
                'line-color': '#3887be',
                'line-width': 5,
              },
            });
      
            // Fit the map to the route
            const bounds = route.reduce((bounds, coord) => {
              return bounds.extend(coord);
            }, new mapboxgl.LngLatBounds(route[0], route[0]));
      
            map.current.fitBounds(bounds, { padding: 50 });
          };
      
          getRoute(origin, destination);
      }, []);  
  
    return (
     <div className="path-index-page">
        <div className="Map-Container" ref={mapContainer} />
    </div>
    );
  }