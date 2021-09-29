import React, { useEffect, useRef } from "react";
import WindowIcon from "../WindowIcon/WindowIcon";
import Code from "../Code/Code";
import interact from "interactjs";
export default function Main() {
  const cardWidth = useRef(null);
  const cardHeight = useRef(null);
  const xMeas = useRef(null);
  const yMeas = useRef(null);

  useEffect(() => {
    interact(".resizable").resizable({
      edges: {
        left: false,
        right: ".resize-r",
        bottom: ".resize-b",
        top: false,
      },

      listeners: {
        move: (event) => {
          xMeas.current.classList.remove("opacity-0");
          yMeas.current.classList.remove("opacity-0");
          var target = event.target;
          var x = parseFloat(target.getAttribute("data-x")) || 0;
          var y = parseFloat(target.getAttribute("data-y")) || 0;

          // update the element's style
          target.style.width = event.rect.width + "px";
          target.style.height = event.rect.height + "px";

          // translate when resizing from top or left edges
          x += event.deltaRect.left;
          y += event.deltaRect.top;

          target.style.transform = "translate(" + x + "px," + y + "px)";

          target.setAttribute("data-x", x);
          target.setAttribute("data-y", y);
          // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
          cardWidth.current.textContent = `${Math.round(event.rect.width)}px`;
          cardHeight.current.textContent = `${Math.round(event.rect.height)}px`;
        },
        onend: () => {
          setTimeout(() => {
            xMeas.current.classList.add("opacity-0");
            yMeas.current.classList.add("opacity-0");
          }, 2000);
        },
      },
      modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: "parent",
        }),

        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 600, height: 300 },
          max: { width: 768, height: 446 },
        }),
      ],

      inertia: true,
    });
  });
  return (
    <div className="resizable bg-gradient-to-br from-pink-600 via-indigo-500 to-green-500 md:px-12 md:py-32 px-7 py-12 rounded-md flex items-center justify-center mx-auto w-full relative max-w-screen-md my-auto ">
      <div className="code bg-white bg-opacity-90 rounded-md p-4 w-full">
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
      {/* X measurement */}
      <div
        ref={xMeas}
        className="border-l border-r h-2 lgx:h-4  border-gray-900 border-opacity-20 w-full absolute lgx:-bottom-8 -bottom-4 flex items-center justify-between opacity-0 transition-opacity duration-200 ease-in-out"
      >
        <div className="border-b border-gray-900 border-opacity-20 w-1/2"></div>
        <span className="text-gray-500 bg-white z-10 px-5" ref={cardWidth}>
          1000px
        </span>
        <div className="border-b border-gray-900 border-opacity-20 w-1/2"></div>
      </div>
      {/* Y measurement */}
      <div
        ref={yMeas}
        className="border-t border-b w-2 lgx:w-4  border-gray-900 border-opacity-20 h-full absolute lgx:-right-8 -right-4 flex opacity-0 transition-opacity duration-200 ease-in-out"
      >
        <div className="h-full w-full relative flex flex-col items-center justify-center">
          <div className="border-l border-gray-900 border-opacity-20 h-1/2 absolute top-0"></div>
          <span
            className="text-gray-500 transform rotate-90 bg-white z-10 px-5"
            ref={cardHeight}
          >
            1000px
          </span>
          <div className="border-l border-gray-900 border-opacity-20 h-1/2 absolute bottom-0"></div>
        </div>
      </div>

      {/* Resize Buttons */}
      <div className="absolute -right-1 resize-r border border-gray-300 shadow-lg top-50% lgx:w-3 w-2  lgx:h-3 h-2  bg-white rounded-full transition duration-300 ease-in-out transform hover:scale-125"></div>
      <div className="absolute -bottom-1 resize-b border border-gray-300 shadow-lg top-50% lgx:w-3 w-2  lgx:h-3 h-2  bg-white rounded-full transition duration-300 ease-in-out transform hover:scale-125"></div>
    </div>
  );
}
