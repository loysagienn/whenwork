/** @jsx createElement */

import { createElement, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFirstWorkDay, selectScheduleType } from 'app/selectors';
import { setScheduleType, setFirstWorkDay } from 'app/actions';
import { SCHEDULE_TYPES } from 'app/constants';
import Button from 'app/components/Button';
import DayTip from './DayTip';
import css from './ScheduleSelector.styl';

const TypeSelector = () => {
    const dispatch = useDispatch();
    // const setStandard = useCallback(() => dispatch(setScheduleType(SCHEDULE_TYPES.STANDARD)), [dispatch]);
    const setFlexible = useCallback(() => dispatch(setScheduleType(SCHEDULE_TYPES.FLEXIBLE)), [dispatch]);

    return (
        <div className={css.popup}>
            <div className={css.question}>Какой у вас график работы?</div>
            <div className={css.buttons}>
                {/* <Button className={css.button} onClick={setStandard}>5/2</Button> */}
                <Button className={css.button} onClick={setFlexible}>2/2</Button>
            </div>
        </div>
    );
};

const dayByCode = {
    11: 0,
    10: 3,
    '00': 2,
    '01': 1,
};

const FirstWorkDaySelector = () => {
    const dispatch = useDispatch();
    const [workToday, setToday] = useState(null);

    const setIsWork = (isWork) => {
        if (!workToday) {
            setToday(isWork);
        } else {
            dispatch(setFirstWorkDay(dayByCode[`${workToday}${isWork}`]));
        }
    };

    const isTomorrow = Boolean(workToday);

    const setYes = () => setIsWork('1');
    const setNo = () => setIsWork('0');

    return (
        <div className={css.popup}>
            <div className={css.title}>
                Рассчет графика 2/2
            </div>
            <div className={css.question}>
                {
                    isTomorrow ? 'А завтра рабочий?' : 'Сегодня рабочий день?'
                }
            </div>
            <div className={css.buttons}>
                <Button className={css.button} onClick={setYes}>Да</Button>
                <Button className={css.button} onClick={setNo}>Нет</Button>
            </div>
            <DayTip isTomorrow={isTomorrow} />
        </div>
    );
};

const Content = () => {
    const scheduleType = useSelector(selectScheduleType);
    const firstWorkDay = useSelector(selectFirstWorkDay);

    if (!scheduleType) {
        return (
            <TypeSelector />
        );
    }

    return (
        <FirstWorkDaySelector />
    );
};

const ScheduleSelector = () => (
    <div className={css.scheduleSelector}>
        <Content />
    </div>
);

export default ScheduleSelector;
