import * as React from 'react';

import styles from './index.less';

const { useRef, useEffect, useState, useImperativeHandle } = React;

const Index = ({ children, instanceRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const obRef = useRef<ResizeObserver>();
  const [containerRect, setContainerRect] = useState<Record<string, any>>({});
  const getResizeObserver = () => {
    obRef.current = new ResizeObserver(entries => {
      for (const entry of entries) {
        const box = entry.borderBoxSize[0];
        setContainerRect({ width: box.inlineSize, height: box.blockSize });
      }
    });
    obRef.current.observe(containerRef.current!);
  };

  useImperativeHandle(instanceRef, () => ({
    scrollTo: options => {
      scrollRef.current?.scrollTo(options);
    },
  }));

  useEffect(() => {
    getResizeObserver();

    return () => {
      containerRef.current && obRef.current?.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles['container']}>
      <div
        ref={scrollRef}
        className={styles['scroll']}
        style={{
          width: `${containerRect.height}px`,
          height: `${containerRect.width}px`,
          transform: `translateY(${containerRect.height}px) rotate(-90deg)`,
        }}
      >
        <div
          className={styles['content']}
          style={{
            height: `${containerRect.height}px`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef<any, any>((props, ref) => (
  <Index {...props} instanceRef={ref} />
));
