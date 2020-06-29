import { generateRandomColor } from 'app/utils';

const withInitialState = async (koaCtx, next) => {
    const initialState = {
        color: generateRandomColor(),
    };

    koaCtx.state.initialState = initialState;

    return next();
};

export default withInitialState;
