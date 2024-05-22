import { useParams } from 'react-router-dom';
import MapThumb from "../../components/MapThumb/MapThumb";

export default function PathDetailPage({paths}) {
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

    // Parse the ISO string into a Date object
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
    console.log(formattedDate);


    return (
      <>
        <h1>{path.name}</h1>
        <MapThumb path={path}/>
        <h5>Created {formattedDate}</h5>
      </>
    );
  }