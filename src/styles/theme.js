import colors from './colors';
const fonts = {
  body: '"Work Sans", sans-serif',
  heading: '"Work Sans", sans-serif',
};
const breakpoints = {
  xs: 1,
  sm: 48,   // 768px
  md: 64,   // 1024px
  lg: 90,   // 1440px
  xl: 120,  // 1920px
};
const awesomegrid = {
  mediaQuery: 'only screen',
  columns: {
    xs: 12, //
    sm: 12, // I have no idea why you would
    md: 12, // want to have this change.
    lg: 12, //
    xl: 12, //
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 2.5,
    lg: 2.5,
    xl: 2.5,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90,     // max-width: 1440px
    xl: 90,     // max-width: 1440px
  },
  breakpoints: breakpoints
}
export const grid = {
  awesomegrid: awesomegrid
}
export const standard = {
  wrapper: {
    sm: '30em',   // 480px
    md: '67.5em', // 1080px
    lg: '90em'    // 1440px
  },
  awesomegrid: awesomegrid,
  fonts: fonts,
  colors: {
    primary: colors.lightgray,
    background: colors.white,
    text: colors.black,
    ...colors
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 2,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.5em',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
}
export default standard;
