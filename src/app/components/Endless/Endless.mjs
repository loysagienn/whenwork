/** @jsx createElement */

import {
    createElement, Component, createRef,
} from 'react';
import { cn } from 'app/utils';
import css from './Endless.styl';
import Item from './Item';

const RESERVE_SPACE = 300;

class Endless extends Component {
    constructor(props) {
        super(props);

        const { startCount } = props;

        this.ref = createRef();
        this.containerRef = createRef();
        this.itemsRefs = {};

        this.startIndex = 0;
        this.endIndex = startCount ? startCount - 1 : 0;
        this.savedStartIndex = 0;
        this.savedScrollTop = 0;

        this.onScroll = () => this.updateIndex();
    }

    componentDidMount() {
        this.saveTopOfFirstItems();
        this.updateIndex();
    }

    componentDidUpdate() {
        this.updateScroll();
        this.saveTopOfFirstItems();
        this.updateIndex();
    }

    getItemRef(index) {
        const { itemsRefs } = this;

        if (!itemsRefs[index]) {
            itemsRefs[index] = createRef();
        }

        return itemsRefs[index];
    }

    setIndex(newStartIndex, newEndIndex) {
        const { startIndex, endIndex } = this;

        if (startIndex === newStartIndex && endIndex === newEndIndex) {
            return;
        }

        this.startIndex = newStartIndex;
        this.endIndex = newEndIndex;

        const { scrollTop } = this.ref.current;

        this.savedScrollTop = scrollTop;

        this.forceUpdate();
    }

    updateIndex() {
        const { startIndex, endIndex } = this;
        let newStartIndex = startIndex;
        let newEndIndex = endIndex;

        const { offsetHeight, scrollHeight, scrollTop } = this.ref.current;

        const topSpace = scrollTop;
        const bottomSpace = scrollHeight - offsetHeight - scrollTop;

        if (bottomSpace < RESERVE_SPACE) {
            newEndIndex += 1;

            if (topSpace > RESERVE_SPACE * 2) {
                newStartIndex += 1;
            }
        } else if (topSpace < RESERVE_SPACE) {
            newStartIndex -= 1;

            if (bottomSpace > RESERVE_SPACE * 2) {
                newEndIndex -= 1;
            }
        }

        this.setIndex(newStartIndex, newEndIndex);
    }

    saveTopOfFirstItems() {
        const { startIndex, endIndex } = this;
        const toIndex = Math.min(startIndex + 3, endIndex);

        let top = 0;

        for (let i = startIndex; i <= toIndex; i += 1) {
            const itemRef = this.getItemRef(i);

            itemRef.current.setTop(top);

            top += itemRef.current.getHeight();
        }
    }

    updateScroll() {
        const { startIndex, savedStartIndex, savedScrollTop } = this;

        let newScrollTop = savedScrollTop;
        const itemRef = this.getItemRef(startIndex);

        if (startIndex < savedStartIndex) {
            newScrollTop += itemRef.current.getHeight();
        } else if (startIndex > savedStartIndex) {
            newScrollTop -= itemRef.current.getTop();
        }

        this.savedStartIndex = startIndex;
        this.ref.current.scrollTop = newScrollTop;
    }

    renderItems() {
        const { startIndex, endIndex, props } = this;
        const { ItemComponent } = props;

        const items = [];

        for (let i = startIndex; i <= endIndex; i += 1) {
            const itemRef = this.getItemRef(i);

            items.push(
                <Item
                    index={i}
                    key={i}
                    ref={itemRef}
                    ItemComponent={ItemComponent}
                />,
            );
        }

        return items;
    }

    render() {
        const { onScroll, props } = this;
        const { className } = props;

        return (
            <div
                className={cn(className, css.endless)}
                ref={this.ref}
                onScroll={onScroll}
            >
                <div
                    className={css.container}
                    ref={this.containerRef}
                >
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}

export default Endless;
