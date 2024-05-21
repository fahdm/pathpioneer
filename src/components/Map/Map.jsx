import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import CreateRouteButton from '../CreateRouteButton/CreateRouteButton';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN;

function Map() {
  const [wayPoints, setWayPoints] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);

  useEffect(() => {
    if (map.current) {
      return;
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 10,
      center: [-122, 37],
      style: 'mapbox://styles/mapbox/streets-v12',
    });

    // Add built-in zoom and rotation controls to the map.
    const nav = new mapboxgl.NavigationControl();
    map.current.addControl(nav, 'top-right');

    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/walking', // Default
      controls: {
        inputs: true,
        instructions: true,
        profileSwitcher: true,
      },
    });

    setWayPoints(directions.current)
    console.log(map.current)
    

    map.current.addControl(directions.current,'top-left')
    directions.current.on('profile', (e) => {
    
    const origin = directions.current.getOrigin();
    console.log('origin', origin?.geometry?.coordinates)

    const destination = directions.current.getDestination();
    console.log('destination', destination?.geometry?.coordinates)
    
   
      
    });

    directions.current.on('highlightRoute', (e) => {
    
      console.log(e)
      console.log(directions.current)
      

      
    });
    
  

  }, []);

  return (
    <div>
      <div className="Map-Container" ref={mapContainer} />
    </div>
  );
}

export default Map;
