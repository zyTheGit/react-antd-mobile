import * as React from 'react';
import './index.less';
interface Item {
    title: string | React.ReactNode;
    value: string | number;
    unit: string | number;
    style?: React.CSSProperties;
    prefix?: React.ReactNode;
    list: {
        unit: string;
        label: string;
        value: string | number;
        [k: string]: string | number;
    }[];
}
interface CollapseProps {
    loading?: boolean;
    /**
     * 手风琴模式
     * @default false
     */
    accordion?: boolean;
    onCell?: (params: Record<string, any>) => void;
    itemRender?: (item: Record<string, any>) => React.ReactNode;
    itemLeftRender?: (item: Record<string, any>) => React.ReactNode;
    itemRightRender?: (item: Record<string, any>) => React.ReactNode;
    list: Item[];
}
declare const Index: React.FC<CollapseProps>;
export default Index;
