/** @jsx createElement */

import {
    createElement, PureComponent, createRef,
} from 'react';
import css from './Endless.styl';

class Item extends PureComponent {
    constructor(props) {
        super(props);

        this.ref = createRef();
        this.top = 0;
    }

    getHeight() {
        const { offsetHeight } = this.ref.current;

        return offsetHeight;
    }

    setTop(top) {
        this.top = top;
    }

    getTop() {
        return this.top;
    }

    render() {
        const { ItemComponent, index } = this.props;

        return (
            <div className={css.item} ref={this.ref}>
                <ItemComponent index={index} />
            </div>
        );
    }
}

export default Item;
