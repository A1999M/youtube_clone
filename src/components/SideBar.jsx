import React, { useContext, useEffect, useState } from "react";
import categoryContext from "../context/categoryContext";
import { categories } from "../utils/constants";
import LibraryIcon from "../components/LibraryIcon";
import SubIcon from "../components/SubIcon";
import homeIcon from "../assets/images/home.png";
import shortIcon from "../assets/images/film-roll.png";
import "./SideBar.scss";

export default function SideBar() {
  let [selectedCategury, setselectedCategury] = useContext(categoryContext);
  const [sizeW, setSizeW] = useState(window.innerWidth);

  console.log(window.innerWidth);

  let handlerReSize = () => {
    if (window.innerWidth >= 1200) {
      setSizeW(window.innerWidth);
    } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
      setSizeW(window.innerWidth);
    } else if (window.innerWidth <= 768) {
      setSizeW(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handlerReSize);
    return () => {
      window.removeEventListener("resize", handlerReSize);
    };
  });

  return (
    <>
      {sizeW <= 768 && null}
      {sizeW <= 1400 && sizeW > 768 && (
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
      {sizeW >= 1400 && (
        <div className="wrapper_sidebar">
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
