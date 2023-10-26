---
group:
  title: 组件
  order: 2
---

# Spin 加载中

## 示例

```tsx
/**
 * background: '#f6f7f9'
 */
import * as React from 'react';
import { Spin } from 'react-antd-mobile';

const { useEffect, useState } = React;

const Index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <Spin spinning={loading}></Spin>;
};

export default Index;
```
