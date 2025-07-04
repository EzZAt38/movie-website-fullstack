import React from "react";
const Header = () => {
  return (
    <div className="relative text-center">
      <video
        src="head.mp4"  
        autoPlay
        loop
        controls
        className="w-full h-full"
      />
      <p className="text-2xl text-white z-30">All you wish herer</p>
    </div>
  );
};

export default Header;
