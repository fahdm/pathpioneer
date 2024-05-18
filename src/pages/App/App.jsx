import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import NewPathPage from '../NewPathPage/NewPathPage'
import PathIndexPage from '../PathIndexPage/PathIndexPage'
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={ user } setUser={setUser}/>
        <Routes>
          <Route path="/paths/new" element={<NewPathPage />} />
          <Route path="/paths" element={<PathIndexPage />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
    </main>
  );
}
