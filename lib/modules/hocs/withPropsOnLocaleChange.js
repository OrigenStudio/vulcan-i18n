import partial from 'lodash/partial';
import stubFalse from 'lodash/stubFalse';

import withPropsOnLocaleChangeOr from './withPropsOnLocaleChangeOr';

export default partial(withPropsOnLocaleChangeOr, stubFalse);
