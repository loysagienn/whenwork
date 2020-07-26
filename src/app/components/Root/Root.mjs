/** @jsx createElement */

import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { selectFirstWorkDay, selectScheduleType } from 'app/selectors';
import Calendar from 'app/components/Calendar';
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
        <Calendar />
    );
};

const Root = () => (
    <div className={css.root}>
        <WhenWork />
    </div>
);

export default Root;
