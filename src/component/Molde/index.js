import React from "react";

export default function Molde({background, showColorPicker }) {
  return (
    <ul className="list-group">
      {background.map((layers, index) => (
        <li
          id={index}
          key={index}
          style={{ color: layers }}
          onClick={showColorPicker}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
}
