import React, { useState } from "react";
import { videos } from "../../data/videos";

const VideoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="container-vid">
      <div className="slideshow">
        <video
          id="video"
          src={videos[currentIndex].url}
          controls
          autoPlay
          muted
        />
        <h2 id="title">{videos[currentIndex].title}</h2>
        <div className="controls">
          <button className="btn" onClick={handlePrev}>
            ⟵ Prev
          </button>
          <button className="btn" onClick={handleNext}>
            Next ⟶
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSlideshow;
