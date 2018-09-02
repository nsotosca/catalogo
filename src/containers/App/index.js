import React, { Component } from "react";
import ClickOutside from "react-click-outside";

import { ColorPicker, ColorSelectedList, H1, Molde } from "../../component";

import {} from "./GithubPicker.css";

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      background: ["#000", "#000", "#000", "#000"],
      layerSelected: null,
      colorPickerStyle: {
        left: 0,
        top: 0,
        display: false
      }
    };
    this.hide = this.hide.bind(this);
    this.setColor = this.setColor.bind(this);
    // this.showColorPicker = this.showColorPicker.bind(this);
    // this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleChangeComplete = color => {
    let background = this.state.background;
    background[this.state.layerSelected] = color.hex;
    this.setState({
      background,
      colorPickerStyle: {
        display: false
      }
    });
  };

  setColor = e => {
    let id = e.target.id;
    let { pageX, pageY } = { ...e };
    const prevState = this.state;

    // if (!prevState.colorPickerStyle.display) {
    //   // attach/remove event handler
    //   document.addEventListener("click", this.handleOutsideClick, true);
    // } else {
    //   document.removeEventListener("click", this.handleOutsideClick, true);
    // }
    this.setState(prevState => ({
      layerSelected: id,
      colorPickerStyle: {
        display: true,
        left: pageX - 17,
        top: pageY + 5
      }
    }));
  };
  hide() {
    const prevState = this.state;
    this.setState({
      colorPickerStyle: {
        display: false
      }
    });
  }
  // showColorPicker() {
  //   const prevState = this.state;
  //   if (!prevState.colorPickerStyle.display) {
  //     // attach/remove event handler
  //     document.addEventListener("click", this.handleOutsideClick, false);
  //   } else {
  //     // document.removeEventListener("click", this.handleOutsideClick, false);
  //   }
  //   this.setState(prevState => ({
  //     colorPickerStyle: {
  //       display: !prevState.colorPickerStyle.display
  //     }
  //   }));
  // }
  // handleOutsideClick(e) {
  //   // ignore clicks on the component itself
  //   if (this.node.contains(e.target)) {
  //     return;
  //   }
  //   this.showColorPicker();
  // }
  // this.setState({
  //   ...prevState,
  //   layerSelected: e.target.id,
  //   colorPickerStyle: {
  //     display: true,
  //     left: e.pageX - 17,
  //     top: e.pageY + 5
  //   }
  // });
  render() {
    const { background, layerSelected, colorPickerStyle } = this.state;
    return (
      <div className="jumbotron">
        <H1 layerSelected={layerSelected} />
        <ColorSelectedList background={background} />

        <ClickOutside onClickOutside={this.hide}>
          <ColorPicker
            background={background}
            {...colorPickerStyle}
            handleChangeComplete={this.handleChangeComplete}
          />
        </ClickOutside>

        <Molde background={background} showColorPicker={this.setColor} />
      </div>
    );
  }
}

export default App;
