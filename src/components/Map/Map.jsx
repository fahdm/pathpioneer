import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { createPath, getPaths } from '../../utilities/paths-service';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN;

function Map() {
  const [wayPoints, setWayPoints] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 10,
      center: [-122, 37],
      style: 'mapbox://styles/mapbox/streets-v12',
    });

    const nav = new mapboxgl.NavigationControl();
    map.current.addControl(nav, 'top-right');

    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/walking',
      controls: {
        inputs: true,
        instructions: true,
        profileSwitcher: true,
      },
    });

    map.current.addControl(directions.current, 'top-left');
    setWayPoints(directions.current);
  }, []);

  const handleSavePath = async () => {
    const pathOrigin = directions.current.getOrigin();
    const pathDestination = directions.current.getDestination();
    if (pathOrigin && pathDestination) {
      const pathBody = {
        name: 'San Francisco To Oakland',
        originCoordinates: pathOrigin.geometry.coordinates,
        destinationCoordinates: pathDestination.geometry.coordinates,
      };
      const savedPath = await createPath(pathBody);
      console.log('Saved Path:', savedPath);
    } else {
      alert('Please set both origin and destination');
    }
  };

  const handleGetPaths = async () => {
    const paths = await getPaths();
    console.log('Retrieved Paths:', paths);
  };

  return (
    <div>
      <div className="Map-Container" ref={mapContainer} />
      <button onClick={handleSavePath}>Save Path</button>
      <button onClick={handleGetPaths}>Get Paths</button>
    </div>
  );
}

export default Map;
