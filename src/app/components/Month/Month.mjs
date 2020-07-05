/** @jsx createElement */

import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { selectFirstWorkDay } from 'app/selectors';
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
    date.setUTCHours(0, 0, 0, 0);

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

const useMonthDate = (index) => {
    const firstWorkDay = useSelector(selectFirstWorkDay);
    const date = getDate(index);
    const title = getTitle(date);
    const days = getDays(date, firstWorkDay);

    return { title, days };
};

const Month = ({ index }) => {
    const { title, days } = useMonthDate(index);

    return (
        <div className={css.month}>
            <div className={css.title}>{title}</div>
            <DaysTitle />
            <Days days={days} />
        </div>
    );
};

export default Month;
