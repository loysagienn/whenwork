/** @jsx createElement */

import { createElement, memo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentIsoDate } from 'app/selectors';
import { parseDate } from 'app/utils';
import css from './ScheduleSelector.styl';

const months = [
    'января', 'февраля',
    'марта', 'апреля', 'мая',
    'июня', 'июля', 'августа',
    'сентября', 'октября', 'ноября',
    'декабря',
];

const weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

const DayTip = ({ isTomorrow }) => {
    const currentIsoDate = useSelector(selectCurrentIsoDate);
    const date = parseDate(currentIsoDate);

    if (isTomorrow) {
        date.setDate(date.getDate() + 1);
    }

    const month = date.getMonth();
    const monthDay = date.getDate();
    const weekDay = date.getDay();

    return (
        <div className={css.today}>
            {`${isTomorrow ? 'Завтра' : 'Сегодня'} ${monthDay} ${months[month]}, ${weekDays[weekDay]}`}
        </div>
    );
};

export default memo(DayTip);
