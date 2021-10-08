import React, { Component } from 'react';

class Random extends Component {
  randomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  render() {
    return (
      <div>
        <p>
          Random value between {this.props.min} and {this.props.max} =
          {this.randomValue(this.props.min, this.props.max)}
          {/* need to get a random value at the end, thus, need to define
           some randomValue here w/ Math.random, and set it between the min 
           and max
           NOTE: couldn't figure out how to do " => " */}
        </p>
      </div>
    );
  }
}

export default Random;
