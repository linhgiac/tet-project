// import React from 'react';
// import { Tabs } from 'antd';

// import SlideThumbnail from '../SlideThumbnail/SlideThumbnail';

// const EditorOverview = ({ slides }) => {
//     const clickHandler = key => {
//         console.log('key :>> ', key);
//     };
//     return (
//         <Tabs
//             defaultActiveKey="1"
//             tabBarStyle={{ backgroundColor: 'white', width: '218px' }}
//             tabPosition={'left'}
//             style={{ height: '100%' }}
//             items={new Array(30).fill(null).map((_, i) => {
//                 const id = String(i);
//                 return {
//                     label: `Tab-${id}`,
//                     key: id,
//                     disabled: i === 28,
//                     children: `Content of tab ${id}`,
//                 };
//             })}
//         />
//     );
// };

// export default EditorOverview;
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@emotion/css';
import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
const DraggableTabNode = ({ className, onActiveBarTransform, ...props }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isSorting,
    } = useSortable({
        id: props['data-node-key'],
    });
    const style = {
        ...props.style,
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: 'move',
    };
    useEffect(() => {
        if (!isSorting) {
            onActiveBarTransform('');
        } else if (className?.includes('ant-tabs-tab-active')) {
            onActiveBarTransform(css`
                .ant-tabs-ink-bar {
                    transform: ${CSS.Transform.toString(transform)};
                    transition: ${transition} !important;
                }
            `);
        }
    }, [className, isSorting, transform]);
    return React.cloneElement(props.children, {
        ref: setNodeRef,
        style,
        ...attributes,
        ...listeners,
    });
};
const EditorOverview = () => {
    const [items, setItems] = useState([
        {
            key: '1',
            label: `Tab 1`,
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: `Tab 2`,
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: `Tab 3`,
            children: 'Content of Tab Pane 3',
        },
    ]);
    const [className, setClassName] = useState('');
    const sensor = useSensor(PointerSensor, {
        activationConstraint: {
            distance: 10,
        },
    });
    const onDragEnd = ({ active, over }) => {
        if (active.id !== over?.id) {
            setItems(prev => {
                const activeIndex = prev.findIndex(i => i.key === active.id);
                const overIndex = prev.findIndex(i => i.key === over?.id);
                return arrayMove(prev, activeIndex, overIndex);
            });
        }
    };
    return (
        <Tabs
            className={className}
            items={items}
            defaultActiveKey="1"
            tabBarStyle={{ backgroundColor: 'white', width: '218px' }}
            tabPosition={'left'}
            style={{ height: '100%' }}
            renderTabBar={(tabBarProps, DefaultTabBar) => (
                <DndContext
                    sensors={[sensor]}
                    onDragEnd={onDragEnd}>
                    <SortableContext
                        items={items.map(i => i.key)}
                        strategy={horizontalListSortingStrategy}>
                        <DefaultTabBar {...tabBarProps}>
                            {node => (
                                <DraggableTabNode
                                    {...node.props}
                                    key={node.key}
                                    onActiveBarTransform={setClassName}>
                                    {node}
                                </DraggableTabNode>
                            )}
                        </DefaultTabBar>
                    </SortableContext>
                </DndContext>
            )}
        />
    );
};
export default EditorOverview;
