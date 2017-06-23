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
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Links.css';

const messages = defineMessages({
  question: {
    id: 'links.question',
    defaultMessage: 'Interested in working with me?',
    description: 'links',
  },
  answer: {
    id: 'links.answer',
    defaultMessage: 'Awesome! I\'m available for full-time or freelance opportunities.',
    description: 'links',
  },
  title: {
    id: 'links.list.title',
    defaultMessage: 'Get in touch',
    description: 'links',
  },
});

function Links({ isLinksShowed }) {
  return (
    <div className={cx(s.root, isLinksShowed ? s.showed : '')}>
      <div className={s.container}>
        <p className={s.p}>
          <strong><FormattedMessage {...messages.question} /></strong>
        </p>
        <p className={s.p}><FormattedMessage {...messages.answer} /></p>
        <dl className={s.dl}>
          <dt className={s.dt}>
            <FormattedMessage {...messages.title} />:
          </dt>
          <dd className={s.dd}><i className={s.iconEmail} />developjava@163.com</dd>
          <dd className={s.dd}><i className={s.iconPhone} />185-1655-9026</dd>
          <dd className={s.dd}><i className={s.iconWechat} />the_king_lucky</dd>
          <dd className={s.dd}><i className={s.iconQQ} />1323-875737</dd>
        </dl>
      </div>
    </div>
  );
}

Links.propTypes = {
  isLinksShowed: PropTypes.bool.isRequired,
};

const mapState = (state) => ({
  isLinksShowed: state.dominfo.isLinksShowed,
});

const EnhancedLinks = connect(mapState)(Links);

export default injectIntl(withStyles(s)(EnhancedLinks));
