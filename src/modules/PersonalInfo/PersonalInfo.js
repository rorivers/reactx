/**
 * personal info
 *
 * @version 0.0.1
 * @author  RoRivers
 * @date    2016/10/12
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import debounce from 'lodash.debounce';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PersonalInfo.css';
import { setAsideDomInfo } from '../../actions/dominfo';

const messages = defineMessages({
  name: {
    id: 'personalInfo.name',
    defaultMessage: 'Rovert Rivers',
    description: 'info',
  },
  jobTitle: {
    id: 'personalInfo.jobTitle',
    defaultMessage: 'F2E Coder',
    description: 'info',
  },
  location: {
    id: 'personalInfo.location',
    defaultMessage: 'Shanghai, China',
    description: 'info',
  },
  unitAge: {
    id: 'personalInfo.unit.age',
    defaultMessage: 'y/o',
    description: 'info',
  },
  unitExprience: {
    id: 'personalInfo.unit.exprience',
    defaultMessage: 'y/exprience',
    description: 'info',
  },
  unitProject: {
    id: 'personalInfo.unit.project',
    defaultMessage: 'projects developed',
    description: 'info',
  },
});

class PersonalInfo extends Component {
  static propTypes = {
    setAsideDomInfo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isResized: false,
    };
    this.refElement = (element) => { this.refNode = element; };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    this.updateAsideDomInfo();
    window.addEventListener('resize', debounce(this.handleWindowResize, 100), false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.handleWindowResize, 100), false);
  }

  handleWindowResize() {
    this.updateAsideDomInfo();
  }

  updateAsideDomInfo() {
    const rect = this.refNode.getBoundingClientRect();
    this.props.setAsideDomInfo(rect);
  }

  render() {
    return (
      <div
        className={s.container}
        ref={this.refElement}
      >
        <div className={s.headerPanel}>
          <div className={s.headerImgWrapper}>
            <div className={s.headerImg} />
            <i className={s.headerFlag} />
          </div>
        </div>
        <h1 className={s.myName}>
          <FormattedMessage {...messages.name} />
        </h1>
        <p className={s.jobTitle}>
          <FormattedMessage {...messages.jobTitle} />
        </p>
        <p className={s.residence}>
          <i className={s.iconLocation} />
          <FormattedMessage {...messages.location} />
        </p>
        <table className={s.personalSummary}>
          <tbody>
            <tr>
              <td className={s.personalSummaryYear}>
                <strong className={s.sumaryStrong}>27</strong><br />
                <FormattedMessage {...messages.unitAge} />
              </td>
              <td className={s.personalSummaryExperience}>
                <strong className={s.sumaryStrong}>5+</strong><br />
                <FormattedMessage {...messages.unitExprience} />
              </td>
              <td>
                <strong className={s.sumaryStrong}>10+</strong><br />
                <FormattedMessage {...messages.unitProject} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = (state) => ({
  asideDomInfo: state.dominfo.asideDomInfo,
});

const mapDispatch = {
  setAsideDomInfo,
};

const EnhancedPersonalInfo = connect(mapState, mapDispatch)(PersonalInfo);

export default injectIntl(withStyles(s)(EnhancedPersonalInfo));
