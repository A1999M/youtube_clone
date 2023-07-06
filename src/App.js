import React from "react";
import Feed from "./pages/Feed";
import SearchFeed from "./pages/SearchFeed";
import VideoDetails from "./pages/VideoDetails";
import ChannelDetail from "./pages/ChannelDetail";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
      </Routes>
    </>
  );
}
