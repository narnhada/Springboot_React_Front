import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/index">Index</Link>
      </button>
    </div>
  );
}

export default Navigation;
