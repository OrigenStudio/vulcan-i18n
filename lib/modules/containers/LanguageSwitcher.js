import PropTypes from 'prop-types';
import withHandlers from 'recompose/withHandlers';
import getContext from 'recompose/getContext';
import renderNothing from 'recompose/renderNothing';
import get from 'lodash/get';
import { registerComponent, Locales } from 'meteor/vulcan:lib';

import { withPropsOnLocaleChangeOr } from '../hocs';

// eslint-disable-next-line import/prefer-default-export
export const LANGUAGE_SWITCHER = 'LanguageSwitcher';
registerComponent(
  LANGUAGE_SWITCHER,
  renderNothing(),
  getContext({
    setLocale: PropTypes.func,
    getLocale: PropTypes.func,
  }),
  withPropsOnLocaleChangeOr(['locales'], ({ locales, getLocale }) => ({
    locales: locales || Locales,
    currentLocale: getLocale(),
  })),
  withHandlers({
    onChange: ({ setLocale }) => localeOrId =>
      setLocale(get(localeOrId, 'id', localeOrId)),
  }),
);
