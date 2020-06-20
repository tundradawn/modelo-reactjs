import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider as GridProvider } from 'styled-components'
import { ThemeProvider } from 'theme-ui'
import { Text } from 'rebass'

import theme, { grid } from './styles/theme';
import GlobalStyle from './styles/global';
import Wrapper from './components/wrapper'

class App extends Component {

  render () {
    return (
      <GridProvider theme={grid}>
        {/**
         * Global styles level the playing field for cross-browser support.
         * Emotion does most of the work through rebass,
         * Pass the theme if you want custom defaults.
         *   <GlobalStyle theme={theme}/>
         *
         * @type {GlobalStyle}
         */}
        <GlobalStyle />

        <Helmet>
          <meta charSet="utf-8" />
          <title>Modelo Reactjs Template</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600&display=swap" />
        </Helmet>
        {/**
         * Pass the theme of your choosing to theme-ui for
         * consumption. Powers rebass & it's respective components.
         * Enables use of Emotion built-ins by rebass.
         *
         * @type {ThemeProvider}
         */}
        <ThemeProvider theme={theme}>
          <Wrapper size='md'>
            <Text
              fontSize={2}
              fontFamily='body'
              fontWeight='body'
              color='text'
            >
            Hello World
          </Text>
          </Wrapper>
        </ThemeProvider>
    </GridProvider>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
