import { useEffect, useState, useContext, useLayoutEffect } from "react";
import categoryContext from "../../context/categoryContext";
import { SideBar, Videos } from "../../components";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import "./Feed.scss";
import "./responsFeed.scss";

export default function Feed() {
  const [selectedCategury, , sizeW, , showSidebar] =
    useContext(categoryContext);
  const [videos, setVideos] = useState(null);

  let styleFeed =
    showSidebar && sizeW < 1200
      ? { filter: "brightness(0.5)" }
      : { filter: "brightness(1)" };

  useLayoutEffect(() => {
    let locoScroll = new LocomotiveScroll({
      el: document.querySelector(".feed"),
      smooth: true,
      multiplier: 0.7,
    });
    locoScroll.start();

    return () => {
      locoScroll.destroy();
    };
  });

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
      <SideBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        style={styleFeed}
        data-scroll-container
        className="container-fluid feed"
      >
        <div data-scroll-section className="row justify-content-end">
          <div
            className={
              showSidebar
                ? "col-12 col-md-11 col-lg-10 col-xxl-10"
                : "col-12 col-md-11 col-lg-12 col-xxl-12"
            }
          >
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
      </motion.div>
    </>
  );
}
