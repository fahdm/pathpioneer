import * as usersService from '../../utilities/users-service';
import { useState } from 'react';
import './LoginForm.css';

export default function LoginForm({setUser}) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        error: ''
    });

    function handleChange(e) {
      const newCredentials = {...credentials, [e.target.name]: e.target.value};
      newCredentials.error = '';
      setCredentials(newCredentials);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
          const formData = {...credentials};
          delete formData.error;  
          const user = await usersService.login(formData);
          setUser(user);
            
        } catch {
          setCredentials({...credentials, error: 'Login Failed - Try Again' });
        }
    };

    return (
      <main className="main-container">
        <div className="form-wrapper">
          <div className="form-container card">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <button type="submit">LOG IN</button>
            </form>
          </div>
          <p className="error-message">&nbsp;{credentials.error}</p>
        </div>
      </main>
    );
} 