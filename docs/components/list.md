---
group:
  title: 组件
  order: 1
---

# List 列表

将请求和滚动加载列表封装

## 示例

```tsx
/**
 * background: '#f6f7f9'
 */
import { List } from 'react-antd-mobile';

export default () => {
  const renderTitle = (record) => {
    return '我是标题' + record;
  };

  const renderDesc = (record) => {
    return '我是描述' + record;
  };

  const request = () => {
    return new Promise((resolve, reject) => {
      const list = Object.keys(Array.from(new Array(10)));

      setTimeout(() => {
        const res = { records: list, total: 10, code: 200 };
        resolve(res);
      }, 2000);
    });
  };

  return (
    <List
      classNames="cus-list__card"
      style={{
        '--card-list-text-line-clamp': 6,
      }}
      renderTitle={renderTitle}
      renderDesc={renderDesc}
      request={request}
      listItemProps={{
        arrow: false,
      }}
      responseResult={(res) => {
        const list = res.code === 200 ? res.records : [];

        return { records: list, total: 10 };
      }}
      requestParams={{
        a: 1,
      }}
    />
  );
};
```
