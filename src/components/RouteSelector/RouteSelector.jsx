import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import './RouteSelector.css'


function RouteSelector({}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 10,
      center: [-122, 37],
      style: 'mapbox://styles/mapbox/streets-v12',
    });

    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/walking', // Default 
      controls: {
        inputs: true, 
        instructions: true,
        profileSwitcher: true,
        profilePicker: {
          cycling: true,
          walking: true,
        },
      },
    });

    map.current.addControl(directions.current);

  }, []);

  return (
    <div>
      <div className='Map-Container' ref={mapContainer} />
    </div>
  );
}

export default RouteSelector;
