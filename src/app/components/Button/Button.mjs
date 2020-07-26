/** @jsx createElement */

import { createElement } from 'react';
import { cn } from 'app/utils';
import css from './Button.styl';

const themes = {
    default: css.themeDefault,
    round: css.themeRound,
};

const Button = ({
    className, children, onClick, theme = 'default',
}) => (
    <div
        className={cn(css.button, className, themes[theme] || themes.default)}
        onClick={onClick}
    >
        {children}
    </div>
);

export default Button;
