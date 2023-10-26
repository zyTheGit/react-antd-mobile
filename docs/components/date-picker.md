---
group:
  title: 组件
  order: 3
---

# DatePicker 日期选择

带清除按钮的日期选择器

## 示例

```tsx
/**
 * background: '#f6f7f9'
 */

import { DatePicker } from 'react-antd-mobile';

const { useState } = React;

const Index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        选择
      </button>
      <DatePicker
        title="时间选择"
        visible={visible}
        allowClear
        onClose={() => {
          setVisible(false);
        }}
        onClear={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default Index;
```
