---
group:
  title: 组件
  order: 4
---

# StackChart 层叠柱状图

## 示例

```tsx
/**
 * background: '#f6f7f9'
 */
import { StackChart } from 'react-antd-mobile';

const { useState } = React;

const Index = () => {
  const colors = ['red', 'blue', '#e60', '#002'];
  const [series, setSeries] = useState([
    {
      name: 'test1',
      data: [8, 12, 13],
    },
    {
      name: 'test2',
      data: [31, 32, 43, 44],
    },
    {
      name: 'test4',
      data: [11, 32, 3],
    },
    {
      name: 'test5',
      data: [21, 32, 23],
    },
    {
      name: 'test6',
      data: [31, 32, 23],
    },
  ]);

  return (
    <div style={{ height: '200px' }}>
      <StackChart
        series={series}
        colors={colors}
        xAxis={series.map((i) => i.name)}
      />
    </div>
  );
};

export default Index;
```
