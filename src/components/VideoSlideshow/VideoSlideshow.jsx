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
    <section className="py-20 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <video
            id="video"
            src={videos[currentIndex].src}
            controls
            autoPlay
            muted
            className="w-full h-64 rounded-lg mb-4 bg-black"
          />
          <h2 className="font-bold text-lg text-gray-900 mb-4">
            {videos[currentIndex].title}
          </h2>
          <div className="flex gap-4">
            <button
              className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-indigo-600 transition duration-300"
              onClick={handlePrev}
            >
              ⟵ Prev
            </button>
            <button
              className="bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-indigo-600 transition duration-300"
              onClick={handleNext}
            >
              Next ⟶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSlideshow;
