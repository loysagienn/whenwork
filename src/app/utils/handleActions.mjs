const handleActions = (handlers, defaultState) => (state = defaultState, action) => {
    const handler = handlers[action.type];

    if (!handler) {
        return state;
    }

    return handler(state, action.payload);
};

export default handleActions;
