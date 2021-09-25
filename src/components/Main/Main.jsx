import React from "react";
import WindowIcon from "../WindowIcon/WindowIcon";
import Code from "../Code/Code";
export default function Main() {
  return (
    <div className="bg-gradient-to-br from-pink-600 via-indigo-500 to-green-500 px-7 py-10 rounded-md flex items-center justify-center mx-auto w-full max-w-screen-md my-36 ">
      <div className="code bg-white bg-opacity-70 rounded-md  p-4 w-full">
        <div className="header flex items-center justify-center relative py-3">
          <WindowIcon />
          <input
            className="w-28 appearance-none bg-transparent focus:border-transparent border-transparent focus:outline-none border-none text-gray-800 text-center"
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
