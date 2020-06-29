const withInitialState = async (koaCtx, next) => {
    const initialState = {};

    koaCtx.state.initialState = initialState;

    return next();
};

export default withInitialState;
