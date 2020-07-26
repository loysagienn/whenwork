/** @jsx createElement */

import { createElement } from 'react';
import { cn } from 'app/utils';
import css from './Month.styl';

const Day = ({
    monthDay, isStub, isWeekend, isToday,
}) => {
    if (isStub) {
        return (
            <div className={css.day} />
        );
    }

    return (
        <div className={cn(css.day, isWeekend && css.isWeekend, isToday && css.isToday)}>
            {
                isWeekend && (
                    <div className={css.weekend} />
                )
            }
            {
                isToday && (
                    <div className={css.today} />
                )
            }
            <div className={css.dayText}>
                {monthDay}
            </div>
        </div>
    );
};

const Days = ({ days }) => (
    <div className={css.days}>
        {
            days.map((day) => (
                <Day key={day.timestamp} {...day} />
            ))
        }
    </div>
);

export default Days;
