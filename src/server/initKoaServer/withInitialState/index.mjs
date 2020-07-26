import { generateRandomColor } from 'app/utils';
import { SCHEDULE_TYPES } from 'app/constants';

const withInitialState = async (koaCtx, next) => {
    const initialState = {
        color: generateRandomColor(),
        schedule: {
            type: SCHEDULE_TYPES.FLEXIBLE,
            firstWorkDay: null,
        },
        // firstWorkDay: 1593820800000,
    };

    koaCtx.state.initialState = initialState;

    return next();
};

export default withInitialState;
