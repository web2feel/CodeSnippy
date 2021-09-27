import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ImageUpload() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="hover:shadow-lg w-14 h-14  rounded-md border  border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
            <div className="w-full h-full ri-image-add-fill text-xl flex items-center justify-center text-gray-400"></div>
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
            <Popover.Panel className="absolute z-10 w-72 left-15 mx-auto mt-3 transform -translate-x-1/2  font-Poppins ">
              <div className="w-full bg-white h-60 rounded-xl shadow-2xl border border-gray-300 p-5 text-center">
                <div className="border-2 w-full h-full  border-gray-300 rounded-md border-dashed flex items-center justify-center">
                  <div>
                    <i class="ri-upload-cloud-fill text-4xl text-gray-400"></i>
                    <p className="text-xs tracking-wide	leading-5 text-gray-400 font-medium m-0">
                      DRAG & DROP YOUR FILES HERE <br />
                      OR <br />
                    </p>
                    <button className="w-32 h-7 mt-2 bg-indigo-600  shadow-lg focus:ring outline-none transition duration-300 ring-indigo-300 rounded-md text-white text-xs">
                      Browse
                    </button>
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
 