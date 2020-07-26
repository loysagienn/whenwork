export * from './color';

export const selectFirstWorkDay = (state) => state.schedule.firstWorkDay;
export const selectScheduleType = (state) => state.schedule.type;

export const selectCurrentIsoDate = (state) => state.currentIsoDate;
