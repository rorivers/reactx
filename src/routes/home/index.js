/**
 * Copyright
 */

import React from 'react';
import Home from './Home.js';

export default {
  path: '/',

  action() {
    return {
      title: 'RoRivers',
      component: <Home />,
    };
  },
};
