import MyLoader from "./MyLoader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Videos.scss";

export default function Videos({ videos }) {
  if (videos) {
    console.log(videos.items[0]);
  }

  return (
    <>
      {videos ? (
        videos.items.map((video, index) => {
          return (
            <div key={index} className="col-12 col-md-6 col-lg-4 mt-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: 0.5 }}
                className={`wrapper_video move${index}`}
              >
                <Link to={`/video/:?id=${video.id.videoId}`}>
                  <div className="wrapper_mainImage">
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.thumbnails.high.url}
                    />
                  </div>
                  <div className="wrapperDetailsDesc">
                    {video.snippet.title.slice(0, 60).length < 60 ? (
                      <p className="titleVideo">
                        {video.snippet.title.slice(0, 60)}
                      </p>
                    ) : (
                      <p className="titleVideo">
                        {video.snippet.title.slice(0, 60)}...
                      </p>
                    )}
                    <span className="channelName">
                      {video.snippet.channelTitle}
                    </span>
                    <span className="postDate">
                      {" "}
                      {Math.round(Math.random() * 10)} month ago
                    </span>
                  </div>
                </Link>
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
