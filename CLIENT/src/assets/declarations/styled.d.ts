import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgColor: string;
      navbar: string;
      white: string;
      greyBlue: string;
      grey: string;
      grey2: string;
      button: string;
      pinkError: string;
      inputWhite: string;
      placeholderGray: string;
      dark: string;
      mobileHeader: string;
      widgetBg: string;
      bgcCard: string;
    };
  }
  export interface Breakpoints {
    mobile: string;
    minMobile: string;
    tablet: string;
    laptopSmall: string;
    laptopLarge: string;
  }
}
