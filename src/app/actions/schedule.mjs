import { createAction, parseDate, stringifyDate } from 'app/utils';
import { selectCurrentIsoDate } from 'app/selectors';

export const SET_SCHEDULE_TYPE = 'SET_SCHEDULE_TYPE';
export const SET_FIRST_WORK_DAY = 'SET_FIRST_WORK_DAY';

export const setScheduleType = createAction(SET_SCHEDULE_TYPE);
const setFirstWorkDayAction = createAction(SET_FIRST_WORK_DAY);

export const setFirstWorkDay = (daysDiff) => (dispatch, getState) => {
    const currentIsoDate = selectCurrentIsoDate(getState());

    const date = parseDate(currentIsoDate);

    date.setDate(date.getDate() + daysDiff);

    const firstForkDay = stringifyDate(date);

    dispatch(setFirstWorkDayAction(firstForkDay));
};
