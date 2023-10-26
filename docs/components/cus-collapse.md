---
group:
  title: 组件
  order: 6
---

# CusCollapse 折叠框

自定义折叠框

## 示例

```tsx
/**
 * background: '#f6f7f9'
 */
import { CusCollapse } from 'react-antd-mobile';

const { useState, useEffect } = React;

const Index = () => {
  const [data, setData] = useState([
    {
      title: 'test1',
      value: 10,
      unit: '次',
      list: [
        { label: 'a', value: 1, unit: '次' },
        { label: 'b', value: 1, unit: '次' },
      ],
    },
    {
      title: 'test2',
      value: 10,
      unit: '次',
      list: [{ label: 'a', value: 1, unit: '次' }],
    },
  ]);
  const [loading, setLoding] = useState(true);

  const onCell = () => {};

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 2000);
  }, []);

  return (
    <CusCollapse list={data} loading={loading} onCell={onCell} accordion />
  );
};

export default Index;
```
