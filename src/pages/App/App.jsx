import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css'
import { getPaths } from "../../utilities/paths-service";
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import NewPathPage from '../NewPathPage/NewPathPage'
import PathIndexPage from '../PathIndexPage/PathIndexPage'
import PathDetailPage from '../PathDetailPage/PathDetailPage'
import './App.css';

import MapThumb from '../../components/MapThumb/MapThumb';

export default function App() {

  const [user, setUser] = useState(getUser())
  const [paths, setPaths] = useState([])

  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={ user } setUser={setUser}/>
        <Routes>
          <Route path="/paths/new" element={<NewPathPage />} />
          <Route path="/paths" element={<PathIndexPage />} />
          <Route path="/paths/:pathId" element={<PathDetailPage />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
    </main>
  );
}
