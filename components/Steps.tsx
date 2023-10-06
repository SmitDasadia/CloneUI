import React from "react";
import Code from "@/components/Code"; // You may need to adjust the import path

// Define the props interface for the StepComponent
interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  codeSnippet: string;
}

const StepComponent: React.FC<StepProps> = ({
  stepNumber,
  title,
  description,
  codeSnippet,
}) => {
  return (
    <div className=" w-full sm:w-1/2 pr-2 sm:pr-2">
      <div className="flex sm:flex-row flex-col relative pb-12">
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center ">
          <div className="hidden sm:block  h-full w-[3px] bg-[#181818] pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#181818] inline-flex items-center justify-center text-white relative z-10 ">
          {stepNumber}
        </div>
        <div className="sm:flex-grow pl-4 pt-4">
          <h2 className=" title-font text-2xl mb-1 tracking-wider text-white font-semibold pb-5">
            {title}
          </h2>
          <p className="leading-relaxed pb-5 text">{description}</p>
          <Code>{codeSnippet}</Code>
        </div>
      </div>
    </div>
  );
};

export default StepComponent;