import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const logoStyle = {
  color: "royalBlue"
}

const Navbah = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary shadow-lg">
      <span className="navbar-brand mb-0 h1" style={logoStyle}>MetaCI</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink
            exact
            to="/"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Builds
          </NavLink>
          <NavLink
            exact
            to="/plans"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Plans
          </NavLink>
          <NavLink
            exact
            to="/repositories"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Repositories
          </NavLink>
          <NavLink
            exact
            to="/accountInfo"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            <FaUserCircle size={30}/>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbah;
