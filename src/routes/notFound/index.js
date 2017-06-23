/**
 * Copyright
 */

import React from 'react';
import NotFound from './NotFound.js';

export default {
  path: '*',

  action() {
    return {
      title: 'Page not found',
      component: <NotFound />,
    };
  },
};
