/** @jsx createElement */

import { createElement } from 'react';

import css from './Month.styl';

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

const Month = ({ index }) => {
    const date = getDate(index);
    const title = getTitle(date);

    return (
        <div className={css.month}>
            <div className={css.title}>{title}</div>
        </div>
    );
};

export default Month;
