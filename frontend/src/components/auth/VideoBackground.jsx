import React from 'react';
import video from '../../videos/VID_20241123_182658_700.mp4';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 lg:rotate-[-90deg] object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black "></div>
    </div>
  );
};

export default VideoBackground;
