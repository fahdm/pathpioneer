import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MapThumb from "../../components/MapThumb/MapThumb";
import { getPaths, deletePath } from "../../utilities/paths-service";


export default function PathDetailPage() {

    const [paths, setPaths] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    async function fetchPaths() {
      const paths = await getPaths();
      setPaths(paths);
    }

    fetchPaths();
    }, []);

    const { pathId } = useParams();

    if (!paths || paths.length === 0) {
      return <h1>Loading...</h1>;
    }

    const path = paths.find(p => p._id === pathId)

    if (!paths) {
      return <h1>No paths available</h1>;
    }

    if (!path) {
      return <h1>Path not found</h1>;
    }

    const isoString = path.createdAt;

    const date = new Date(isoString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(date);

    const handleDeletePath = async () => {
      const deletedPath = await deletePath(path._id);
      console.log('Deleted Path:', deletedPath);
      navigate('/paths')
    };

    return (
      <>
        <h1>{path.name}</h1>
        <MapThumb path={path}/>
        <button style={{backgroundColor: 'red'}} onClick={handleDeletePath}>DELETE</button>
        <h5>Created {formattedDate}</h5>
        <h5>Distance: {+(path.distance.toFixed(1))} miles</h5>
        <h3>Travel Mode: {path.travelMode}</h3>
        <h5>Duration to complete: {Math.trunc(path.duration/60/60)} hours, {Math.trunc(path.duration/60 %  60)} minutes</h5>
        <h3>Directions:</h3>
        <ul>
          {path.directions.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      </>
    );
  }