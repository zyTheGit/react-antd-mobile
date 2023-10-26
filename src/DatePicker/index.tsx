import type { DatePickerProps } from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import React from 'react';

import './index.less';

interface CusDatePickerProps extends DatePickerProps {
  instanceRef?: any;
  allowClear?: boolean;
  onClear?: () => void;
}

const Index: React.FC<CusDatePickerProps> = ({
  instanceRef,
  title,
  allowClear,
  onClear,
  children,
  ...otherProps
}) => {
  const onCusClear = () => {
    onClear?.();
  };

  const renderTitle = () => {
    return allowClear ? (
      <div className="cus-date-picker__title">
        <div className="cus-date-picker__title--center">{title}</div>
        <span className="cus-date-picker__title--clear" onClick={onCusClear}>
          清空
        </span>
      </div>
    ) : (
      title
    );
  };

  return (
    <DatePicker title={renderTitle()} ref={instanceRef} {...otherProps}>
      {children}
    </DatePicker>
  );
};

export default React.forwardRef<any, CusDatePickerProps>((props, ref) => (
  <Index {...props} instanceRef={ref} />
));
