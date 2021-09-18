import React from "react";
import Select from "../Inputs/Select/Select";
import SizeInput from "../SizeInput/SizeInput";

export default function Font() {
  return (
    <div className="mt-5 w-full">
      <span className="text-xs text-gray-600 font-medium mb-3 inline-block">
        TEXT
      </span>
      <br />
      <Select w="w-full" options={['Monokai','10','12','14','16','18','20','22','24','26','28']}/>
      <div className="flex items-center justify-between w-full">
        <Select w="w-half" options={['Regular','10','12','14','16','18','20','22','24','26','28']}/>
        <Select w="w-half" options={['10','12','14','16','18','20','22','24','26','28']}/>
      </div>
    </div>
  );
}
