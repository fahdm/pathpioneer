import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './Map.css'
// const API_KEY = process.env.MAP_BOX_TOKEN
mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN
function Map () {
  const container = useRef();
  const map = useRef(null);
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
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
        .setLngLat([-122.4786, 37.8199])
        .addTo(map.current);
        //save to database
    // Create a default Marker, colored black, rotated 45 degrees.
    const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        .setLngLat([-122.4125, 37.8086])
        .addTo(map.current);
        console.log(map.current)
        console.log(marker2)
  }, [] )
  return (
    <div className='Map-Container' ref={container}>
    </div>
  );
}
export default Map;