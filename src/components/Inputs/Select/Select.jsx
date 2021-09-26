import { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery-nice-select/css/style.css";
window.jQuery = window.$ = $;
require("jquery-nice-select");
export default function Select({ classList, options }) {
  const selectRef = useRef();

  useEffect(() => {
    $(selectRef.current).niceSelect();
  }, []);

  return (
    <select
      name=""
      ref={selectRef}
      id=""
      className={`${classList} mb-5 wide dark:bg-dark  flex items-center `}
    >
      {options.map(({ value, selected }) => (
        <option selected={selected} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
