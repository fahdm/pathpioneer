import { useState } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import NewPathPage from '../NewPathPage/NewPathPage'
import PathIndexPage from '../PathIndexPage/PathIndexPage'
import './App.css';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      { user ? 
        <NewPathPage /> 
          : 
        <AuthPage />}
    </main>
  );
}
