import React from "react";
import WindowIcon from "../WindowIcon/WindowIcon";
import Code from "../Code/Code";
export default function Main() {
  return (
    <div className="bg-gradient-to-br from-pink-600 via-indigo-500 to-green-500 md:px-12 md:py-32 px-7 py-12 rounded-md flex items-center justify-center mx-auto w-full max-w-screen-md my-28 md:my-56 ">
      <div className="code bg-white bg-opacity-90 rounded-md  p-4 w-full">
        <div className=" flex items-center justify-center pt-2 pb-3 relative ">
          <WindowIcon />
          <input
            className="w-28 appearance-none bg-transparent focus:border-transparent border-transparent focus:outline-none border-none text-gray-500 text-sm text-center"
            value="index.js"
          />
          <span></span>
        </div>
        <div className="">
          <Code />
        </div>
      </div>
    </div>
  );
}
