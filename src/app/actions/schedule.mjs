import { createAction, parseDate, stringifyDate } from 'app/utils';
import { selectCurrentIsoDate } from 'app/selectors';

export const SET_SCHEDULE_TYPE = 'SET_SCHEDULE_TYPE';
export const SET_FIRST_WORK_DAY = 'SET_FIRST_WORK_DAY';
export const RESET_SCHEDULE = 'RESET_SCHEDULE';

export const setScheduleType = createAction(SET_SCHEDULE_TYPE);
const setFirstWorkDayAction = createAction(SET_FIRST_WORK_DAY);
const resetScheduleAction = createAction(RESET_SCHEDULE);

export const setFirstWorkDay = (daysDiff) => (dispatch, getState, api) => {
    const currentIsoDate = selectCurrentIsoDate(getState());

    const date = parseDate(currentIsoDate);

    date.setDate(date.getDate() + daysDiff);

    const firstWorkDay = stringifyDate(date);

    dispatch(setFirstWorkDayAction(firstWorkDay));

    api.setFirstWorkDay(firstWorkDay);
};

export const resetSchedule = () => (dispatch, getState, api) => {
    dispatch(resetScheduleAction());

    api.resetSchedule();
};
