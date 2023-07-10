import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VideoItem from "./VideoItem";
import "./VideoDetails.scss";

export default function VideoDetails() {
  let [fetchedVideo, setFetchedVideo] = useState(null);
  let location = useLocation();

  let videoID = location.search.slice(4);

  console.log(videoID);

  useEffect(() => {
    const url = `https://youtube-v3-alternative.p.rapidapi.com/video?id=${videoID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "afd34567d6mshe53a9842d7512d7p138160jsnde95b8405fa5",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFetchedVideo(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <>
      <div className="container-fluid px-5">
        <div className="row justify-content-end">
          <div className="col-8">
            <VideoItem video={fetchedVideo} />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}
