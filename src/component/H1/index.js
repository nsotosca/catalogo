import React from "react";

export default function H1({ layerSelected }) {
  return (
    <h1>
      Mosaico: Capa{" "}
      {layerSelected && layerSelected !== null
        ? parseInt(layerSelected, 10) + 1
        : ""}
    </h1>
  );
}
