/**
 * Components - Layout
 */

import React from 'react';
import { node } from 'prop-types';

const propTypes = {
  children: node,
};

const Layout = ({ children }) => (
  <main>
    {children}
  </main>
);

Layout.propTypes = propTypes;

export default Layout;