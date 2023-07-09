import React from "react";

export default function VideoItem({ video }) {
  return (
    <div>
      <div className="generalWrapper">
        <div className="wrapper_video">
          {
            video && (
              <video
                autoPlay
                muted
                controls
                style={{ width: "100%", height: "100%" }}
                src={video.thumbnail[0].url}
              ></video>
            )
            // <video src={video.thumbnail[thumbnail.length - 1].url}></video>
          }
        </div>
        {/* <p className="videoName">{video.title}</p> */}
      </div>
    </div>
  );
}
