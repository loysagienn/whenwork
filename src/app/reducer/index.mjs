import { combineReducers } from 'redux';
import color from './color';
import schedule from './schedule';
import currentIsoDate from './currentIsoDate';

export default combineReducers({
    color,
    schedule,
    currentIsoDate,
});
