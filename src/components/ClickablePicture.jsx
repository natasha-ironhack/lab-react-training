import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      //this shows the default state of the picture is the original image
      //(i.e., the UNclicked img. So, it's FALSE that it's clicked. It's the
      //unclicked picture)
    };
  }
  //BUT...., if we want the img to be clicked...: => (this.state.clicked)
  chooseImg = () => {
    if (this.state.clicked) {
      return this.props.imgClicked;
    } else {
      return this.props.img;
    }
  };
  //returns this.props.img first, b/c no one has clicked anything

  style = {
    cursor: 'pointer',
    width: '180px',
    height: '200px',
  };

  switchPic = () => {
    this.setState({
      clicked: !this.state.clicked,
      //now it's TRUE that the image has been clicked. Will show sunglasses pic
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
//can't simply do img src="img/maxence.png". it's in different states. need methods

export default ClickablePicture;
