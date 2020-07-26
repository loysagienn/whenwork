/** @jsx createElement */

import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { selectFirstWorkDay, selectCurrentIsoDate } from 'app/selectors';
import { parseDate } from 'app/utils';
import css from './Month.styl';
import DaysTitle from './DaysTitle';
import Days from './Days';
import getDays from './getDays';

const months = [
    'Январь', 'Февраль',
    'Март', 'Апрель', 'Май',
    'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь',
    'Декабрь',
];

const getDate = (currentIsoDate, index) => {
    const date = parseDate(currentIsoDate);

    date.setMonth(date.getMonth() + index);

    return date;
};

const getTitle = (currentIsoDate, date) => {
    const currentYear = parseDate(currentIsoDate).getFullYear();
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
    const currentIsoDate = useSelector(selectCurrentIsoDate);
    const date = getDate(currentIsoDate, index);
    const title = getTitle(currentIsoDate, date);
    const days = getDays(date, currentIsoDate, firstWorkDay);

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
