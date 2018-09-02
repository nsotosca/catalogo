import React from "react";

import { GithubPicker } from "react-color";

export default function ColorPicker({ background, left, top, display, handleChangeComplete}) {
  return (
    <div
      className="github-picker"
      style={{
        left: left,
        top: top,
        display: display ? "block" : "none"
      }}
    >
      <GithubPicker
        color={background}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
}
