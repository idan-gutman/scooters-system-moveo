import { Breakpoints, DefaultTheme } from 'styled-components';

export const breakpoints: Breakpoints = {
  mobile: `max-width: 768px`,
  minMobile: `min-width: 768px`,
  tablet: `max-width: 1024px`,
  laptopSmall: `max-width: 1280px`,
  laptopLarge: `min-width: 2155px`,
};
const colors = {
  white: '#FFFFFF',
  greyBlue: '#444E72',
  grey: '#838baa',
  grey2: '#4d4d4d',
  button: 'linear-gradient(230.65deg, #47bfdf 22.95%, #4a91ff 77.9%)',
  pinkError: '#f0274b',
  inputWhite: '#f2f2f2',
  placeholderGray: '#bebebe',
  dark: '#222222',
  mobileHeader: '#48bae4',
  widgetBg: '#85b6fc',
  bgcCard: 'rgba(255, 255, 255, 0.2)'
};

export const lightTheme: DefaultTheme = {
  colors: {
    ...colors,
    bgColor: 'linear-gradient(192.05deg, #47bfdf 0%, #4a91ff 100%), #ffffff',
    navbar: '#48bce2',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    ...colors,
    bgColor: 'linear-gradient(189.57deg, #191634 0%, #1E437C 133.7%)',
    navbar: '#1A2B55',
  },
};
