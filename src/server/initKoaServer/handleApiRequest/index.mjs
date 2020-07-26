import { ROUTES_IDS, ROUTE_TYPES } from 'app/router';
import notFound from './notFound';
import { setFirstWorkDayHandler, resetScheduleHanlder } from './handlers';
import createHandlers from './createHandlers';

const handlers = createHandlers({
    [ROUTES_IDS.API_SET_FIRST_WORK_DAY]: { POST: setFirstWorkDayHandler },
    [ROUTES_IDS.API_RESET_SCHEDULE]: { POST: resetScheduleHanlder },
});

const handleApiRequest = async (koaCtx, next) => {
    const { route } = koaCtx.state;

    if (route.type !== ROUTE_TYPES.JSON) {
        return next();
    }

    const handler = handlers[route.id] || notFound;

    return handler(koaCtx);
};

export default handleApiRequest;
