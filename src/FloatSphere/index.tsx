import * as React from 'react';

import './index.less';

const { useRef, useEffect } = React;

interface IPosition {
  left: number;
  top: number;
  width: number;
  height: number;
}

const FloatSphere: React.FC<{ time: string | number }> = ({ time }) => {
  const floatRef = useRef<any>(null);
  let offsetX = 0,
    offsetY = 0,
    isTouchStart = false;

  const getElPosition = (): IPosition => {
    const list = ['left', 'top', 'width', 'height'];
    const defaultObj = list.reduce((pre, item) => {
      pre[item] = 0;
      return pre;
    }, {} as IPosition);
    if (!floatRef.current) return defaultObj;
    const position = getComputedStyle(floatRef.current, null) as any;

    return Object.keys(defaultObj).reduce((pre, key) => {
      pre[key] = parseInt(position[key].replace('px'));
      return pre;
    }, {} as IPosition);
  };

  const setElPosition = (x: number, y: number) => {
    if (!floatRef.current) return;
    const dom = floatRef.current;
    dom.style.left = `${x}px`;
    dom.style.top = `${y}px`;
  };

  const eventList = [
    {
      name: 'touchstart',
      handler: (e: any) => {
        e.preventDefault();
        isTouchStart = true;
        const x = e.touches[0].clientX,
          y = e.touches[0].clientY,
          position = getElPosition();
        offsetX = x - position.left;
        offsetY = y - position.top;
      },
    },
    {
      name: 'touchmove',
      handler: (e: any) => {
        e.preventDefault();
        if (isTouchStart) {
          const x = e.touches[0].clientX,
            y = e.touches[0].clientY,
            position = getElPosition(),
            maxLeft = window.innerWidth - position.width,
            maxTop = window.innerHeight - position.height;
          let left = x - offsetX,
            top = y - offsetY;
          if (left <= 0) left = 0;
          if (left > maxLeft) left = maxLeft;
          if (top <= 47) top = 47;
          if (top > maxTop) top = maxTop;
          setElPosition(left, top);
        }
      },
    },
    {
      name: 'touchend',
      handler: (e: any) => {
        e.preventDefault();
        isTouchStart = false;
      },
    },
  ];

  const eventMount = (eventName: 'addEventListener' | 'removeEventLister') => {
    eventList.forEach(({ name, handler }) =>
      floatRef.current?.[eventName]?.(name, handler),
    );
  };

  const initEvent = () => {
    eventMount('addEventListener');
  };

  useEffect(() => {
    initEvent();
    return () => eventMount('removeEventLister');
  }, []);

  return (
    <div className="float-sphere" ref={floatRef}>
      <span>剩余时间</span>
      <span>{time}</span>
    </div>
  );
};

export default FloatSphere;
