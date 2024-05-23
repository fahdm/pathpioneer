import MapThumb from '../../components/MapThumb/MapThumb';

import { Link } from 'react-router-dom';

export default function PathCard({ path }) {
    return (
        <div className="card-container">
          <Link to={`/paths/${path._id}`}>
            <div>
              <h4>{path.name} :</h4>
              <MapThumb path={path} />
            </div>
          </Link>
        </div>
    );
  }