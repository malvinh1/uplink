import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3E495B',
      light: '#FFF',
    },
    secondary: {
      main: '#3E495B',
      light: '#F4F8FE',
    },
  },
  typography: {
    fontFamily: 'manrope',
    h1: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#0E1C32',
    },
    h2: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#0E1C32',
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0E1C32',
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 'normal',
      color: '#0E1C32',
    },
    body1: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0E1C32',
    },
    body2: {
      fontSize: 16,
      fontWeight: 'normal',
      color: '#3E495B',
    },
    caption: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#3E495B',
    },
  },
});
