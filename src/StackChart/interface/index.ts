export interface Serie {
  colors?: string[];
  name: string;
  data: number[];
}

export interface TooltipFormaterParams extends Serie {
  xAxis: string[];
}

export interface StackChart {
  style?: React.CSSProperties;
  className?: string;
  /**
   * 是否显示值显示
   */
  showValue?: boolean;
  valueStyle?: React.CSSProperties;
  /**
   * 长度为多少时收起
   */
  collapseLength?: number;
  /**
   * 默认是否展开
   */
  defaultExpanded?: boolean;
  tooltipFormater?: (record: TooltipFormaterParams) => string;
  series: Serie[];
  colors: string[];
  xAxis: string[];
}
