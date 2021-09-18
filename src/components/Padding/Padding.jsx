import React from "react";
import Select from "../Inputs/Select/Select";

export default function Padding({text}) {
  return (
    <div className="mt-5 w-full">
      <span className="text-xs text-gray-600 font-medium mb-3 inline-block">
        {text}
      </span>

      <br />
        <Select w="w-full"  options={['10','12','14','16','18','20','22','24','26','28']}/>
    </div>
  );
}
