---
group:
  title: 组件
  order: 7
---

# Select 选择弹框

可配合`From.Item`使用

## 示例

```tsx
/**
 * background: '#f6f7f9'
 */
import { Select } from 'react-antd-mobile';

const Index = () => {
  const options = [
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
  ];
  return (
    <div>
      <Select
        title="选择"
        options={options}
        fieldNames={{
          label: 'name',
          value: 'id',
        }}
        placeholder="请选择"
        showSearch
      />
    </div>
  );
};

export default Index;
```

## API

### Select props

| 参数                  | 说明                                                                              | 类型                                                                | 默认值                              | 版本 |
| --------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------- | ---- |
| title                 | 自定义标题                                                                        | `string \| ReactNode`                                               | `下拉`                              |      |
| options               | 配置选项内容                                                                      | `SelectorOption[]`                                                  | `[]`                                |
| value                 | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | `SelectorValue[] \| SelectorValue`                                  | `-`                                 |
| fieldNames            | 自定义节点 label、value                                                           | `Record<string,any>`                                                | `{ label: "label", value: "value"}` |
| multiple              | 是否多选                                                                          | `boolean`                                                           | `false`                             |
| showSearch            | 是否显示搜索                                                                      | `boolean`                                                           | `false`                             |
| placeholder           | 选择框默认文本                                                                    | `string`                                                            | `-`                                 |
| allowClear            | 是否显示清空按钮                                                                  | `boolean`                                                           | `false`                             |
| onBeforeVisibleChange | 弹出选择框之前的事件，如果回调返回 true，阻止弹框打开                             | `()=>boolean`                                                       | `-`                                 |
| onClear               | 清空事件                                                                          | `()=>void`                                                          | `-`                                 |
| onChange              | 选项改变时触发                                                                    | `(value: SelectorValue[] \| SelectorValue, SelectorOption) => void` | `-`                                 |

## 类型定义

### SelectorValue

```ts
type SelectorValue = string | number;
```

### SelectorOption

| 属性     | 说明     | 类型            | 默认值  |
| -------- | -------- | --------------- | ------- |
| disabled | 是否禁用 | `boolean`       | `false` |
| label    | 文字     | `ReactNode`     | `-`     |
| value    | 选项的值 | `SelectorValue` | `-`     |
