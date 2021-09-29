import React, { useEffect } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";

import { Controlled as CodeMirror } from "react-codemirror2";

export default function Code() {
  let theme = "Material";
  let lang = "Javascript";

  useEffect(() => {
    import(`codemirror/theme/${theme}.css`);
    import(`codemirror/mode/${lang}/${lang}`);
  });

  return (
    <CodeMirror
      className="codemirror-wrapper text-sm leading-6"
      value={`export const formatText = (text) => {
  let textArr = text.split(" ");
  return textArr;
};`}
      options={{
        lineWrapping: true,
        lint: true,
        mode: lang.toLowerCase(),
        theme: theme.toLowerCase(),
        lineNumbers: true,
        scrollbarStyle: null,
      }}
    />
  );
}
