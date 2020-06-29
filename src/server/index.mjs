import { HTTP_PORT } from 'config';
import initKoaServer from './initKoaServer';

initKoaServer({
    httpPort: HTTP_PORT,
    instanceId: 'apple',
});
