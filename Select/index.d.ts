/**
 * auther:zy
 * createTime:2023/06/19
 * lastUpdateTime:2023/09/05
 * 下拉框，可配合hooks中useRequestList 方法获取options
 */
import * as React from 'react';
import './index.less';
interface EllipsisProps {
    /**
     * 文字超过显示几行
     * @default 2
     */
    rows?: number;
    expandText?: string;
    collapseText?: string;
    /**
     * @default end
     */
    direction?: 'start' | 'end' | 'middle';
}
interface SelectProps {
    defaultValue?: string | undefined;
    value?: string | undefined;
    fieldNames?: Record<string, any>;
    title?: string | React.ReactNode;
    /**
     * @default false
     * 是否多选
     */
    multiple?: boolean;
    allowClear?: boolean;
    itemsFilter?: (value: any, index: number, array: any[]) => any;
    onClear?: () => void;
    onChange?: (value: any, record: any) => void;
    /**
     * 点击下拉框弹出选择框之前回调，当回调返回true,阻止弹框打开
     * @returns boolean
     */
    onBeforeVisibleChange?: () => boolean;
    ellipsisProps?: EllipsisProps;
    [k: string]: any;
}
declare const Index: React.FC<SelectProps>;
export default Index;
