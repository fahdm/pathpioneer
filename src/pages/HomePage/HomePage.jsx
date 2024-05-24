import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import backgroundVideo from '../../assets/BgVideo.mp4';

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Welcome to Path Pioneer</h1>
          <p>Discover and save your favorite routes easily.</p>
          <Link to="/paths/new" className="cta-button">Get Started</Link>
        </div>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Discover Routes</h2>
          <p>Find the best routes for your journeys, whether you walk, bike, or drive.</p>
        </div>
        <div className="feature">
          <h2>Save Your Favorites</h2>
          <p>Keep track of your favorite paths and access them anytime, anywhere.</p>
        </div>
        <div className="feature">
          <h2>Share with Friends</h2>
          <p>Share your favorite routes with friends and family easily.</p>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Path Pioneer. All rights reserved.</p>
      </footer>
    </>
  );
}
