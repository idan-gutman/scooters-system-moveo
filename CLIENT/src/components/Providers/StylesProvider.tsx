import GlobalStyles from 'assets/styles/global-styles';
import { darkTheme, lightTheme } from 'assets/styles/theme';

import useSession from 'hooks/useSession';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

const StylesProvider: React.FC = ({ children }) => {
  const { isLightTheme } = useSession();
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StylesProvider;
