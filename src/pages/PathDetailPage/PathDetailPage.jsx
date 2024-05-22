import { useParams } from 'react-router-dom';

export default function PathDetailPage({paths}) {
    const { pathId } = useParams();

    const path = paths.find(p => p._id === pathId._id)

    // const path = paths.find(p => p.name.replace(/\s+/g, '').toLowerCase() === movieName.replace(/\s+/g, '').toLowerCase())

    if (!paths) {
      return <h1>No paths available</h1>;
    }

    if (!path) {
      return <h1>Path not found</h1>;
    }

    return (
      <>
      <h1>{path.name}</h1><br/>
      </>
    );
  }