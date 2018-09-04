import React from "react";

import { GithubPicker } from "react-color";

export default function ColorPicker({
  background,
  left,
  top,
  display,
  handleChangeComplete
}) {
  return (
    <div
      style={{
        left: left,
        top: top,
        display: display ? "block" : "none",
        position: 'absolute',
        zIndex: 999999,
      }}
    >
      <GithubPicker
        color={background}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
}
