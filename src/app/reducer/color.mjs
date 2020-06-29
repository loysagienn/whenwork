import { CHANGE_COLOR } from 'app/actions';
import { handleActions, generateRandomColor } from 'app/utils';

export default handleActions({
    [CHANGE_COLOR]: generateRandomColor,
}, generateRandomColor());
