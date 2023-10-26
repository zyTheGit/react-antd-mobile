---
group:
  title: 组件
  order: 4
---

# FloatSphere 倒计时

## 示例

```tsx
/**
 * background: '#f6f7f9'
 */

import { FloatSphere } from 'react-antd-mobile';

const { useState, useMemo, useRef, useEffect } = React;

const Index = () => {
  const timeRef = useRef(null);
  const [time, setTime] = useState(60);

  const timeStr = useMemo(() => {
    return `${time}s`;
  }, [time]);

  const startTime = () => {
    timeRef.current = setInterval(() => {
      setTime((val) => --val);

      if (time <= 0) {
        clearTimeout(timeRef.current);
      }
    }, 1000);
  };

  useEffect(() => {
    startTime();

    return () => {
      clearInterval(timeRef.current);
    };
  }, []);
  return <FloatSphere time={timeStr} />;
};

export default Index;
```
