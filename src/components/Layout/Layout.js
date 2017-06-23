/**
 * Copyright
 */

import React, { PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {React.Children.only(children)}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default injectIntl(withStyles(s)(Layout));
