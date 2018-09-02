import React from "react";

export default function ColorSelectedList({ background }) {
  return (
    <React.Fragment>
    <h3>Colores Elegidos: </h3>
    <p>
      {background.map((color, index) => (
        <span className="badge badge-pill badge-primary" style={{backgroundColor: color}} key={index}>{color}</span>
      ))}
    </p>
    </React.Fragment>
  );
}
