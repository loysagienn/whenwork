/** @jsx createElement */

import { createElement, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectColor } from 'app/selectors';
import { changeColor } from 'app/actions';
import css from './Hello.styl';

const Hello = () => {
    const color = useSelector(selectColor);
    const dispatch = useDispatch();

    const onClick = useCallback(() => dispatch(changeColor()), [dispatch]);

    return (
        <div
            className={css.hello}
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            <div>
                When work
            </div>
        </div>
    );
};

export default Hello;
