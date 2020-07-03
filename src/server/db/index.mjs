import mongodb from 'mongodb';
import { DB_URL, DB_ID } from 'config';
import * as requests from './requests';

const initInstance = (database) => Object.entries(requests).reduce(
    (acc, [key, request]) => Object.assign(acc, { [key]: request(database) }),
    {},
);

const { MongoClient } = mongodb;

let instance = null;

export const getDbInstance = async () => {
    if (!instance) {
        const client = await MongoClient.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 3000,
        });

        const database = client.db(DB_ID);

        instance = initInstance(database);
    }

    return instance;
};
