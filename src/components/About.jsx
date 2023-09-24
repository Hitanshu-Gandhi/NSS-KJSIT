import React from "react";
import blob1 from "../blobs/blob1.svg";
import blob2 from "../blobs/blob2.svg";
import blob3 from "../blobs/blob3.svg";
import Header from "./Header";
import Footer from "./Footer";
import Header2 from "./Header2";

const About = () => {
  return (
    <>
      <Header />
      <Header2 />
      <div className="p-8">
        <img
          src={blob1}
          className=" absolute -z-10 md:top-8 top-20 right-36 md:right-3/4 w-[30rem]"
        />
        <img
          src={blob2}
          className="absolute -z-10 h-[50rem] top-[25rem] right-0"
        />
        <img
          src={blob3}
          className=" absolute -z-10 top-[75rem] md:top-[65rem] w-[50rem] right-32 md:right-3/4"
        />
        <h1 className="uppercase text-center font-semibold p-2 m-2 text-3xl md:text-4xl">
          About Us
        </h1>
        <div className="md:p-8">
          <div className="md:p-8">
            <h1 className=" text-2xl md:text-4xl mb-3 text-green-700">
              <span className="font-black text-3xl md:text-5xl">|</span>{" "}
              Introduction
            </h1>
            <p className="md:ml-10 md:text-lg md:mb-10 mb-5">
              The National Service Scheme (NSS) at K.J. Somaiya Institute of
              Technology is a vibrant and enthusiastic community of young
              individuals dedicated to making a positive impact on society. Our
              NSS unit is a part of the nationwide initiative by the Ministry of
              Youth Affairs and Sports, Government of India, aimed at instilling
              the values of social responsibility, empathy, and volunteerism in
              college students.
            </p>
          </div>

          <div className="md:p-8">
            <h1 className="text-2xl md:text-4xl mb-3 text-blue-500">
              <span className="font-black text-3xl md:text-5xl">|</span> Our
              Mission
            </h1>
            <p className="md:ml-10 md:text-lg md:mb-10 mb-5">
              At NSS, our mission is to foster a sense of social consciousness
              among students and inspire them to actively engage in community
              development. Through various projects and initiatives, we strive
              to empower individuals, uplift underprivileged communities, and
              contribute to the betterment of society as a whole.
            </p>
          </div>

          <div className="md:p-8">
            <h1 className="text-2xl md:text-4xl mb-3 text-red-600">
              <span className="font-black text-3xl md:text-5xl">|</span>{" "}
              Objectives
            </h1>
            <p className="md:ml-10 md:text-lg md:mb-10 mb-5">
              Our NSS unit is committed to achieving the following objectives:
              Community Development: We actively involve students in projects
              that address social issues and contribute to the welfare of the
              local community.
              <li>
                Skill Development: We believe in nurturing leadership qualities,
                teamwork, and communication skills in our volunteers, preparing
                them for future challenges.
              </li>
              <li>
                Environmental Sustainability: We advocate and participate in
                initiatives that promote environmental conservation and
                sustainable practices.
              </li>
              <li>
                Health and Hygiene: We work towards spreading awareness about
                health-related issues and organizing health camps for the
                well-being of the community.
              </li>
            </p>
          </div>

          <div className="md:p-8">
            <h1 className="text-2xl md:text-4xl mb-3 text-purple-600">
              <span className="font-black text-3xl md:text-5xl">|</span>{" "}
              Volunteer Opportunities
            </h1>
            <p className="md:ml-10 md:text-lg md:mb-10 mb-5">
              As an NSS volunteer at K.J. Somaiya Institute of Technology, you
              will have the chance to participate in a wide range of
              community-driven projects. From teaching underprivileged children
              to organizing cleanliness drives and conducting awareness
              campaigns, there are numerous opportunities to contribute and make
              a difference.
            </p>
          </div>

          <div className="md:p-8">
            <h1 className="text-2xl md:text-4xl mb-3 text-blue-500">
              <span className="font-black text-3xl md:text-5xl">|</span> Impact
              and Achievements
            </h1>
            <p className="md:ml-10 md:text-lg md:mb-10 mb-5">
              Over the years, our NSS unit has made significant strides in
              various social endeavors. Through our collective efforts, we have
              positively impacted countless lives and created lasting changes in
              the communities we serve. From rural development to urban
              outreach, our volunteers have left a mark that resonates far
              beyond the campus boundaries.
            </p>
          </div>

          <div className="md:p-8">
            <h1 className="text-2xl md:text-4xl mb-3 text-red-600">
              <span className="font-black text-3xl md:text-5xl">|</span> Be the
              Change
            </h1>
            <p className="md:ml-10 md:text-lg md:mb-10 mb-5">
              Together, let's embark on this journey of service, compassion, and
              transformation. Join NSS at K.J. Somaiya Institute of Technology
              and be the change you wish to see in the world.
              <br />
              "Not me, but you" - NSS Motto
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
