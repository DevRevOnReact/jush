import Link from "next/link";
import React from "react";
import CalButton from "./CalButton";

export default function GetStarted() {
  const steps = [
    {
      number: "1",
      title: "Schedule a Meeting",
      description:
        "Contact us for an initial conversation. We will discuss your idea and align the project scope.",
    },
    {
      number: "2",
      title: "Scope Approval",
      description:
        "On the same day as the meeting, you will receive a detailed scope with everything included in the design, development or the Full Service Package.",
    },
    {
      number: "3",
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitleds easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];

  return (
    <div className="bg-[#FAFAFF] py-24 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Link
            href="/form"
            target="_blank"
            className="text-4xl md:text-4xl font-bold text-[#1E1B4B] mb-4"
          >
            How to Get Started?
          </Link>
          <p className="text-gray-600 text-lg">
            Getting started is simple and fast! Follow these steps:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-[#F2F0FC] w-16 h-16 rounded-full mb-6 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#E7E4ff] flex items-center justify-center ">
                  <span className="text-indigo-600 font-bold text-xl">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="/form"
            target="_blank"
            className="bg-black text-white px-24 py-6 md:py-4 rounded-full font-semibold hover:bg-[#2a2b2f] transition-colors"
          >
            Lets Get Started          
          </Link>
        </div>
      </div>
    </div>
  );
}
