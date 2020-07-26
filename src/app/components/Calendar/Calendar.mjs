/** @jsx createElement */

import { createElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { resetSchedule } from 'app/actions';
import Endless from 'app/components/Endless';
import Month from 'app/components/Month';
import Button from 'app/components/Button';
import { SvgEdit } from 'app/components/Svg';
import css from './Calendar.styl';

const Menu = () => {
    const dispatch = useDispatch();

    const onClick = useCallback(() => dispatch(resetSchedule()), [dispatch]);

    return (
        <div className={css.menuWrapper}>
            <Button
                className={css.menuButton}
                theme="round"
                onClick={onClick}
            >
                <SvgEdit color="#ffffff" className={css.editSvg} />
            </Button>
        </div>
    );
};

const Calendar = () => (
    <>
        <Endless
            className={css.endless}
            ItemComponent={Month}
            startCount={3}
        />
        <Menu />
    </>
);

export default Calendar;
