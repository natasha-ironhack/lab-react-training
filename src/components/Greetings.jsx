import React, { Component } from 'react';

//this contains the hello in language. app.js contains the indiv. names

class Greetings extends Component {
  lang = {
    de: 'Hallo',
    fr: 'Bonjour',
  };

  render() {
    return (
      <div>
        
        <p>
          {this.lang[this.props.lang]} {this.props.children}
        </p>
        {/* going to the langs' defined on this Greetings.jsx to see what
        langs there are, then going to one of those langs. in App.js (w/ 
        this.props.lang). Is it "de" in App.js? then it matches the "de" greeting 
        from Greetings.jsx lang here. 
        Basically: defining language. If lang === "de", children will be "hallo"*/}
      </div>
    );
  }
}

export default Greetings;
