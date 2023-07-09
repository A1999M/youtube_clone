import React from "react";
import { Link } from "react-router-dom";
import ytLogo from "../assets/images/youtube.png";
import BurgerM from "../components/BurgerM";
import "./navbar.scss";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid c-navbar">
        <div className="row">
          <div className="col-6">
            <div className="wrapper_leftSection">
              <BurgerM />
              <Link to={"/"}>
                <img src={ytLogo} alt="header logo" />
                <span className="titleLogo">YouTube</span>
              </Link>
            </div>
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
