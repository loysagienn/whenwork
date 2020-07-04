/** @jsx createElement */

import { createElement } from 'react';
import css from './Month.styl';
import DaysTitle from './DaysTitle';
import Days from './Days';
import getDays from './getDays';

const currentDate = Date.now();

const currentYear = (new Date(currentDate)).getFullYear();

const months = [
    'Январь', 'Февраль',
    'Март', 'Апрель', 'Май',
    'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь',
    'Декабрь',
];

const getDate = (index) => {
    const date = new Date(currentDate);

    date.setMonth(date.getMonth() + index);
    date.setHours(0, 0, 0, 0);

    return date;
};

const getTitle = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthName = months[month];

    if (year === currentYear) {
        return monthName;
    }

    return `${monthName} ${year}`;
};

const getMonthDate = (index) => {
    const date = getDate(index);
    const title = getTitle(date);
    const days = getDays(date);

    return { title, days };
};

const Month = ({ index }) => {
    const { title, days } = getMonthDate(index);

    return (
        <div className={css.month}>
            <div className={css.title}>{title}</div>
            <DaysTitle />
            <Days days={days} />
        </div>
    );
};

export default Month;
