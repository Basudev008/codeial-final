import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          alt="search-icon"
        />
        <input placeholder="Search"></input>

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>

            <li className="search-results-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt="user-dp"
            id="user-dp"
          />
          <span>Basudev Singh</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/login">Log out</Link>
            </li>
            <li>
              <Link to="/login">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
