import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import Routes from 'react-static-routes';

import globalStyles from './theme/global-styles';

injectGlobal`
  ${globalStyles}
`;

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default hot(module)(App);