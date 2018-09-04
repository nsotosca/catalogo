import React from "react";

import Moldes from "../../assets/json";

function parent(){
  let gNodes;
  gNodes+= Moldes[0].map((containers) =>('<'+containers.true.name+'>'+childs()+'</'+containers.true.name+'>'));
  gNodes = gNodes.replace(/undefined/g,'');  
  return gNodes;
}

function childs(){
  let childNodes;
  childNodes+= Moldes[0].map((containers) =>('<'+containers.true.name+'>hola</'+containers.true.name+'>'));
  childNodes = childNodes.replace(/undefined/g,'');  
  return childNodes;
}  

export default function Molde({ background, showColorPicker }) {
  let gNodes = '';
  // gNodes+= Moldes[0].map((containers) =>('<'+containers.true.name+'>'+childs()+'</'+containers.true.name+'>'));
  gNodes = parent();
  gNodes = gNodes.replace(/,/g,'');  
  return (
    <React.Fragment>
      <ul className="list-group">
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
      </ul>
      {/* {Moldes[0].map((containers) =>
        g += '<'+containers.true.name+'>hola< />'
      )} */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="409px"
	    height="409px" viewBox="0 0 409 409" enableBackground="new 0 0 409 409" xmlSpace="preserve" dangerouslySetInnerHTML={{ __html: gNodes}} />
    </React.Fragment>
  );
}
