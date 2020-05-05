import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import GlobalStyle from './styles/global';

class App extends Component {

  render () {
    return (
      <React.Fragment>
        <GlobalStyle />

        <Helmet>
          <meta charSet="utf-8" />
          <title>Modelo Reactjs Template</title>
        </Helmet>

        <h1>hello world</h1>

    </React.Fragment>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
