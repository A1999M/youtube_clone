import React, { useContext, useState } from "react";
import Feed from "./pages/Feed";
import SearchFeed from "./pages/SearchFeed";
import VideoDetails from "./pages/VideoDetails";
import ChannelDetail from "./pages/ChannelDetail";
import { Route, Routes } from "react-router-dom";
import categoryContext from "./context/categoryContext";
import { SideBar } from "./components";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {
  let [selectedCategury, setselectedCategury] = useState("New");

  return (
    <>
      <categoryContext.Provider value={[selectedCategury, setselectedCategury]}>
        <Navbar />
        <SideBar
          selectedCategury={selectedCategury}
          setselectedCategury={setselectedCategury}
        />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
        </Routes>
      </categoryContext.Provider>
    </>
  );
}
