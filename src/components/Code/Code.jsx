import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";

export default function Code() {
  return (
    <CodeMirror
      className="codemirror-wrapper"
      value={`/* ./src/index.css */
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      
      ::selection {
        background: #8b5cf6;
        color: white;
      }
      .nice-select:active,
      .nice-select.open,
      .nice-select:focus {
        border-color: rgba(129, 140, 248, 1) !important;
      }
      
      input[type="radio"]:checked + label {
        background: #4f46e5;
        color: #fff;
      }
      
      .sidebar::-webkit-scrollbar {
        width: 4px;
      }
      
      .sidebar::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
      }
      
      .sidebar::-webkit-scrollbar-thumb {
        background-color: rgb(216, 216, 216);
      }
      
      .sidebar {
        scrollbar-width: 2px;
        scrollbar-color: rgb(216, 216, 216) rgba(0, 0, 0, 0);
      }
      `}
      options={{
        lineWrapping: true,
        lint: true,
        mode: "css",
        theme: "material",
        lineNumbers: true,
      }}
    />
  );
}
