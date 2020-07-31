import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            REACT CRUD EXAMPLE
          </Link>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/insert" className="nav-link">
                  Insert
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/view" className="nav-link">
                  View
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
