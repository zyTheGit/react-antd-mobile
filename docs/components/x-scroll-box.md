---
group:
  title: 组件
  order: 2
---

# XScrollBox 横向滚动

浏览器默认只支持，鼠标滑轮纵向滚动，该组件可支持通过鼠标滑轮横向滚动

## 示例

```tsx
/**
 * background: '#f6f7f9'
 */
import * as React from 'react';
import { XScrollBox } from 'react-antd-mobile';

const { useRef } = React;

const Index = () => {
  const xScrollBoxRef = useRef(null);

  /**
   * 滚动到指定下标
   */
  const scrollTo = (index)=>{
    xScrollBoxRef.current?.scrollTo({
      top: index * 120,
      behavior: 'smooth',
    });
  }

  return <XScrollBox ref={xScrollBoxRef}>
      <div className={styles['box']}>
        {new Array(100).fill(_).map((_,index) => {
          return (
            <div
              className={styles.item}
              key={index}
            >
            {index}
            </div>
          );
        })}
      </div>
  </XScrollBox>;
};

export default Index;
```

```less
.box{
    padding: 24px 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
}

.item{
  width:120px;
  heigh:100%;
}
```
