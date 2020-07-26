import { IS_PRODUCTION } from 'config';
import { SCHEDULE_TYPES } from 'app/constants';

const needServerRendering = (state = {}) => {
    const { schedule } = state;

    if (!schedule.type) {
        return true;
    }

    if (schedule.type === SCHEDULE_TYPES.FLEXIBLE && !schedule.firstWorkDay) {
        return true;
    }

    return false;
};

export default needServerRendering;
