import React, { useState } from "react";
export const Accordion = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((current) => !current);
    return (
      <div
        className="w-full cursor-pointer bg-transparent shadow-sm"
        onClick={toggleExpanded}
      >
        <div className="flex h-16 select-none flex-row items-center justify-between text-left md:h-16">
          <h5 className="flex-1 text-sm font-normal leading-tight sm:text-lg md:text-lg">
            {title}
          </h5>
          <div className="flex h-6 w-6 items-center justify-center rounded-full">
            {expanded ? "-" : "+"}
          </div>
        </div>
        <div
          className={`overflow-hidden pt-0 transition-[max-height] duration-500 ease-in ${
            expanded ? "max-h-40" : "max-h-0"
          }`}
        >
          <p className="pb-4 text-left text-xs font-normal tracking-[0.01em] opacity-60 sm:text-sm leading-[28px]">
            {content}
          </p>
        </div>
      </div>
    );
  };