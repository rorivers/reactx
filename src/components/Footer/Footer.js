/**
 * Copyright
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

function Footer() {
  return (
    <footer className={s.root}>
      <div className={s.container}>
        Made with &hearts; by Robert Rivers
      </div>
    </footer>
  );
}

export default withStyles(s)(Footer);
