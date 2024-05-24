import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MapThumb from "../../components/MapThumb/MapThumb";
import { getPaths, deletePath } from "../../utilities/paths-service";
import "./PathDetailPage.css";


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
      navigate('/paths');
    };

    return (
      <div className="path-details">
        <h1 className="path-name">{path.name}</h1>
        <MapThumb path={path} style={{ width: '80%', height: '600px' }} />
        <button className="delete-button" onClick={handleDeletePath}>DELETE</button>
        <div className="detail-container">
          <div className="right">
            <h5 className="created-date">Created {formattedDate}</h5>
            <h5 className="distance">Distance: <span>{+(path.distance.toFixed(1))} miles</span></h5>
            <h3 className="travel-mode">Travel Mode: <span>{path.travelMode}</span></h3>
            <h5 className="duration">Duration to complete: <span>{Math.trunc(path.duration/60/60)} hours, {Math.trunc(path.duration/60 %  60)} minutes</span></h5>
          </div>
          <div className='left'>
            <h4 className="directions-title">Directions</h4>
            <ul className="directions-list">
              {path.directions.map((d, index) => (
                <li key={index} className="direction">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }