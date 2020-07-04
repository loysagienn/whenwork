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

const getDays = (date) => {
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
        const weekDay = date.getDay();

        days.push({
            monthDay: date.getDate(),
            timestamp: date.getTime(),
            isWeekend: weekDay === 6 || weekDay === 0,
        });

        addDay(date);
    }

    return days;
};

export default getDays;
