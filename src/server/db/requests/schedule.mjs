import { FIRST_WORK_DAYS } from '../collections';

export const getFirstWorkDay = (db) => (sessionId) => db
    .collection(FIRST_WORK_DAYS)
    .find({ sessionId })
    .toArray()
    .then(([result]) => result && result.firstWorkDay);

export const setFirstWorkDay = (db) => {
    const getDbFirstWorkDay = getFirstWorkDay(db);

    return async (sessionId, firstWorkDay) => {
        const existingItem = await getDbFirstWorkDay(sessionId);
        const item = { sessionId, firstWorkDay };

        if (existingItem) {
            return db.collection(FIRST_WORK_DAYS).updateOne({ sessionId }, { $set: item });
        }

        return db.collection(FIRST_WORK_DAYS).insertOne(item);
    };
};

export const resetSchedule = (db) => (sessionId) => db
    .collection(FIRST_WORK_DAYS)
    .deleteOne({ sessionId });
