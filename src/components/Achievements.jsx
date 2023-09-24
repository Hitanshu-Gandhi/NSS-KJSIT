import React from "react";
import achieve1 from "../assets/achieve1.jpeg";
import achieve2 from "../assets/achieve2.png";
import Header from "./Header";
import Footer from "./Footer";
import Header2 from "./Header2";

const Achievements = () => {
  return (
    <div className="achievement-page">
      <Header />
      <Header2 />
      <div className="md:p-8 rounded-lg">
        <h1 className="uppercase text-center text-3xl md:text-4xl font-bold p-2 m-2 md:mb-8">
          Achievements
        </h1>
        <div className="md:ml-6 p-4">
          <h2 className="md:text-3xl mb-5 text-red-600">
            <span className="font-black text-xl md:text-5xl">|</span>
            Mi Thanekar published article on health camp during residential camp
          </h2>
          <img src={achieve1} className="md:ml-8 mb-12 mt-2" />
        </div>
        <div className="ml-6">
          <h2 className="md:text-3xl mb-5 text-purple-700">
            <span className="font-black text-xl md:text-5xl">|</span> SA-06 got
            mentioned for cleanup at Yeoor Forest, Thane
          </h2>
          <img
            src={achieve2}
            className="md:ml-8 mb-12 mt-2 md:w-auto w-[20rem]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Achievements;
