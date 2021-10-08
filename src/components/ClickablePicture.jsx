import React, { Component } from 'react';

class ClickablePicture extends Component {
  //method to change it to next pic?
  //   changePicture = () => {
  //     console.log('Picture clicked!');

  //add this.setState({})

  render() {
    return (
      <div>
        <img src="/img/persons/maxence.png" alt="displayImg" />
      </div>
    );
  }
}
export default ClickablePicture;
