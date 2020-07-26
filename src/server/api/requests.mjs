export const setFirstWorkDay = (db, state, firstWorkDay) => {
    const { sessionId } = state.session;

    return db.setFirstWorkDay(sessionId, firstWorkDay);
};

export const resetSchedule = (db, state) => {
    const { sessionId } = state.session;

    return db.resetSchedule(sessionId);
};
