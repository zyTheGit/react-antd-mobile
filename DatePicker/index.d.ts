import type { DatePickerProps } from 'antd-mobile';
import React from 'react';
import './index.less';
interface CusDatePickerProps extends DatePickerProps {
    instanceRef?: any;
    allowClear?: boolean;
    onClear?: () => void;
}
declare const _default: React.ForwardRefExoticComponent<CusDatePickerProps & React.RefAttributes<any>>;
export default _default;
