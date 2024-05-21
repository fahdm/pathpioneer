import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css'
import './Map.css'



// const API_KEY = process.env.MAP_BOX_TOKEN
mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN


function Map () {
  
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [profile, setProfile] = useState('walking');
  
  useEffect(() => {
    if(map.current){
      return;
    }
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
        instructions: false,
        profileSwitcher: true,
        profilePicker: {
          driving:false,
          cycling: true,
          walking: true,
        },
      },
    });

    map.current.addControl(directions.current,'top-left')
    // handleSaveDirection();

  }, []);


  return (
    <div>
      <div className='Map-Container' ref={mapContainer} />
    </div>
    
  );


}

export default Map;