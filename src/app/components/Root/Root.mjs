/** @jsx createElement */

import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { selectFirstWorkDay, selectScheduleType } from 'app/selectors';
import Endless from 'app/components/Endless';
import Month from 'app/components/Month';
import ScheduleSelector from 'app/components/ScheduleSelector';
import css from './Root.styl';

const WhenWork = () => {
    const scheduleType = useSelector(selectScheduleType);
    const firstWorkDay = useSelector(selectFirstWorkDay);

    if (!scheduleType || !firstWorkDay) {
        return (
            <ScheduleSelector />
        );
    }

    return (
        <Endless
            className={css.endless}
            ItemComponent={Month}
            startCount={3}
        />
    );
};

const Root = () => (
    <div className={css.root}>
        <WhenWork />
    </div>
);

export default Root;
