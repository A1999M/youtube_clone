import { useEffect, useState, useContext } from "react";
import categoryContext from "../../context/categoryContext";
import { Videos } from "../../components";
import { motion } from "framer-motion";
import "./Feed.scss";
import "./responsFeed.scss";

export default function Feed() {
  const [selectedCategury] = useContext(categoryContext);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const url = `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategury}&maxResults=50`;
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
        setVideos(data);
      });
  }, [selectedCategury]);

  return (
    <>
      <div className="container-fluid feed">
        <div className="row justify-content-end">
          <div className="col-12 col-md-11 col-xxl-10">
            <div className="row">
              {/* title page */}
              <div className="col-12">
                <div className="wrapper_titlePage">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "tween", duration: 0.5 }}
                  >
                    {selectedCategury}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "tween", duration: 0.5 }}
                  >
                    videos
                  </motion.span>
                </div>
              </div>
              {/* posts page */}
              <Videos videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
