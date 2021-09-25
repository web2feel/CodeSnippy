import React from "react";
import Select from "../Inputs/Select/Select";

export default function Font() {
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium mb-3 inline-block">
        TEXT
      </span>
      <br />
      <Select options={['Monokai','10','12','14','16','18','20','22','24','26','28']}/>
      <div className="flex items-center justify-between w-full">
        <Select classList="mr-2" options={['Regular','10','12','14','16','18','20','22','24','26','28']}/>
        <Select classList="ml-2" options={['10','12','14','16','18','20','22','24','26','28']}/>
      </div>
    </div>
  );
}
