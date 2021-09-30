import { Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";

export default function FileUpload({ show, setShow }) {
  const fileInput = useRef(null);
  return (
    <Transition
    as={Fragment}

      show={show}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed w-full h-screen bg-black bg-opacity-20 z-30 flex items-center justify-center p-6 font-Blinker`}
      >
        <div className="bg-white container mx-auto h-auto w-full rounded-md p-7 md:p-10">
          <div className="flex items-center justify-between w-full">
            <span className="w-4"></span>
            <span className="text-lg font-semibold text-gray-700">
              Upload Text File
            </span>
            <span
              onClick={() => setShow(false)}
              className="ri-close-line text-lg text-gray-400 cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
            ></span>
          </div>
          <div className="mt-10 w-full  border-2 border-dashed border-gray-200 rounded-md flex flex-col justify-center items-center h-80 md:h-96 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="none"
              viewBox="0 0 24 24"
              className="text-gray-400 mb-2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 16l-4-4-4 4M12 12v9"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 16l-4-4-4 4"
              ></path>
            </svg>{" "}
            <span className="text-base font-semibold mb-0">Upload a File</span>
            <span className="text-sm">Drag & Drop your File here</span>
            <span className="m-0">OR</span>
            <div className="relative w-32 h-8 mt-1">
              <input
                ref={fileInput}
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <button
                onClick={() => fileInput.current.click()}
                className="absolute left-0 rounded-md focus:ring outline-none transition duration-300 ease-in-out ring-indigo-300 top-0 w-full h-full bg-indigo-600 text-white"
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
