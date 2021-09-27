import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
// import "codemirror/theme/base16-light.css";
import "./Code.css";
import { Controlled as CodeMirror } from "react-codemirror2";

export default function Code() {
  return (
    <CodeMirror
      className="codemirror-wrapper text-sm leading-6"
      value={""}
      options={{
        lineWrapping: true,
        lint: true,
        mode: "javascript",
        theme: "one-light",
        // lineNumbers: true,
        scrollbarStyle: null,
      }}
    />
  );
}
