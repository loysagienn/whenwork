const getFirstWorkDay = async (koaCtx) => {
    const { sessionId } = koaCtx.state.session;

    const firstWorkDay = await koaCtx.db.getFirstWorkDay(sessionId);

    return firstWorkDay || null;
};

export default getFirstWorkDay;
