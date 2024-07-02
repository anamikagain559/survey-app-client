import React from "react";
import { FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdAddCircle } from "react-icons/io";
import { DiResponsive } from "react-icons/di";
import { BiSolidReport } from "react-icons/bi";
import { useEffect } from "react";
const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="container mx-auto lg:flex px-3 mb-12  mt-[120px] ">
      <div className="lg:w-2/5" data-aos="fade-up">
        <p className="text-[#3206D3] md:text-xl text-lg font-medium">
          How It Works
        </p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3">
          Welcome to SurveySphere, your premier destination.
        </h1>
        <p className="lg:w-4/5 text-[#a5a5a5]">
          we make it easy for renters to browse through a wide range of
          available properties and find the one that best suits their needs and
          preferences.
        </p>
        <div className="lg:block ">
          <div className="bg-white shadow-2xl px-4 py-4 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <IoMdAddCircle className="text-4xl text-[#3206D3] w-1/3"></IoMdAddCircle>
            <span>
              <h1 className="text-[#3206D3] text-lg font-medium">
                Create Your Survey
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Use our intuitive survey builder to craft your survey.
              </p>
            </span>
          </div>
          <div className="bg-white shadow-2xl px-4 py-4 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <DiResponsive className="text-4xl text-[#3206D3] w-1/3"></DiResponsive>
            <span>
              <h1 className="text-[#3206D3] text-lg font-medium">
                Collect Responses
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                As participants complete your survey, responses are collected in
                real-time.
              </p>
            </span>
          </div>
          <div className="bg-white shadow-2xl px-4 py-4 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <BiSolidReport className="text-4xl text-[#3206D3] w-1/3"></BiSolidReport>
            <span>
              <h1 className="text-[#3206D3] text-lg font-medium">
                Analyze Results
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Dive deep into your survey data with our advanced analytics
                tools.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div
        className="lg:w-1/2 flex item-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]"
        data-aos="fade-left"
      >
        <img
          src="https://i.ibb.co/H25Pn9j/pexels-energepiccom-313691.jpg"
          className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover"
          alt=""
        />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative lg:-top-20 -top-8">
          <img
            src="https://i.ibb.co/qNgDnDP/images.jpg"
            alt=""
            className="w-full h-3/5 rounded-3xl shadow-md object-cover"
          />
          <img
            src="https://i.ibb.co/Xy5WT1c/6403ef254011213ade81b20b-The-Difference-Between-Survey-and-Questionnaire-1.jpg"
            alt=""
            className="w-full h-2/5 rounded-3xl shadow-md object-cover"
          />
        </div>
      </div>
   
    </main>
  );
};

export default HowItWorks;
