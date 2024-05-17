import { useState } from 'react'
import AuthPage from './pages/AuthPage/AuthPage'
import NewPathPage from './pages/NewPathPage/NewPathPage'
import PathIndexPage from './pages/PathIndexPage/PathIndexPage'
import './App.css';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      App
    </main>
  );
}
