import { useState } from "react";
import { Link } from "react-router-dom";
import ytLogo from "../assets/images/youtube.png";
import { useNavigate } from "react-router-dom";
import BurgerM from "../components/BurgerM";
import "./navbar.scss";
import "./responsNav.scss";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  let handlerSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  let handlerEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  let searcWithIcon = () => {
    searchTerm && navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

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
              <span
                onClick={searcWithIcon}
                className="material-symbols-outlined searchIcon"
              >
                search
              </span>
              <input
                placeholder="search"
                type="search"
                name="search"
                id="search"
                onChange={handlerSearch}
                onKeyDown={handlerEnter}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
