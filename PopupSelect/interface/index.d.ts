/// <reference types="react" />
import type { SearchBarProps } from 'antd-mobile';
export interface PopupSelectProps {
    searchProps?: Omit<SearchBarProps, 'onSearch'>;
    /**
     * @default true
     */
    showCloseButton?: boolean;
    items: any[];
    fieldNames?: Record<string, any>;
    multiple?: boolean;
    title: string | React.ReactNode;
    showSearch?: boolean;
    itemsFilter?: (value: SelectorValue, index: number, array: SelectorValue[]) => boolean;
    disabled?: boolean;
    [k: string]: any;
}
export type SelectorValue = string | number;
