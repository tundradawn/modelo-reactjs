import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

class App extends Component {

  render () {
    return (
      <React.Fragment>
      <GlobalStyle />
        <h1>hello world</h1>
      </React.Fragment>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
