import { SESSIONS } from '../collections';

export const getSession = (db) => (sessionId) => db
    .collection(SESSIONS)
    .find({ sessionId })
    .toArray()
    .then(([session]) => session);

export const addSession = (db) => {
    const getDbSession = getSession(db);

    return async (session) => {
        const existingSession = await getDbSession(session.sessionId);

        if (existingSession) {
            throw new Error(`Session with id "${session.sessionId}" already exists`);
        }

        return db.collection(SESSIONS).insertOne(session);
    };
};

export const updateSession = (db) => async (sessionId, update) => db
    .collection(SESSIONS)
    .updateOne({ sessionId }, { $set: update });
