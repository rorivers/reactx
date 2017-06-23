/**
 * personal info
 *
 * @version 0.0.1
 * @author  RoRivers
 * @date    2016/10/12
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../../components/Link';

const messages = defineMessages({
  aboutme: {
    id: 'nav.aboutme',
    defaultMessage: 'about me',
    description: 'navgation',
  },
  education: {
    id: 'nav.education',
    defaultMessage: 'education',
    description: 'navgation',
  },
  work: {
    id: 'nav.work',
    defaultMessage: 'work exprience',
    description: 'navgation',
  },
  skills: {
    id: 'nav.skills',
    defaultMessage: 'skills',
    description: 'navgation',
  },
});

function Navigation({ asideDomInfo, isNavFixed }) {
  const fixedStyle = {
    position: 'fixed',
    top: 0,
    left: asideDomInfo.left || 0,
    width: asideDomInfo.width || 0,
  };

  return (
    <nav
      className={s.root}
      style={(isNavFixed) ? fixedStyle : {}}
    >
      <div className={s.container}>
        <Link key="1" className={s.a} to="#about-me">
          <i className={s.iconAboutme} />
          <FormattedMessage {...messages.aboutme} />
        </Link>
        <Link key="2" className={s.a} to="#education">
          <i className={s.iconEdu} />
          <FormattedMessage {...messages.education} />
        </Link>
        <Link key="3" className={s.a} to="#work-exprience">
          <i className={s.iconWork} />
          <FormattedMessage {...messages.work} />
        </Link>
        <Link key="4" className={s.a} to="#skills">
          <i className={s.iconSkills} />
          <FormattedMessage {...messages.skills} />
        </Link>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  asideDomInfo: PropTypes.shape({
    width: PropTypes.number,
    left: PropTypes.number,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
  }).isRequired,
  isNavFixed: PropTypes.bool.isRequired,
};

const mapState = (state) => ({
  asideDomInfo: state.dominfo.asideDomInfo,
  isNavFixed: state.dominfo.isNavFixed,
});

const EnhancedNavigation = connect(mapState)(Navigation);

export default injectIntl(withStyles(s)(EnhancedNavigation));
