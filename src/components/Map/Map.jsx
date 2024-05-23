import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { createPath, getPaths } from '../../utilities/paths-service';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN;

function Map() {
  const [wayPoints, setWayPoints] = useState(null);
  const [pathName, setPathName] = useState('');
  const [travelMode, setTravelMode] = useState('walking'); 
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = useRef(null);
  const navigate = useNavigate();

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
      profile: `mapbox/${travelMode}`, 
      controls: {
        inputs: true,
        instructions: true,
        profileSwitcher: true,
      },
    });

    directions.current.on('profile', (e) => { 
      setTravelMode(e.profile.split('/')[1]); // Update travel mode 
    }); 

    map.current.addControl(directions.current, 'top-left');
    setWayPoints(directions.current);
  }, [travelMode]);

  const handleSavePath = async () => {
    const pathOrigin = directions.current.getOrigin();
    const pathDestination = directions.current.getDestination();
    if (pathOrigin && pathDestination) {
      const pathBody = {
        name: pathName, 
        originCoordinates: pathOrigin.geometry.coordinates,
        destinationCoordinates: pathDestination.geometry.coordinates,
        travelMode, 
      };
      const savedPath = await createPath(pathBody);
      navigate('/paths'); 
      console.log('Saved Path:', savedPath);
    } else {
      alert('Please set both origin and destination');
    }
  };

  // const handleGetPaths = async () => {
  //   const paths = await getPaths();
  //   console.log('Retrieved Paths:', paths);
  // };

  return (
    <div className="map-page">
      <div className="map-container" ref={mapContainer} />
      <div className="input-button-container">
        <input
          type="text"
          className="path-input"
          placeholder="Enter path name"
          value={pathName}
          onChange={(e) => setPathName(e.target.value)}
        />
        <button className="save-button" onClick={handleSavePath}>Save Path</button>
      </div>
    </div>
  );
}

export default Map;
