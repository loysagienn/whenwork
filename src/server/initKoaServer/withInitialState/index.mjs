import { generateRandomColor } from 'app/utils';

const withInitialState = async (koaCtx, next) => {
    const initialState = {
        color: generateRandomColor(),
        firstWorkDay: 1593820800000,
    };

    koaCtx.state.initialState = initialState;

    return next();
};

export default withInitialState;
