import React from "react";
import { categories } from "../utils/constants";
import BurgerM from "../components/BurgerM";
import "./SideBar.scss";

export default function SideBar() {
  let selectedBtn = "New";

  return (
    <>
      <div className="wrapper_sidebar">
        <button className="sidebarBtn">
          <BurgerM />
        </button>
        {categories.map((category) => {
          return (
            <button
              style={{
                backgroundColor: category.name === selectedBtn && "#c30909",
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
    </>
  );
}
