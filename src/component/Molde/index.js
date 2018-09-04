import React from "react";

import Moldes from "../../assets/json";

// function parent(){
//   let gNodes;
//   gNodes+= Moldes[0].map((containers) =>('<'+containers.true.name+'>'+childs()+'</'+containers.true.name+'>'));
//   gNodes = gNodes.replace(/undefined/g,'');
//   return gNodes;
// }

export default function Molde({ background, showColorPicker }) {
  return (
    <React.Fragment>
      {/* <ul className="list-group">
        {background.map((color, index) => (
          <li
            id={index}
            key={index}
            style={{ color: color }}
            onClick={showColorPicker}
          >
            {index + 1}
          </li>
        ))}
      </ul> */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="90%"
        // height="409px"
        viewBox="0 0 409 409"
        enableBackground="new 0 0 409 409"
        xmlSpace="preserve"
      >
        {Moldes.map(elements =>
          elements.map(
            tag =>
              tag.title === "molde" ? (
                <tag.name
                  {...tag.attrs}
                  fill={background[tag.attrs.id]}
                  onClick={showColorPicker}
                />
              ) : (
                ''
              )
          )
        )}
      </svg>
    </React.Fragment>
  );
}
