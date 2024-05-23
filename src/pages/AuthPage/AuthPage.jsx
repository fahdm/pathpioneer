import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
// import "./AuthPage.css"; // Assuming you have some CSS to style the AuthPage

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false);

    const toggleForm = () => {
        setShowSignUp(!showSignUp);
    };

    return (
        <main className="auth-page">
            <h1>AuthPage</h1>
        
            <div className="form-container">
                {showSignUp ? (
                    <SignUpForm setUser={setUser} />
                ) : (
                    <LoginForm setUser={setUser} />
                )}
            </div>
            <button onClick={toggleForm} className="toggle-button">
                {showSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
            </button>
        </main>
    );
}
