import React from "react";
import { Carousel } from "react-responsive-carousel";
import im211 from "../assets/2021-1.jpg";
import im212 from "../assets/2021-2.jpg";
import im213 from "../assets/2021-3.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/cleaniness.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import bgvdo from "../assets/bgvdo.mp4";
import Header from "./Header";
import Footer from "./Footer";
import Header2 from "./Header2";

const Home = () => {
  return (
    <>
      <Header />
      <Header2 />
      <div>
        <div className=" relative">
          <div className="absolute bg-black opacity-70 h-full w-full">
            <div className="absolute h-full grid grid-cols-1 md:grid-cols-2 justify-center align-middle items-center w-full">
              <motion.div className="md:m-10 md:p-4 text-white text-xl md:text-4xl font-serif text-center">
                <h1 className=" pt-5 md:p-4">National Service Scheme (NSS)</h1>
                <h2>KJ Somaiya Institute Of Technology</h2>
                <h1 className="md:p-4">"Not me but you"</h1>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  rotate: 360,
                  scale: 1,
                  transition: {
                    ease: "easeInOut",
                    duration: 2,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="md:m-48 m-9 grid justify-center md:justify-end"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScywqWfvr32NKYgOb7atRuvgA04dLgiQ9KJhc9wB4GBkJnOKA/viewform?usp=sf_link"
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                >
                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Register</span>
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
          <video src={bgvdo} autoPlay loop muted className=" w-full h-full" />
        </div>
      </div>

      {/* Carousels */}
      <div className="p-5 grid grid-cols-1 gap-4 md:grid-cols-3 justify-center align-middle text-center items-center md:h-screen ">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          interval={2000}
          showThumbs={false}
          showArrows={true}
          className="col-span-2"
        >
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img1} />
          </div>
        </Carousel>
        <div className="text-orange-900 grid md:p-4 text-2xl md:text-4xl font-medium text-center">
          <h1>Tenure [2023-24]</h1>
        </div>
      </div>

      <div className=" bg-orange-900 p-5 grid grid-cols-1 gap-4 md:grid-cols-3 justify-center align-middle text-center items-center md:h-screen ">
        <div className="text-white grid row-start-2 md:row-auto md:p-4 text-2xl md:text-4xl font-medium text-center">
          <h1>Tenure [2022-23]</h1>
        </div>
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          interval={2000}
          showThumbs={false}
          showArrows={true}
          className="col-span-2"
        >
          <div>
            <img src={img1} alt="img1" />
          </div>
          <div>
            <img src={img2} alt="img2" />
          </div>
          <div>
            <img src={img3} alt="img3" />
          </div>
        </Carousel>
      </div>

      <div className="p-5 grid grid-cols-1 gap-4 md:grid-cols-3 justify-center align-middle text-center items-center md:h-screen ">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          interval={2000}
          showThumbs={false}
          showArrows={true}
          className="col-span-2"
        >
          <div>
            <img src={im211} className="md:h-[80vh]" />
          </div>
          <div>
            <img src={im212} className="md:h-[80vh]" />
          </div>
          <div>
            <img src={im213} className="md:h-[80vh]" />
          </div>
        </Carousel>
        <div className="text-orange-900 grid md:p-4 text-2xl md:text-4xl font-medium text-center">
          <h1>Tenure [2021-22]</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
