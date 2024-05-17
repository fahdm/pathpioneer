import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NewPathPage from '../NewPathPage/NewPathPage'
import PathIndexPage from '../PathIndexPage/PathIndexPage'
import './App.css';

export default function App() {
  const [user, setUser] = useState({})
  return (
    <main className="App">
    { user ?
      <Routes>
        <Route path="/paths/new" element={<NewPathPage />} />
        <Route path="/paths" element={<PathIndexPage />} />
      </Routes>
      :
      <AuthPage />
    }
    </main>
  );
}
