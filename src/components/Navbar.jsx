import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import "./navbar.scss";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid c-navbar">
        <div className="row">
          <div className="col-6">
            <Link to={"/"}>
              <img src={logo} alt="header logo" />
            </Link>
          </div>
          <div className="col-6">
            <form className="form">
              <span className="material-symbols-outlined searchIcon">
                search
              </span>
              <input
                placeholder="search"
                type="search"
                name="search"
                id="search"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
