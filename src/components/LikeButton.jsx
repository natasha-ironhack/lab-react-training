import React, { Component } from 'react';

const btnStyles = {
  margin: '10px',
  border: 'none',
  color: 'white',
};
class LikeButton extends Component {
  //need to create a state
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  state = {
    number: 0,
    text: 'Likes',
  };

  //addNumber method
  addNumber = (btn) => {
    console.log('Clicking!');

    this.setState({
      number:
        btn === 'increase' ? this.state.number + 1 : this.state.number - 1,
    });
  };

  //render method
  render() {
    const { number } = this.state;

    return (
      <div>
        <button
          style={{ ...btnStyles, background: number >= 1 ? 'blue' : 'purple' }}
          onClick={() => this.addNumber('increase')}
        >
          {this.state.number} Likes
        </button>
      </div>
    );
  }
}
export default LikeButton;
