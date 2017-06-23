/**
 * Copyright
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NotFound.css';
import Layout from '../../components/Layout';

function NotFound() {
  return (
    <Layout>
      <div className={s.root}>
        Page not found!
      </div>
    </Layout>
  );
}

export default withStyles(s)(NotFound);
