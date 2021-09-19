import React, { useState } from "react";
import FloatingCard from "../components/FloatingCard/FloatingCard";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full h-screen bg-white dark:bg-dark font-Blinker  dark:text-t-light">
      <Header />
      <div className="w-full h-vm flex relative">
        <Sidebar
          classList={`transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        />
        <div
          className={`transform duration-700 ${
            !isOpen ? "w-full" : "pl-80"
          } flex-1 flex `}
        >
          <Main />
        </div>
      </div>
      <FloatingCard />
    </div>
  );
}
