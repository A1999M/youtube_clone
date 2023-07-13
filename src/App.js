import React, { useState } from "react";
import Feed from "./pages/Feed";
import SearchFeed from "./pages/SearchFeed";
import VideoDetails from "./pages/VideoDetails";
import { Route, Routes } from "react-router-dom";
import categoryContext from "./context/categoryContext";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {
  let [selectedCategury, setselectedCategury] = useState("New");
  const [sizeW, setSizeW] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(
    window.innerWidth >= 1400 ? true : false
  );

  return (
    <>
      <AnimatePresence>
        <categoryContext.Provider
          value={[
            selectedCategury,
            setselectedCategury,
            sizeW,
            setSizeW,
            showSidebar,
            setShowSidebar,
          ]}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </categoryContext.Provider>
      </AnimatePresence>
    </>
  );
}
