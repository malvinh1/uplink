import {ThemeProvider} from '@material-ui/core';
import React from 'react';

import Home from './screens/Home';
import {theme} from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
