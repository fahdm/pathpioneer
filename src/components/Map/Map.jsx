import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import RouteSelector from '../RouteSelector/RouteSelector';
import 'mapbox-gl/dist/mapbox-gl.css'
import './Map.css'



// const API_KEY = process.env.MAP_BOX_TOKEN
mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN


function Map () {
  
  const container = useRef();
  const map = useRef(null);
  const [profile, setProfile] = useState('walking');
  
  useEffect(() => {
    if (map.current) {
      return;
    }
    
    map.current = new mapboxgl.Map({
      container:container.current,
      zoom: 10,
      center:[-122,37],
      style:'mapbox://styles/mapbox/streets-v12',
     
    });
  }, [] )
  

  return (
    <div>
      <RouteSelector className="" profile={profile} />
      <div className='Map-Container' ref={container}/>
    </div>
  );

}

export default Map;