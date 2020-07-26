import { ROUTES_IDS } from 'app/router';
import renderHtml from './renderHtml';

const handleHtmlRequest = async (koaCtx) => {
    const { route } = koaCtx.state;

    if (route.id === ROUTES_IDS.NOT_FOUND) {
        koaCtx.status = 404;

        koaCtx.body = 'Страница не найдена';

        return;
    }

    koaCtx.body = renderHtml(koaCtx);
};

export default handleHtmlRequest;
