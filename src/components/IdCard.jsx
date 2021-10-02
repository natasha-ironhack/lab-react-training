import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    return (
      <div>
        <p>
          <b>First Name:</b> {this.props.firstName}
        </p>
        <p>
          <b>Last Name:</b> {this.props.lastName}
        </p>
        <p>
          <b>Gender:</b> {this.props.gender}
        </p>
        <p>
          <b>Height:</b> {this.props.height}
        </p>
        <p>
          <b>Birth:</b> {this.props.birth.toDateString()}
        </p>
        {/* <img src={this.props.picture} alt="pic" /> */}
      </div>
    );
  }
}
export default IdCard;
