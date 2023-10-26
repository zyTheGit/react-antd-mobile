import { DownOutline, RightOutline, UpOutline } from 'antd-mobile-icons';
import * as React from 'react';
import { Spin } from '../index';

import './index.less';

const { useState } = React;

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

const Index: React.FC<CollapseProps> = ({
  list = [],
  onCell,
  loading,
  accordion,
  itemRender,
  itemLeftRender,
  itemRightRender,
}) => {
  const [activeKeys, setActiveKeys] = useState<any>({});

  const handleClick = (_, index: number | string) => {
    let obj = { ...activeKeys } as any;

    if (accordion) {
      obj = Object.keys(obj).reduce((pre, key) => {
        if (key !== index) pre[key] = false;
        return pre;
      }, obj);
    }

    if (!Object.prototype.hasOwnProperty.call(obj, index)) {
      obj[index] = true;
    } else {
      obj[index] = !obj[index];
    }

    setActiveKeys(obj);

    // if (accordion && list.length - 1 !== index) {
    //   e.currentTarget?.scrollIntoView?.({
    //     behavior: 'smooth',
    //     block: 'start',
    //     inline: 'start',
    //   });
    // }
  };

  return (
    <div className="cus-intelligent-collapse">
      <Spin spinning={loading}>
        {list.map(({ title, list: arr, value, unit, style, prefix }, index) => {
          return (
            <section className="cus-intelligent-collapse-item" key={index}>
              <header
                className="cus-intelligent-collapse-item__title"
                onClick={(e) => handleClick(e, index)}
                style={style}
              >
                <div className="cus-intelligent-collapse-item__title--left">
                  {prefix}
                  {title}
                </div>
                <div className="cus-intelligent-collapse-item__title--right">
                  <b>{value}</b> <em>{unit}</em>
                  {activeKeys[index] ? <UpOutline /> : <DownOutline />}
                </div>
              </header>
              <ul
                className="cus-intelligent-collapse-item__content"
                style={{ height: activeKeys[index] ? 'auto' : 0 }}
              >
                {arr.map((item, index) => {
                  const { label, value, unit } = item;

                  return (
                    <li key={index} onClick={() => onCell?.(item)}>
                      {itemRender?.(item) ?? (
                        <>
                          <div className="cus-intelligent-collapse-item__content-left">
                            <div className="cus-intelligent-collapse-item__content-left--label">
                              {itemLeftRender?.(item) ?? label}
                            </div>
                            {itemRightRender?.(item) ?? (
                              <div>
                                <span className="cus-intelligent-collapse-item__content--value">
                                  {value}
                                </span>
                                {unit && (
                                  <span className="cus-intelligent-collapse-item__content--unit">
                                    {unit}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          <RightOutline />
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </Spin>
    </div>
  );
};

export default Index;
