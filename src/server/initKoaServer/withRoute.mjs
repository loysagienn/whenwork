import { normalizeUrl } from 'app/utils';
import { getRouteByUrl } from 'app/router';

const withRoute = async ({ state, request }, next) => {
    const url = normalizeUrl(request.url);

    state.route = getRouteByUrl(url);

    return next();
};

export default withRoute;
