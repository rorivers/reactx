/**
 * Copyright
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import Waypoint from 'react-waypoint';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ResumeLayout.css';
import PersonalInfo from '../PersonalInfo';
import Navigation from '../Navigation';
import Links from '../Links';
import Articles from '../Articles';
import { setNavigationDomInfo } from '../../actions/dominfo';

class ResumeLayout extends Component {
  static propTypes = {
    setNavigationDomInfo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isNavFixed: false,
    };
  }

  handleNavEnter() {
    this.props.setNavigationDomInfo({
      isNavFixed: false,
    });
  }

  handleNavLeave({ currentPosition }) {
    if (currentPosition === Waypoint.above) {
      this.props.setNavigationDomInfo({
        isNavFixed: true,
      });
    } else {
      this.props.setNavigationDomInfo({
        isNavFixed: false,
      });
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <aside className={s.aside}>
            <PersonalInfo />
            <Waypoint
              onEnter={this.handleNavEnter.bind(this)} // eslint-disable-line react/jsx-no-bind
              onLeave={this.handleNavLeave.bind(this)} // eslint-disable-line react/jsx-no-bind
            />
            <Navigation />
          </aside>
          <main className={s.main}>
            <Articles />
          </main>
          <div className={s.linksContainer}>
            <Links />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  isNavFixed: state.dominfo.isNavFixed,
});

const mapDispatch = {
  setNavigationDomInfo,
};

const EnhancedResumeLayout = connect(mapState, mapDispatch)(ResumeLayout);

export default injectIntl(withStyles(s)(EnhancedResumeLayout));
