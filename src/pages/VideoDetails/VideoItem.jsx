import ReactPlayer from "react-player";
import { useState } from "react";
import Share from "../../icons/Share";
import Like from "../../icons/Like";
import Dislike from "../../icons/Dislike";
import Subscribed from "../../icons/Subscribed";
import MyLoader from "../../components/MyLoader";
import "./VideoDetails.scss";

export default function VideoItem({ video, id }) {
  const [isSubscribe, setIsSubscribe] = useState(false);

  let handlerLike = () => {
    if (
      document.querySelector(".path1Like").getAttribute("fill") == "#dbdbdb00"
    ) {
      document.querySelector(".path1Like").setAttribute("fill", "#dbdbdb");
      document.querySelector(".path2Like").setAttribute("fill", "#dbdbdb");
      document.querySelector(".path1DLike").setAttribute("fill", "#dbdbdb00");
      document.querySelector(".path2DLike").setAttribute("fill", "#dbdbdb00");
    } else {
      document.querySelector(".path1Like").setAttribute("fill", "#dbdbdb00");
      document.querySelector(".path2Like").setAttribute("fill", "#dbdbdb00");
    }
  };
  let handlerDisLike = () => {
    if (
      document.querySelector(".path1DLike").getAttribute("fill") == "#dbdbdb00"
    ) {
      document.querySelector(".path1DLike").setAttribute("fill", "#dbdbdb");
      document.querySelector(".path2DLike").setAttribute("fill", "#dbdbdb");
      document.querySelector(".path1Like").setAttribute("fill", "#dbdbdb00");
      document.querySelector(".path2Like").setAttribute("fill", "#dbdbdb00");
    } else {
      document.querySelector(".path1DLike").setAttribute("fill", "#dbdbdb00");
      document.querySelector(".path2DLike").setAttribute("fill", "#dbdbdb00");
    }
  };

  let handlerSubscribe = () => {
    setIsSubscribe(!isSubscribe);
  };

  return (
    <>
      {video ? (
        <div className="generalWrapper">
          <div className="wrapper_video">
            {video && (
              <ReactPlayer
                width={"100%"}
                height={"65vh"}
                controls
                url={`https://www.youtube.com/watch?v=${id}`}
              />
            )}
          </div>
          <p className="titleVideoDetails">
            {video && video.items[0].snippet.title}
          </p>
          <div className="wrapper_descriptions">
            <div className="wrapper_channelDetails">
              <img
                className="logoVideoDetails"
                src={video && video.items[0].snippet.thumbnails.high.url}
                alt="logo channel video details"
              />
              <div className="wrapperAboutChannel">
                <span className="channelName">
                  {video && video.items[0].snippet.channelTitle}
                </span>
                <span className="channelSubs">1.3M Subscribe</span>
              </div>
              {/* // //// */}
              {isSubscribe ? (
                <span onClick={handlerSubscribe} className="subscribedBtn">
                  <Subscribed /> subscribed
                </span>
              ) : (
                <span onClick={handlerSubscribe} className="subBtn">
                  subscribe
                </span>
              )}
            </div>
            <div className="wrapper_videoRates">
              <span onClick={handlerLike} className="likeIcon">
                <Like />
                {Math.round(video.items[0].statistics.likeCount) > 1000
                  ? Math.round(video.items[0].statistics.likeCount / 1000) + "K"
                  : Math.round(video.items[0].statistics.likeCount)}
              </span>
              <span onClick={handlerDisLike} className="disLikeIcon">
                <Dislike />
                {Math.round(video.items[0].statistics.commentCount) > 1000
                  ? Math.round(video.items[0].statistics.commentCount / 1000) +
                    "K"
                  : Math.round(video.items[0].statistics.commentCount)}
              </span>
              <span className="shareIcon">
                {" "}
                <Share /> Share
              </span>
            </div>
          </div>
          <div className="wrapperView_desc">
            <span>
              {Math.round(video.items[0].statistics.viewCount / 1000)}K Views
            </span>
            <span>
              {video.items[0].statistics.viewCount.slice(0, 1) * 2} mounths ago
            </span>
            <p className="detailDesc">
              {video.items[0].snippet.description.slice(0, 300)}
            </p>
          </div>
        </div>
      ) : (
        <MyLoader />
      )}
    </>
  );
}
