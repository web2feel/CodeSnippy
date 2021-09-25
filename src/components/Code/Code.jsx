import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/base16-light.css";
import { Controlled as CodeMirror } from "react-codemirror2";

export default function Code() {
  return (
    <CodeMirror
      className="codemirror-wrapper"
      value={`/* ./src/index.css */
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      
  
    
      `}
      options={{
        lineWrapping: true,
        lint: true,
        mode: "css",
        theme: "base16-light",
        lineNumbers: true,
        scrollbarStyle:null
      }}
    />
  );
}
