import React, { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState(false);

  //Handle Theme
  const handleTheme = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.replace("dark", "light");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;

    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
      setTheme("dark");
    } else if (localStorage.theme === "light") {
      htmlClasses.add("light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  return (
    <div className="w-full h-16 border-gray-300 dark:border-d-bcol border-b bg-white dark:bg-dark flex items-center justify-between  px-5 md:px-28">
      <span className="logo font-bold text-lg text-logo">CodeSnippy.</span>
      <div className="header_controls flex items-center justify-center">
        <button
          className={`${
            theme === "dark" ? "ri-moon-line" : "ri-sun-line"
          } text-xl cursor-pointer rounded-full outline-none`}
          onClick={handleTheme}
        ></button>
   
      </div>
    </div>
  );
}
