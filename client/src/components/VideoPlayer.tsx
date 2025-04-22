
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Video Tutorials with Sign Language Interpreters
      </h2>
      {/* <div className="aspect-video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0FcwzMq4iWg" // Replace with your video URL
          controls
          width="100%"
          height="100%"
        />
      </div> */}
      <p className="text-gray-700 mt-4">
        Learn through video lessons accompanied by professional sign language interpreters.
      </p>
    </div>
  );
};

export default VideoPlayer;
export {}