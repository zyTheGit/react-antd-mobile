import { DotLoading, Mask } from 'antd-mobile';
import React from 'react';

import './index.less';

interface SpinProps {
  spinning?: boolean;
  children?: React.ReactNode;
  opacity?: 'default' | 'thin' | 'thick' | number;
  getContainer?: React.ReactNode | (() => React.ReactNode | null);
  loadingTextStyle?: React.CSSProperties;
  loadingText?: string | React.ReactNode;
}

const Index: React.FC<SpinProps> = ({
  spinning,
  loadingText = '加载中',
  loadingTextStyle = { color: '#bbb' },
  opacity = 'default',
  children,
}) => {
  return (
    <div>
      <Mask visible={spinning} opacity={opacity}>
        <span style={loadingTextStyle}>{loadingText}</span>
        <DotLoading />
      </Mask>
      {children}
    </div>
  );
};

export default Index;
