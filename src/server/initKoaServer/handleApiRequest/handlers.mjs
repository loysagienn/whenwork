export const setFirstWorkDayHandler = async (koaCtx) => {
    const { firstWorkDay } = koaCtx.request.body;

    await koaCtx.state.api.setFirstWorkDay(firstWorkDay);

    return {
        firstWorkDay,
    };
};

export const resetScheduleHanlder = async (koaCtx) => {
    await koaCtx.state.api.resetSchedule();

    return {};
};
