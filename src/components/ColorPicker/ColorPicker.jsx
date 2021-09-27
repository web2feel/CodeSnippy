import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ColorPicker() {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button className="hover:shadow-lg w-14 h-14  rounded-md border  border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
            <div className="w-full h-full ri-palette-fill text-xl flex items-center justify-center text-gray-400"></div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-72 -left-2 mx-auto mt-3 transform -translate-x-1/2  font-Poppins ">
              <div className="w-full bg-white h-48 rounded-lg shadow-2xl border border-gray-300 p-5 ">
                <div>
                  <span className="text-xs font-Poppins text-gray-600 font-medium inline-block mt-1">
                    BACKGROUND
                  </span>
                  <div className="grid grid-cols-9 gap-8 w-full">
                    <button className="outline-none w-6 h-6 rounded-full bg-gray-900 focus:ring ring-gray-900 ring-opacity-40 transition duration-300 filter drop-shadow-xl mt-3"></button>
                    <button className="outline-none w-6 h-6 rounded-full bg-red-600 focus:ring ring-red-600 ring-opacity-40 transition duration-300 filter drop-shadow-xl mt-3"></button>
                    <button className="outline-none w-6 h-6 rounded-full bg-yellow-500 focus:ring ring-yellow-500 ring-opacity-40 transition duration-300 filter drop-shadow-xl mt-3"></button>
                    <button className="outline-none w-6 h-6 rounded-full bg-green-500 focus:ring ring-green-500 ring-opacity-40 transition duration-300 filter drop-shadow-xl mt-3"></button>
                    <button className="outline-none w-6 h-6 rounded-full bg-blue-600 focus:ring ring-blue-600 ring-opacity-40 transition duration-300 filter drop-shadow-xl mt-3"></button>
                    <button className="outline-none w-6 h-6 rounded-full bg-indigo-600 focus:ring ring-indigo-600 ring-opacity-40 transition duration-300 filter drop-shadow-xl mt-3"></button>
                    <button className="outline-none w-6 h-6 rounded-full bg-purple-600 focus:ring ring-purple-600 ring-opacity-40 transition duration-300 filter drop-shadow-xl mt-3"></button>
                    <button className="outline-none w-6 h-6 rounded-full bg-pink-600 focus:ring ring-pink-600 ring-opacity-40 transition duration-300 filter drop-shadow-xl mt-3"></button>
                  </div>
                  <span className="text-xs font-Poppins text-gray-600 font-medium inline-block mt-5">
                    CUSTOM COLOR
                  </span>
                  <div className="w-full flex items-center justify-between mt-2">
                    <input
                      type="text"
                      className="w-auto h-10 border mr-2 focus:shadow-md transition duration-300 ease-in-out focus:border-indigo-300  border-gray-300 outline-none rounded-md px-3 text-base text-gray-600 font-Blinker"
                      value="#151515"
                    />
                    <button
                      onClick={() => {
                        alert("Hi");
                        close();
                      }}
                      className="ri-check-fill w-10 h-10 rounded-md  text-white bg-indigo-600 focus:ring ring-indigo-600 ring-opacity-40 transition duration-300 ease-in-out font-bold text-lg outline-none "
                    ></button>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
