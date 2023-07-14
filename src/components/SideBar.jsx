import React, { useContext, useEffect } from "react";
import categoryContext from "../context/categoryContext";
import { categories } from "../utils/constants";
import "./SideBar.scss";

export default function SideBar() {
  let [selectedCategury, setselectedCategury, , setSizeW, showSidebar, ,] =
    useContext(categoryContext);

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
