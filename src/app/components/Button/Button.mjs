/** @jsx createElement */

import { createElement } from 'react';
import { cn } from 'app/utils';
import css from './Button.styl';

const Button = ({ className, children, onClick }) => (
    <div
        className={cn(css.button, className)}
        onClick={onClick}
    >
        {children}
    </div>
);

export default Button;
