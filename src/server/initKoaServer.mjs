import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import addKoaMiddlewares from './addKoaMiddlewares';

const logServerStart = (httpPort) => console.log(
    '\x1b[36m%s\x1b[0m',
    `\n--------------- server start on port ${httpPort} ---------------\n`,
);

const initKoaServer = ({ httpPort, instanceId }) => {
    const koaServer = new Koa();

    koaServer.context.instanceId = instanceId;

    koaServer.use(bodyParser());

    addKoaMiddlewares(koaServer);

    koaServer.listen(httpPort);

    logServerStart(httpPort);
};

export default initKoaServer;
