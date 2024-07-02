import React from "react";
import { Accordion } from "./Accordion";
const accData = [
  {
    title: "What makes SurveySphere unique compared to other survey platforms?",
    content:
      "SurveySphere offers a user-friendly interface and advanced analytics, empowering users to create, distribute, and analyze surveys efficiently. Our platform supports a variety of question types, real-time data visualization, and customizable templates, ensuring you get the insights you need."
  },
  {
    title: "How can I create a survey on SurveySphere?",
    content:
      "Creating a survey on SurveySphere is simple. Sign up or log in to your account, navigate to the dashboard, and click on 'Create Survey.' Choose from a range of customizable templates, add your questions, and publish your survey to start collecting responses."
  },
  {
    title: "What features does SurveySphere offer for data analysis?",
    content:
      "SurveySphere provides robust data analysis tools, including real-time reporting, visual analytics, and exportable data formats. Users can filter responses, track trends, and generate detailed reports to gain meaningful insights from their surveys."
  },
  {
    title: "How can I ensure my surveys reach the right audience?",
    content:
      "SurveySphere offers targeted distribution options, allowing you to share surveys via email, social media, and embedded links. You can also segment your audience based on demographics, behavior, and other criteria to ensure your surveys reach the most relevant respondents."
  },
  {
    title: "Is my data secure on SurveySphere?",
    content:
      "Yes, at SurveySphere, we prioritize the security and privacy of your data. Our platform employs advanced encryption protocols, secure servers, and compliance with data protection regulations to ensure your information remains safe and confidential."
  }
];
const FAQ = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-5 lg:px-52 my-12 ">
      <h1 className="text-[32px] font-semibold leading-[48px]">FAQ</h1>
      <div className="text-center font-normal text-xl font-semibold mb-5">
       Getting Started with Survey Platform
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <div className="h-[2px] w-full bg-gradient-to-l from-[#1E2230] to-[rgba(30, 34, 48, 0)]]"></div>
        {accData.map((acc, index) => {
          return (
            <div className="w-full" key={index}>
              <Accordion title={acc.title} content={acc.content} />
              <div className="h-[2px] w-full bg-gradient-to-l from-[#1E2230] to-[rgba(30, 34, 48, 0)]]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
