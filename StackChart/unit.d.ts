import { TooltipFormaterParams } from './interface';
export declare const initTooltip: (el: HTMLDivElement | null, tooltipFormater?: (record: TooltipFormaterParams) => string) => {
    registerMethods: () => void;
    unregisterMethods: () => void;
};
