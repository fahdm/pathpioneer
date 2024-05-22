import { Link } from 'react-router-dom';

export default function PathCard({ path }) {
    return (
        <>
        <h1>PathCard</h1>
        <li><h4>{path.name}</h4></li>
        <li><h4>{path._id}</h4></li>
        {/* <li><Link to={`/movies/${m.title}`}><div><img src={m.posterPath} alt="" /><br/>{m.title}<br/>{m.releaseDate}</div></Link></li> */}
        </>
    );
  }