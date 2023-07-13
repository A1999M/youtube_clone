import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VideoItem from "./VideoItem";
import { Related } from "../../pages/VideoDetails";
import "./VideoDetails.scss";
import "./responsVideoDetails.scss";

export default function VideoDetails() {
  const [relatedVideo, setRelatedVideo] = useState(null);
  let [fetchedVideo, setFetchedVideo] = useState(null);
  let location = useLocation();

  let videoID = location.search.slice(4);

  console.log(videoID);

  useEffect(() => {
    const url = `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${videoID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "afd34567d6mshe53a9842d7512d7p138160jsnde95b8405fa5",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedVideo(data);
      });

    const url2 = `https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${videoID}&type=video`;
    const options2 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "afd34567d6mshe53a9842d7512d7p138160jsnde95b8405fa5",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    fetch(url2, options2)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRelatedVideo(data);
      });
  }, [videoID]);

  return (
    <>
      <div className="container-fluid videoDetails">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-8">
            <VideoItem video={fetchedVideo} id={videoID} />
          </div>
          <div
            style={{ height: "90vh", overflowY: "auto" }}
            className="col-12 col-lg-4"
          >
            <Related related={relatedVideo} />
          </div>
        </div>
      </div>
    </>
  );
}
