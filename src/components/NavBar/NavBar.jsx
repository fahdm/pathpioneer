import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import logo from "../../assets/logo.png";
import './NavBar.css';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        usersService.logOut();
        setUser(null);
    }

    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to='/' className="nav-link logo">
            <img src={logo} alt="PathPioneer Logo" className="logo-image" />
            </Link>
          </div>
          <div className="navbar-links">
            <Link to='/paths/new' className="nav-link">New Path</Link>
            <span className="separator">|</span>
            <Link to='/paths' className="nav-link">My Paths</Link>
            <span className="separator">|</span>
            <span className="welcome">Welcome, {user.name}</span>
            <span className="separator">|</span>
            <Link to='' onClick={handleLogOut} className="nav-link">Log Out</Link>
          </div>
        </nav>
    );
      
  }