import { useEffect, useState } from "react";
import { SideBar, Videos } from "../../components";
import { motion } from "framer-motion";
import "./Feed.scss";

export default function Feed() {
  const [selectedCategury, setselectedCategury] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${selectedCategury}`;
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
        setVideos(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [selectedCategury]);

  return (
    <>
      <div className="container-fluid feed">
        <SideBar
          selectedCategury={selectedCategury}
          setselectedCategury={setselectedCategury}
        />
        <div className="row justify-content-end">
          <div className="col-10">
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
                  <span>videos</span>
                </div>
              </div>
              {/* posts page */}
              <Videos videos={videos} selectedCategury={selectedCategury} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
