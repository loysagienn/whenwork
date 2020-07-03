import send from 'koa-send';
import path from 'path';
import { ROOT_DIR } from 'config';

export default async (ctx, next) => {
    if (!ctx.path.startsWith('/static')) {
        return next();
    }

    const filePath = ctx.path.replace(/^\/static[/]*/, '');
    const root = path.resolve(ROOT_DIR, 'static');

    return send(ctx, filePath, { root });
};
