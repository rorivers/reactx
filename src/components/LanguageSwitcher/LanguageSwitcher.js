/**
 * Copyright
 */

/* eslint-disable no-shadow */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LanguageSwitcher.css';
import Link from '../Link';
import { setLocale } from '../../actions/intl';

function LanguageSwitcher({ availableLocales, currentLocale, setLocale }) {
  const isSeleted = (locale) => locale === currentLocale;
  const localeDict = {
    'zh-CN': '中文',
    'en-US': 'English',
  };
  const localeName = (locale) => localeDict[locale] || locale;

  return (
    <div className={s.root}>
      <div className={s.container}>
        {availableLocales.map(locale => (
          <span key={locale}>
            {isSeleted(locale) ? (
              <span className={cx(s.item, s.current)}>{localeName(locale)}</span>
            ) : (
              <Link
                to={`?lang=${locale}`}
                onClick={() => setLocale({ locale })}
                className={s.item}
              >
                {localeName(locale)}
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

LanguageSwitcher.propTypes = {
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLocale: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  availableLocales: state.runtime.availableLocales,
  currentLocale: state.intl.locale,
});

const mapDispatch = {
  setLocale,
};

const EnhancedLanguageSwitcher = connect(mapState, mapDispatch)(LanguageSwitcher);

export default withStyles(s)(EnhancedLanguageSwitcher);
