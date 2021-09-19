import React from "react";
import Select from "../Inputs/Select/Select";

export default function CodeColorTheme({title}) {
  return (
    <div className="mt-5 w-full">
    <span className="text-sm text-gray-600 font-medium mb-3 inline-block">{title}</span><br />
    <div className="flex items-center justify-start">
   <Select w="w-full"  options={['Monokai','12','14','16','18','20','22','24','26','28']}/>
    </div>
</div>
  );
}
