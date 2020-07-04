/** @jsx createElement */

import { createElement } from 'react';
import Endless from 'app/components/Endless';
import Month from 'app/components/Month';
import css from './Root.styl';

const Root = () => (
    <div className={css.root}>
        <Endless
            className={css.endless}
            ItemComponent={Month}
            startCount={10}
        />
    </div>
);

export default Root;
