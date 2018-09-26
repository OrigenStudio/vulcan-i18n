import compose from 'recompose/compose';
import withPropsOnChange from 'recompose/withPropsOnChange';
import shallowEqual from 'recompose/shallowEqual';
import pick from 'lodash/pick';
import isFunction from 'lodash/isFunction';
import { injectIntl } from 'react-intl';

const sanitizeShouldMapOrKeys = shouldMapOrKeys => {
  if (isFunction(shouldMapOrKeys)) {
    return (props, nextProps) =>
      props.intl.locale !== nextProps.intl.locale ||
      shouldMapOrKeys(props, nextProps);
  }
  if (Array.isArray(shouldMapOrKeys)) {
    return (props, nextProps) =>
      props.intl.locale !== nextProps.intl.locale ||
      !shallowEqual(
        pick(props, shouldMapOrKeys),
        pick(nextProps, shouldMapOrKeys),
      );
  }
  return shouldMapOrKeys;
};

export default (shouldMapOrKeys, createProps) =>
  compose(
    injectIntl,
    withPropsOnChange(sanitizeShouldMapOrKeys(shouldMapOrKeys), createProps),
  );
