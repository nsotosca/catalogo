import React, { Component } from "react";

import ClickOutside from "react-click-outside";

import { ColorPicker, ColorSelectedList, H1, Molde } from "../../component";

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      background: ["#000", "#fff", "#000", "#fff"],
      layerSelected: null,
      colorPickerStyle: {
        left: 0,
        top: 0,
        display: false,
      }
    };
    this.hide = this.hide.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  handleChangeComplete = color => {
    let background = this.state.background;
    background[this.state.layerSelected] = color.hex;
    this.setState(prevState => ({
      ...prevState,
      background,
      colorPickerStyle: {
        ...prevState.colorPickerStyle,
        display: false
      }
    }));
  };

  setColor = e => {
    let id = e.target.id;
    let { pageX, pageY } = { ...e };
    this.setState(prevState => ({
      ...prevState,
      layerSelected: id,
      colorPickerStyle: {
        ...prevState.colorPickerStyle,
        display: true,
        left: pageX - 17,
        top: pageY + 5
      }
    }));
  };

  hide() {
    this.setState(prevState => ({
      ...prevState,
      colorPickerStyle: {
        ...prevState.colorPickerStyle,
        display: false
      }
    }));
  }

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
