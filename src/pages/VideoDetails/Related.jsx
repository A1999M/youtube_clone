import { Link } from "react-router-dom";
import "./related.scss";

export default function Related({ related }) {
  return (
    <>
      {related &&
        related.items.map((video, index) => {
          return (
            <div className="relatedVideos" key={index}>
              <Link to={`/video/:?id=${video.id.videoId}`}>
                <div className="relatedVideoImage">
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.thumbnails.high.url}
                  />
                </div>
                <div className="relatedDetails">
                  {video.snippet.title.slice(0, 60).length < 60 ? (
                    <p className="titleVideo">
                      {video.snippet.title.slice(0, 60)}
                    </p>
                  ) : (
                    <p className="titleVideo">
                      {video.snippet.title.slice(0, 60)}...
                    </p>
                  )}
                  <p className="channelName">{video.snippet.channelTitle}</p>
                  <span className="relatedView">
                    {Math.round(Math.random() * 100)}K Views
                  </span>
                  <span className="postDate">
                    {" "}
                    {Math.round(Math.random() * 10)} month ago
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
}
