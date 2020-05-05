import { createGlobalStyle } from 'styled-components';
import colors from './colors.js'

// Make sure all browsers do not apply their own styling
import reset from './reset.js';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin:0;
    padding:0;
  }
  html {
    height:100%;
    width:100%;
    // hard reset for rems to position from.
    font-size:16px;
  }
  body {
    background:${colors.whitegray};
    height:100%;
  }
`;

export default GlobalStyle;
