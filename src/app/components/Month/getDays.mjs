import { times } from 'ramda';

const oneDayMs = 24 * 60 * 60 * 1000;

const setWeekStart = (date) => {
    let weekDay = date.getDay();

    if (weekDay === 1) {
        return;
    }

    if (weekDay === 0) {
        weekDay = 6;
    } else {
        weekDay -= 1;
    }

    date.setDate(date.getDate() - weekDay);
};

const addDay = (date) => date.setDate(date.getDate() + 1);

const isWeekend = (firstWorkDay, timestamp) => {
    const daysDiff = Math.round((timestamp - firstWorkDay) / oneDayMs);

    let scheduleDiff = daysDiff % 4;

    if (scheduleDiff < 0) {
        scheduleDiff += 4;
    }

    return scheduleDiff > 1;
};

const getDays = (date, firstWorkDay) => {
    // eslint-disable-next-line no-unused-vars
    date = new Date(date.getTime());

    date.setDate(1);

    const month = date.getMonth();

    setWeekStart(date);

    const days = [];

    while (date.getMonth() !== month) {
        days.push({
            isStub: true,
            timestamp: date.getTime(),
        });

        addDay(date);
    }

    while (date.getMonth() === month) {
        const timestamp = date.getTime();

        days.push({
            monthDay: date.getDate(),
            timestamp,
            isWeekend: isWeekend(firstWorkDay, timestamp),
        });

        addDay(date);
    }

    return days;
};

export default getDays;
