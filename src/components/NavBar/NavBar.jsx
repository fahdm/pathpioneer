import { Link } from 'react-router-dom'
import * as usersService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        usersService.logOut();

        setUser(null);
    }

    return (
        <nav>
            <Link to='/'>PathPioneer</Link>
            &nbsp; | &nbsp;
            <Link to='/paths/new'>New Path</Link>
            &nbsp; | &nbsp;
            <Link to='/paths'>My Paths</Link>
            &nbsp; | &nbsp;
            <span> Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to='' onClick={ handleLogOut }>Log Out</Link>
        </nav>
    );
  }