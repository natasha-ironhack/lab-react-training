import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  chooseImg = () => {
    if (this.state.clicked) {
      return this.props.imgClicked;
    } else {
      return this.props.img;
    }
  };

  style = {
    cursor: 'pointer',
    width: '180px',
    height: '200px',
  };

  switchPic = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <span>
        <img
          src={this.chooseImg()}
          style={this.style}
          onClick={this.switchPic}
          alt="ClickPic"
        />
      </span>
    );
  }
}

export default ClickablePicture;
