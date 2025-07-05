import React from "react";
import Header from "../components/Header";

const About = () => (
  <Header>
    <div className="flex flex-col items-center w-full z-10">
      <h1 className="text-white text-3xl font-bold mb-4">About Us</h1>
      <p className="text-white max-w-xl text-lg text-center bg-white/10 rounded-lg p-4">
        Welcome to <span className="font-semibold text-indigo-300">Movie Website</span>!<br /><br />
        Our platform helps you discover popular and trending movies from around the world.<br />
        Browse our ever-growing collection, enjoy infinite scrolling, and find detailed information about each movie.<br />
        Use our search feature to look up any film and get instant details.<br /><br />
        We are passionate about movies and strive to provide a seamless, enjoyable experience for all movie lovers.
      </p>
    </div>
  </Header>
);

export default About;