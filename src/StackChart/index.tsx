/**
 * auther:zy
 * createTime:2023/08/11
 * lastUpdateTime:2023/08/11
 * 层叠柱状图
 */

import { DownOutline, UpOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import * as React from 'react';
import { initTooltip } from './unit';

import type { Serie, StackChart } from './interface';

import './index.less';

const { useRef, useState, useEffect, useMemo } = React;
const Index: React.FC<StackChart> = ({
  className,
  series,
  colors = [],
  xAxis = [],
  style = {},
  valueStyle = {},
  tooltipFormater,
  collapseLength = 5,
  showValue = true,
  defaultExpanded = false,
}) => {
  const stackChartRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<any[]>([]);
  const [collapse, setCollapse] = useState(defaultExpanded);
  /**
   * 元素放大倍数
   */
  const [enlargeFactor, setEnlargeFactor] = useState(2);
  const { registerMethods, unregisterMethods } = initTooltip(
    stackChartRef.current,
    tooltipFormater,
  );

  /**
   * 判断当前data中是否全部为0
   */
  const getCurrentDataTotal = (data: Array<number>) => {
    return data.reduce((pre, num) => {
      // eslint-disable-next-line no-param-reassign
      pre += num;
      return pre;
    }, 0);
  };

  const setCurrentItem = (
    name: string,
    data: Array<number>,
    colors: Array<string>,
    xAxis: Array<string>,
  ) => {
    const curItem = {
      name,
      data,
      colors,
      xAxis,
    };

    return JSON.stringify(curItem);
  };

  const newSeries = useMemo(() => {
    const _series = [...list];
    return collapse ? _series : _series.slice(0, collapseLength);
  }, [list, collapse]);

  useEffect(() => {
    const totalArr = [] as number[];
    const _series = [...series].reduce((pre, item) => {
      const { data } = item as Serie;
      const total = getCurrentDataTotal(data);
      if (total > 0) {
        pre.push(item);
        totalArr.push(total);
      }

      return pre;
    }, [] as Serie[]);

    if (stackChartRef.current) {
      const { width } = stackChartRef.current.getBoundingClientRect();
      const _maxTotal = totalArr.length === 0 ? 0 : Math.max(...totalArr);
      const __enlargeFactor = _maxTotal === 0 ? 1 : width / _maxTotal;
      setEnlargeFactor(__enlargeFactor);
      registerMethods();
    }

    setList(_series);

    return () => {
      unregisterMethods();
    };
  }, [series]);

  return (
    <div
      ref={stackChartRef}
      className={classNames('cus-stack-chart', className)}
      style={style}
    >
      {newSeries?.map(({ name, data, colors: cols }) => {
        return (
          <>
            <header className="cus-stack-chart__title">{name}</header>
            <div
              className="cus-stack-chart__progress"
              data-item={setCurrentItem(
                name,
                data,
                cols?.length > 0 ? cols : colors,
                xAxis,
              )}
            >
              {data?.map((num: number, index: number) => {
                return (
                  num !== 0 && (
                    <div
                      style={{
                        backgroundColor: cols?.[index] ?? colors[index],
                        width: `${num * enlargeFactor}px`,
                      }}
                      key={index}
                    >
                      {showValue && <span style={valueStyle}>{num}</span>}
                    </div>
                  )
                );
              })}
            </div>
          </>
        );
      })}

      {list.length > collapseLength && (
        <div
          className="cus-stack-chart__footer"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? (
            <>
              收起
              <UpOutline />
            </>
          ) : (
            <>
              展开
              <DownOutline />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
