import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ColorPicker from "../ColorPicker/ColorPicker";
import ImageUpload from "../ImageUpload/ImageUpload";

export default function Background() {
  const { state, setState } = useContext(Context);

  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium inline-block">
        BACKGROUND
      </span>
      <br />
      <div className="grid grid-cols-4 gap-4 w-full mt-3">
        <button className="hover:shadow-lg w-14 h-14  rounded-md border  border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-blur-off-fill text-xl flex items-center justify-center text-gray-400"></div>
        </button>
        {/* Image Upload */}
        <ImageUpload />
        {/* Color Picker */}

        <ColorPicker />
        {state?.theme?.background?.map(({ id, value, selected }) => (
          // <button className="hover:shadow-lg w-14 h-14  rounded-md border  border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          //   <div className={`w-full h-full rounded-sm ${gradient.value}`}></div>
          // </button>
          <div className="w-14 h-14 relative mr-3 ">
            <input
              type="radio"
              id={id}
              name="background"
              className="appearance-none transform  outline-none -translate-y-1/2 -translate-x-1/2 absolute left-1/2 top-1/2 w-14 h-14 "
              checked={selected}
            />
            <label
              htmlFor={id}
              className="absolute top-0 left-0 hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer outline-none transition transition-duration-300 ease-out"
            >
              <div className={`w-full h-full rounded-sm ${value}`}></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
