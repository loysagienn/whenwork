/** @jsx createElement */

import { createElement } from 'react';
import { cn } from 'app/utils';
import css from './Month.styl';

const Day = ({ isWeekend, children }) => (
    <div className={cn(css.dayTitle, isWeekend && css.isWeekend)}>
        {children}
    </div>
);

const DaysTitle = () => (
    <div className={css.daysTitle}>
        <Day>пн</Day>
        <Day>вт</Day>
        <Day>ср</Day>
        <Day>чт</Day>
        <Day>пт</Day>
        <Day isWeekend>сб</Day>
        <Day isWeekend>вс</Day>
    </div>
);

export default DaysTitle;
