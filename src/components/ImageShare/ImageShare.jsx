import React from "react";
import image from "./8a6911ea-c7b9-4aa3-ba1a-d39daa5e670e.jpeg";

export default function ImageShare() {
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium  inline-block">
        IMAGE
      </span>
      <br />
      <div className="flex items-center mt-2 h-16">
        <img src={image} alt="" className="w-16 h-16 rounded-sm" />
        <div className="pl-5 h-full  ">
          <p className="m-0 text-gray-600 text-base font-semibold">index.png</p>
          <p className="m-0 mt-1 text-gray-500 text-sm">820px X 300px</p>
        </div>
      </div>
    </div>
  );
}
