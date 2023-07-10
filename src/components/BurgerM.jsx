import { useContext } from "react";
import categoryContext from "../context/categoryContext";

export default function BurgerM() {
  let [
    selectedCategury,
    setselectedCategury,
    sizeW,
    setSizeW,
    showSidebar,
    setShowSidebar,
  ] = useContext(categoryContext);

  let handlerClick = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <span
        onClick={handlerClick}
        className="material-symbols-outlined burgerMenu"
      >
        menu
      </span>
    </>
  );
}
