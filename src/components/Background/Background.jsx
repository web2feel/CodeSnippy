import React, { useContext } from "react";
import { Context } from "../../context/Context";

export default function Background() {
  const { state, setState } = useContext(Context);

  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium inline-block">
        BACKGROUND
      </span>
      <br />
      <div className="grid grid-cols-4 gap-4 w-full mt-3">
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-blur-off-fill text-xl flex items-center justify-center text-gray-400"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-image-add-fill text-xl flex items-center justify-center text-gray-400"></div>
        </button>

        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-palette-fill text-xl flex items-center justify-center text-gray-400"></div>
        </button>
        {state?.theme?.background?.map((gradient) => (
          <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
            <div className={`w-full h-full rounded-sm ${gradient.value}`}></div>
          </button>
        ))}
      </div>
    </div>
  );
}
