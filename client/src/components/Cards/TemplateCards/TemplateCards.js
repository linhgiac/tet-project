import { Button, Card } from 'antd';
import React from 'react';
import classNames from 'classnames';

const TemplateCards = ({
    className,
    src,
    title,
    description,
    onAddTemplate,
    onPreview,
}) => {
    return (
        <div
            className={
                classNames(className)
                // 'w-full', 'md:w-[360px]', 'lg:w-full'
            }>
            <Card
                style={{ width: '100%' }}
                cover={<img src={src} />}
                actions={[
                    <div onClick={onAddTemplate}>Add template</div>,
                    <div onClick={onPreview}>Preview</div>,
                ]}>
                <Card.Meta
                    title={title}
                    description={description}
                />
            </Card>
        </div>
    );
};

export default TemplateCards;
