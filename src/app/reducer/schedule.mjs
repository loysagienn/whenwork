import { combineReducers } from 'redux';
import { handleActions } from 'app/utils';
import { SET_SCHEDULE_TYPE, SET_FIRST_WORK_DAY, RESET_SCHEDULE } from 'app/actions';

const type = handleActions({
    [SET_SCHEDULE_TYPE]: (state, scheduleType) => scheduleType,
}, null);

const firstWorkDay = handleActions({
    [SET_SCHEDULE_TYPE]: () => null,
    [RESET_SCHEDULE]: () => null,
    [SET_FIRST_WORK_DAY]: (state, scheduleFirstWorkDay) => scheduleFirstWorkDay,
}, null);

const schedule = combineReducers({ type, firstWorkDay });

export default schedule;
