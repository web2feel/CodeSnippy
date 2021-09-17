import React from 'react'
import { Controlled as CodeMirror } from "react-codemirror2";

export default function Code() {
    return (
        <CodeMirror
        value="<h1>I ♥ react-codemirror2</h1>"
        options={{
          mode: "xml",
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      />
    )
}
