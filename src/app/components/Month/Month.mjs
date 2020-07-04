/** @jsx createElement */

import { createElement } from 'react';

import css from './Month.styl';

const Month = ({ index }) => (
    <div className={css.month}>
        {`month ${index}`}
    </div>
);
export default Month;
