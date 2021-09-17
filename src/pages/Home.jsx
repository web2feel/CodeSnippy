import React, { useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full h-screen bg-white dark:bg-dark font-Poppins  dark:text-t-light">
      <Header />
      <div className="w-full h-vm flex">
        {isOpen && <Sidebar />}
        <div className={`${!isOpen ? "w-full" : ""} flex-1 flex `}>
          <Main />
        </div>
      </div>
    </div>
  );
}
