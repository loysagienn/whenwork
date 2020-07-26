export const parseDate = (utcDate) => {
    const date = new Date(utcDate);

    return date;
};

export const stringifyDate = (date) => date.toISOString().slice(0, 10);

export const getCurrentIsoDate = () => {
    const timezoneOffset = (new Date()).getTimezoneOffset() * 60000;

    const date = (new Date(Date.now() - timezoneOffset));

    return stringifyDate(date);
};
