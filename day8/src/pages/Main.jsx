import React from 'react';
import '../assets/css/Main.css';
import store from '../Redux/Store';
import Social from '../pages/Social';
function Main() {
  return (
    <>
    <div className='img'>
      <nav className="navbar">
        <div className="navbar-logo">
          
        </div>
        
        <div className="navbar-links">
          <a href="/">LOGIN</a>
          <span className="navbar-divider">|</span>
          <a href="/home">HOME</a>
          <span className="navbar-divider">|</span>
          
          <a href="/register">SIGN UP</a>
          <span className="navbar-divider">|</span>
          <a href="/profile">MY PROFILE</a>
          <span className="navbar-divider">|</span>
          <a href="/">LOGOUT</a>
          <span className="navbar-divider"></span>
        </div>
      </nav>
        <div className='dashboard-container'>
            <p  style={{color : "white"}}>{store.getState().email} excited to serve you the best service</p>

        <div className="dashboard-option">
          <h2>Join a Meeting</h2>
          <a href="/join">Join</a>
        </div>

        <div className="dashboard-option">
          <h2>Schedule Meetings</h2>
          <a href="/schedule">View</a>
        </div>

        <div className="dashboard-option">
          <h2>User Profile</h2>
          <a href="/profile">Edit Profile</a>
        </div>
      </div>
    </div>
      <Social/>
      <ul className="footer">
        <div className="list-item">
          
        <li><a href="/privacypolicy">Privacy Policy</a></li>
        </div>
        <div className="list-item">

        <li><a href="/termsconditions">Terms and Conditions</a></li>
        </div>
        <div className="list-item">
        <li><a href="/faq">FAQ</a></li>

        </div>
      </ul>
    </>
  );
}

export default Main;