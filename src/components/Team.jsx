import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import avatar from "../assets/Avatar-team.jpg";
import Header from "./Header";
import Footer from "./Footer";
import cp1 from "../assets/dev1.jpg";
import { Tilt } from "react-tilt";
import Header2 from "./Header2";

const Team = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      <Header />
      <Header2 />
      <div className="p-8 rounded-lg">
        <h1 className="p-2 text-center uppercase text-3xl font-[sans-serif] md:text-4xl font-bold m-2">
          Our Team (23-24)
        </h1>
        <div className="p-2 font-[Poppins]">
          {/* Program Officer */}
          <div className="card-1">
            <h1 className=" text-3xl md:text-4xl mb-6 text-green-600">
              <span className="font-black text-4xl md:text-5xl">|</span> Program
              Officer
            </h1>

            <div className="grid grid-cols-1 gap-8 mb-8 md:gap-0 md:grid-cols-4 justify-start items-start">
              <div className=" mx-4 md:m-8">
                <Tilt options={defaultOptions}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={avatar}
                      title="HSS"
                    />
                    <CardContent className=" text-center">
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={500}
                        component="div"
                      >
                        Pankaj Deshmukh
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </div>
              <div className=" mx-4 md:m-8">
                <Tilt options={defaultOptions}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={avatar}
                      title="HSS"
                    />
                    <CardContent className=" text-center">
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={500}
                        component="div"
                      >
                        Aarti Sahitya
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </div>
            </div>
          </div>

          {/* Leaders */}
          <div className="card-1">
            <h1 className="text-blue-600 text-3xl md:text-4xl mb-6">
              <span className="font-black text-4xl md:text-5xl">|</span>{" "}
              Chairperson
            </h1>
            <div className="grid grid-cols-1 gap-8 mb-8 md:gap-0 md:grid-cols-4 justify-start items-start">
              <div className=" mx-4 md:m-8">
                <Tilt options={defaultOptions}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia sx={{ height: 250 }} image={cp1} title="HSS" />
                    <CardContent className=" text-center">
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={500}
                        component="div"
                      >
                        Hitanshu Gandhi
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </div>
              <div className=" mx-4 md:m-8">
                <Tilt options={defaultOptions}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={avatar}
                      title="HSS"
                    />
                    <CardContent className=" text-center">
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={500}
                        component="div"
                      >
                        Anmol Matharu
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </div>
            </div>
          </div>

          {/* Core Team */}
          <div className="card-1">
            <h1 className="text-3xl md:text-4xl mb-6 text-red-600">
              <span className="font-black text-4xl md:text-5xl">|</span> Core
              Team
            </h1>
            <div className="grid grid-cols-1 gap-8 mb-8 md:gap-0 md:grid-cols-4 justify-start items-start">
              <div className=" mx-4 md:m-8">
                <Tilt options={defaultOptions}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={avatar}
                      title="HSS"
                    />
                    <CardContent className=" text-center">
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={500}
                        component="div"
                      >
                        Dhairya (Secretary)
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </div>

              <div className=" mx-4 md:m-8">
                <Tilt options={defaultOptions}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={avatar}
                      title="HSS"
                    />
                    <CardContent className=" text-center">
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={500}
                        component="div"
                      >
                        Shivam (CEO)
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </div>

              <div className=" mx-4 md:m-8">
                <Tilt options={defaultOptions}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={avatar}
                      title="HSS"
                    />
                    <CardContent className=" text-center">
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={500}
                        component="div"
                      >
                        Kushal (PRO)
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </div>

              <div className=" mx-4 md:m-8">
                <Tilt options={defaultOptions}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={avatar}
                      title="HSS"
                    />
                    <CardContent className=" text-center">
                      <Typography
                        gutterBottom
                        variant="h6"
                        fontWeight={500}
                        component="div"
                      >
                        Abdul(DMM)
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
