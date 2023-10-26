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
declare const Index: React.FC<SpinProps>;
export default Index;
