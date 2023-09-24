import React, { useState } from "react";
import Header from "./Header";
import blooddonate from "../assets/blooddonate.jpg";
import camp from "../assets/camp.jpg";
import treeplant from "../assets/treeplant.jpg";
import bou from "../assets/bou.jpg";
import cleaniness from "../assets/cleaniness.jpg";
import Header2 from "./Header2";

const Events = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div className="event-page">
      <Header />
      <Header2 />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-10">
        <div className="block rounded-3xl p-2 h-max bg-blue-900">
          <h1
            className={`grid justify-center items-center p-6 m-4 text-3xl mt-5 cursor-pointer ${
              toggle == 1 ? "rounded-3xl bg-[#0000005d] text-white " : null
            }`}
            onClick={() => updateToggle(1)}
          >
            Blood Donation
          </h1>
          <h1
            className={`grid justify-center items-center p-6 m-4 text-3xl mt-5 cursor-pointer ${
              toggle == 2 ? "rounded-3xl bg-[#0000005d] text-white" : null
            }`}
            onClick={() => updateToggle(2)}
          >
            Tree Plantation
          </h1>
          <h1
            className={`grid justify-center items-center p-6 m-4 text-3xl mt-5 cursor-pointer ${
              toggle == 3 ? "rounded-3xl bg-[#0000005d] text-white" : null
            }`}
            onClick={() => updateToggle(3)}
          >
            Cleanliness
          </h1>
          <h1
            className={`grid justify-center items-center p-6 m-4 text-3xl mt-5 cursor-pointer ${
              toggle == 4 ? "rounded-3xl bg-[#0000005d] text-white" : null
            }`}
            onClick={() => updateToggle(4)}
          >
            Camp
          </h1>
          <h1
            className={`grid justify-center items-center p-6 m-4 text-3xl mt-5 cursor-pointer ${
              toggle == 5 ? "rounded-3xl bg-[#0000005d] text-white" : null
            }`}
            onClick={() => updateToggle(5)}
          >
            BOU
          </h1>
        </div>
        <div className="bg-red-800 block rounded-3xl p-4 col-span-2">
          <div className={toggle === 1 ? "block" : "hidden"}>
            <h1 className="text-center p-4 text-5xl">Blood Donation</h1>
            <div className="grid justify-center align-middle">
              <img src={blooddonate} className="rounded-3xl h-[21rem] p-4" />
            </div>
            <p className="p-2 text-2xl text-center">
              Blood Donation Drive organized at KJSIT on 18 October and 120
              units of blood was collected.
            </p>
          </div>
          <div className={toggle === 2 ? "block" : "hidden"}>
            <h1 className="text-center p-4 text-5xl">Tree Plantation</h1>
            <div className="grid justify-center align-middle">
              <img src={treeplant} className="rounded-3xl h-[21rem] p-4" />
            </div>

            <p className="p-2 text-2xl text-center">
              Tree Plantation Drive organized at Mira Bhayandar.
            </p>
          </div>
          <div className={toggle === 3 ? "block" : "hidden"}>
            <h1 className="text-center p-4 text-5xl">Cleanliness</h1>
            <div className="grid justify-center align-middle">
              <img src={cleaniness} className="rounded-3xl h-[21rem] p-4" />
            </div>
            <p className="p-2 text-2xl text-center">
              Mumbai Monorail Swacchta Bharat Abhiyan at wadala.
            </p>
          </div>
          <div className={toggle === 4 ? "block" : "hidden"}>
            <h1 className="text-center p-4 text-5xl">Camp</h1>
            <div className="grid justify-center align-middle">
              <img src={camp} className="rounded-3xl h-[21rem] p-4" />
            </div>
            <p className="p-2 text-2xl text-center">
              NSS Residential Camp at Krishnachiwadi, Shahpur.
            </p>
          </div>
          <div className={toggle === 5 ? "block" : "hidden"}>
            <h1 className="text-center p-4 text-5xl">Best Out Of Waste</h1>
            <div className="grid justify-center align-middle">
              <img src={bou} className="rounded-3xl h-[21rem] p-4" />
            </div>
            <p className="p-2 text-2xl text-center">
              Best Out of Waste was organized at Kandivali under Child Welfare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
