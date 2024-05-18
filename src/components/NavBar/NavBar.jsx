import { Link } from 'react-router-dom'

export default function NavBar({ user }) {
    return (
        <nav>
            <Link to='/'>PathPioneer</Link>
            <span> Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to='/paths/new'>New Path</Link>
            &nbsp; | &nbsp;
            <Link to='/paths'>My Paths</Link>
        </nav>
    );
  }