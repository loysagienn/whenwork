import { identity } from 'ramda';

const createAction = (type, payloadCreator = identity) => (...args) => ({
    type,
    payload: payloadCreator(...args),
});

export default createAction;
