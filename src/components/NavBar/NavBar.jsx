import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>PathPioneer</Link>
            &nbsp; | &nbsp;
            <Link to='/paths/new'>New Path</Link>
            &nbsp; | &nbsp;
            <Link to='/paths'>My Paths</Link>
        </nav>
    );
  }