import React, { useEffect, useState } from "react";

export default function Header() {
  return (
    <div className="w-full h-16 border-gray-300  border-b flex items-center justify-between fixed top-0 bg-white z-10 px-5 md:px-28">
      <span className="logo font-bold text-lg text-logo">CodeSnippy.</span>
      <div className="header_controls flex items-center justify-center"></div>
    </div>
  );
}
