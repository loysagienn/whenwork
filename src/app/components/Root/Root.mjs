import React from 'react';
import Hello from 'app/components/Hello';
import css from './Root.styl';

const Root = () => (
    <div className={css.root}>
        <Hello />
    </div>
);

export default Root;
