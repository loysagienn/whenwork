import { setFirstWorkDay, resetSchedule } from './requests';
import createUserApiGetter from './createUserApiGetter';

export const getUserApi = createUserApiGetter({
    setFirstWorkDay,
    resetSchedule,
});
