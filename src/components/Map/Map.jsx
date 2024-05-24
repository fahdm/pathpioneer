import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { createPath, getPaths } from '../../utilities/paths-service';

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN;

export default function Map() {
  const [wayPoints, setWayPoints] = useState(null);
  const [pathName, setPathName] = useState('');
  const [travelMode, setTravelMode] = useState('walking');
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [directionsArray, setDirectionsArray] = useState([]);
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
      attributionControl: false, 
      style: 'mapbox://styles/mapbox/streets-v12',
    });

    const nav = new mapboxgl.NavigationControl();
    map.current.addControl(nav, 'top-right');

    directions.current = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'imperial',
      profile: `mapbox/${travelMode}`,
      controls: {
        inputs: true,
        instructions: true,
        profileSwitcher: true,
      },
    });

    directions.current.on('profile', (e) => {
      setTravelMode(e.profile.split('/')[1]);
    });

    map.current.addControl(directions.current, 'top-left');
    setWayPoints(directions.current);
  }, [travelMode]);

  const fetchRouteDetails = async () => {
    const pathOrigin = directions.current.getOrigin();
    const pathDestination = directions.current.getDestination();
    if (pathOrigin && pathDestination) {
      const url = `https://api.mapbox.com/directions/v5/mapbox/${travelMode}/${pathOrigin.geometry.coordinates.join(',')};${pathDestination.geometry.coordinates.join(',')}?geometries=geojson&steps=true&access_token=${mapboxgl.accessToken}`;
      const response = await fetch(url);
      const data = await response.json();

      const fetchedDistance = data.routes[0].distance * 0.000621371; 
      const fetchedDuration = data.routes[0].duration; 
      const fetchedDirectionsArray = data.routes[0].legs[0].steps.map(step => step.maneuver.instruction);

      setDistance(fetchedDistance);
      setDuration(fetchedDuration);
      setDirectionsArray(fetchedDirectionsArray);

      return {
        distance: fetchedDistance,
        duration: fetchedDuration,
        directions: fetchedDirectionsArray,
      };
    } else {
      alert('Please set both origin and destination');
      return null;
    }
  };

  const handleSavePath = async () => {
    const routeDetails = await fetchRouteDetails();
    if (routeDetails) {
      const pathOrigin = directions.current.getOrigin();
      const pathDestination = directions.current.getDestination();
      const pathBody = {
        name: pathName,
        originCoordinates: pathOrigin.geometry.coordinates,
        destinationCoordinates: pathDestination.geometry.coordinates,
        travelMode,
        distance: routeDetails.distance,
        duration: routeDetails.duration,
        directions: routeDetails.directions,
      };

      const savedPath = await createPath(pathBody);
      navigate('/paths');
    }
  };

  return (

     <>
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
     </>
   
  );
}