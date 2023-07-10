import React, { useContext, useEffect } from "react";
import categoryContext from "../context/categoryContext";
import { categories } from "../utils/constants";
import LibraryIcon from "../components/LibraryIcon";
import SubIcon from "../components/SubIcon";
import homeIcon from "../assets/images/home.png";
import shortIcon from "../assets/images/film-roll.png";
import "./SideBar.scss";

export default function SideBar() {
  let [
    selectedCategury,
    setselectedCategury,
    sizeW,
    setSizeW,
    showSidebar,
    setShowSidebar,
  ] = useContext(categoryContext);

  let styleSidebar = !showSidebar ? { width: "0vw" } : undefined;

  let handlerReSize = () => {
    setSizeW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handlerReSize);
    return () => {
      window.removeEventListener("resize", handlerReSize);
    };
  });

  return (
    <>
      {!showSidebar && sizeW > 768 && (
        <div className="wrapper_slider2">
          <img className="homeIcon2" src={homeIcon} alt="" />
          <p className="hometitleIcon">Home</p>
          <img className="shortIcon2" src={shortIcon} alt="" />
          <p className="shortsTitleIcon">Shorts</p>
          <SubIcon />
          <p className="subsTitleIcon">Subscrptions</p>
          <LibraryIcon />
          <p className="libraryTitleIcon">Library</p>
        </div>
      )}
      {showSidebar && (
        <div style={styleSidebar} className="wrapper_sidebar">
          {categories.map((category) => {
            return (
              <button
                onClick={() => {
                  setselectedCategury(category.name);
                }}
                style={{
                  backgroundColor:
                    category.name === selectedCategury && "#c30909",
                }}
                className="sidebarBtn"
                key={category.name}
              >
                <span className="iconSidebarBtn">{category.icon}</span>
                <span className="nameSidebarBtn">{category.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
