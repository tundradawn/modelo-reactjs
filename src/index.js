import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  render () {
    return (
      <React.Fragment>
        <h1>hello world</h1>
      </React.Fragment>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
