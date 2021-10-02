import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    return (
      <div>
        <p>{this.props.de}</p>
        <p>{this.props.fr}</p>
      </div>
    );
  }
}

export default Greetings;
