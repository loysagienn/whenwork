/** @jsx createElement */

import {
    createElement, Component, createRef,
} from 'react';
import { cn } from 'app/utils';
import { addWindowEvent, removeWindowEvent } from 'env/browser';
import css from './Endless.styl';
import Item from './Item';

const CONTAINER_PADDING = 1000;
const MAX_MOVE_COUNT = 5;

const getMoveCount = (space, reserve) => Math.min(Math.ceil((space * MAX_MOVE_COUNT) / reserve), MAX_MOVE_COUNT);

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
        this.containerRef.current.style.padding = `${CONTAINER_PADDING}px 0`;
        this.ref.current.scrollTop = CONTAINER_PADDING;

        this.saveTopOfFirstItems();
        this.updateIndex();
        addWindowEvent('resize', this.onScroll);
    }

    componentDidUpdate() {
        this.updateScroll();
        this.saveTopOfFirstItems();
        this.updateIndex();
    }

    componentWillUnmount() {
        removeWindowEvent('resize', this.onScroll);
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
        const addSpace = offsetHeight * 1.5;
        const removeSpace = addSpace * 2;

        const topSpace = scrollTop - CONTAINER_PADDING;
        const bottomSpace = scrollHeight - offsetHeight - scrollTop - CONTAINER_PADDING;

        if (bottomSpace < addSpace) {
            newEndIndex += getMoveCount(addSpace - bottomSpace, addSpace);

            if (topSpace > removeSpace) {
                newStartIndex += getMoveCount(topSpace - removeSpace, removeSpace);
            }
        } else if (topSpace < addSpace) {
            newStartIndex -= getMoveCount(addSpace - topSpace, addSpace);

            if (bottomSpace > removeSpace) {
                newEndIndex -= getMoveCount(bottomSpace - removeSpace, removeSpace);
            }
        }

        this.setIndex(newStartIndex, newEndIndex);
    }

    saveTopOfFirstItems() {
        const { startIndex, endIndex } = this;
        const toIndex = Math.min(startIndex + MAX_MOVE_COUNT + 1, endIndex);

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

        if (startIndex < savedStartIndex) {
            for (let i = startIndex; i < savedStartIndex; i += 1) {
                const itemRef = this.getItemRef(i);

                newScrollTop += itemRef.current.getHeight();
            }
        } else if (startIndex > savedStartIndex) {
            const itemRef = this.getItemRef(startIndex);

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
