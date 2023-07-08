import React from "react";
import MyLoader from "./MyLoader";
import { motion } from "framer-motion";
import "./Videos.scss";

export default function Videos({ videos, selectedCategury }) {
  return (
    <>
      {videos ? (
        videos.map((video, index) => {
          return (
            <div key={index} className="col-4 mt-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: 0.5 }}
                className="wrapper_video"
              >
                <div className="wrapper_mainImage">
                  <img
                    src={video.thumbnail[0].url}
                    alt={video.thumbnail[0].url}
                  />
                </div>
                <div className="wrapperDetails">
                  <div className="wrapperChannelLogo">
                    {selectedCategury === "NextJS" ||
                    selectedCategury === "Music" ||
                    selectedCategury === "Education" ||
                    selectedCategury === "Podcast" ||
                    selectedCategury === "Sport" ||
                    selectedCategury === "Gaming" ||
                    selectedCategury === "Fashion" ||
                    selectedCategury === "Live" ? null : (
                      <img
                        className="channelLogo"
                        src={video.channelThumbnail[0].url}
                        alt={"hello"}
                      />
                    )}
                  </div>
                  <div className="wrapperDetailsDesc">
                    {video.title.slice(0, 60).length < 60 ? (
                      <p className="titleVideo">{video.title.slice(0, 60)}</p>
                    ) : (
                      <p className="titleVideo">
                        {video.title.slice(0, 60)}...
                      </p>
                    )}
                    <p className="channelName">{video.channelTitle}</p>
                    <span className="view">{video.viewCount} views </span>
                    <span className="postDate">{video.publishedText}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })
      ) : (
        <MyLoader />
      )}
    </>
  );
}
