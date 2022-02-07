import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import AppRoutes from 'common/components/routes/Routes';
import Header from 'containers/main/header/Header';
import Footer from 'containers/main/footer/Footer';
import { BodyContainer } from 'utils/styled';
import { AppContextProvider } from 'context/AppContextProvider';
import GlobalStyle from './common/globalStyle';
import theme from './common/theme';

export type ThemeType = typeof theme

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <BodyContainer>
              <Header />
              <AppRoutes />
              <Footer />
            </BodyContainer>
          </StyledThemeProvider>
        </MuiThemeProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}
