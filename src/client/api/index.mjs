import request from './request';

export const getUserApi = () => ({
    setFirstWorkDay: (firstWorkDay) => request('/api/set-first-work-day', { method: 'POST', body: { firstWorkDay } }),
    resetSchedule: () => request('api/reset-schedule', { method: 'POST' }),
});
