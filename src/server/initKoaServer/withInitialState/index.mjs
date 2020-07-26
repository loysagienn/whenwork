import { generateRandomColor } from 'app/utils';
import { SCHEDULE_TYPES } from 'app/constants';
import getFirstWorkDay from './getFirstWorkDay';

const withInitialState = async (koaCtx, next) => {
    const [
        firstWorkDay,
    ] = await Promise.all([
        getFirstWorkDay(koaCtx),
    ]);

    const initialState = {
        color: generateRandomColor(),
        schedule: {
            type: SCHEDULE_TYPES.FLEXIBLE,
            firstWorkDay,
        },
    };

    koaCtx.state.initialState = initialState;

    return next();
};

export default withInitialState;
