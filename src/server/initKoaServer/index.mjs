import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { getDbInstance } from 'server/db';
import addKoaMiddlewares from './addKoaMiddlewares';

const logServerStart = (httpPort) => console.log(
    '\x1b[36m%s\x1b[0m',
    `\n--------------- server start on port ${httpPort} ---------------\n`,
);

const initKoaServer = async ({ httpPort, instanceId }) => {
    const koaServer = new Koa();

    const db = await getDbInstance();

    koaServer.context.instanceId = instanceId;
    koaServer.context.db = db;

    koaServer.use(bodyParser());

    addKoaMiddlewares(koaServer);

    koaServer.listen(httpPort);

    logServerStart(httpPort);
};

export default initKoaServer;
