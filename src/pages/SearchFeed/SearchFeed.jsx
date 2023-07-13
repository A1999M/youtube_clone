import { useEffect, useState, useContext, useLayoutEffect } from "react";
import categoryContext from "../../context/categoryContext";
import { useParams } from "react-router-dom";
import { Videos } from "../../components";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import "./SearchFeed.scss";

export default function SearchFeed() {
  const [, , sizeW, , showSidebar] = useContext(categoryContext);
  const [videos, setVideos] = useState(null);
  let { searchTerm } = useParams();

  let styleFeed =
    showSidebar && sizeW < 1200
      ? { filter: "brightness(0.5)" }
      : { filter: "brightness(1)" };

  useLayoutEffect(() => {
    let locoScroll = new LocomotiveScroll({
      el: document.querySelector(".searchFeed"),
      smooth: true,
      multiplier: 0.7,
    });
    locoScroll.start();

    return () => {
      locoScroll.destroy();
    };
  });

  useEffect(() => {
    const url = `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchTerm}&maxResults=50`;
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
  }, [searchTerm]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        style={styleFeed}
        data-scroll-container
        className="container-fluid searchFeed"
      >
        <div data-scroll-section className="row justify-content-end">
          <div className="col-12">
            <div className="row">
              {/* title page */}
              <div className="col-12 mb-2 mt-4">
                <div className="wrapper_titlePage">
                  <span className="searchTitle">
                    Search Results For:{" "}
                    <span className="text-danger">{searchTerm}</span> Videos{" "}
                  </span>
                </div>
              </div>
              {/* posts page */}
              <Videos videos={videos} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
