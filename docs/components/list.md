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
      }, 1000);
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
      titleDivider
      listItemProps={{
        arrow: true,
        onClick: (item) => {
          alert(item);
        },
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

## API

### List props

| 参数           | 说明           | 类型                                                                     | 默认    |
| -------------- | -------------- | ------------------------------------------------------------------------ | ------- |
| request        | 请求方法       | `() => Promise<{total:number,records:Record<string,any>[]}>`             |
| requestParams  | 请求入参       | `Record<string,any>`                                                     |
| responseResult | 响应处理       | `(res:any) => {total:number,records:Record<string,any>[]}`               |
| renderTitle    | 列表标题       | `string \| (item:Record<string,any>)=>ReactNode`                         |
| renderDesc     | 响应描述       | `string \| (item:Record<string,any>)=>ReactNode`                         |
| listItemProps  | 列表项参数     | `ListItem`                                                               |
| immediate      | 是否立即请求   | `boolean`                                                                | `true`  |
| rowKey         | 项 key         | `string \| (arg: Record<string,any>, index: number) => string \| number` | `id`    |
| titleDivider   | 标题下得下划线 | `boolean`                                                                | `false` |

## 类型定义

### ListItem

| 属性      | 说明                                                          | 类型                                                    | 默认值                                                     |
| --------- | ------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| disabled  | 是否禁用                                                      | `boolean`                                               | `false`                                                    |
| clickable | 是否显示点击效果                                              | `boolean`                                               | 当 `onClick` 属性存在时，默认为 `true`，否则默认为 `false` |
| arrow     | 右侧是否显示箭头图标，也支持传入 ReactNode 来自定义图标       | `boolean \| React.ReactNode`                            | `true`                                                     |
| extra     | 列表项右侧区域                                                | `React.ReactNode \| ((record: any) => React.ReactNode)` | `-`                                                        |
| prefix    | 列表项左侧区域                                                | `React.ReactNode \| ((record: any) => React.ReactNode)` | `-`                                                        |
| children  | 列表项中间的主内容区域                                        | `React.ReactNode \| ((record: any) => React.ReactNode)` | `-`                                                        |
| onClick   | 列表项的点击事件，当设置了 onClick 属性时，列表项会有点击效果 | `(item: any) => void`                                   | `-`                                                        |
| divider   | 下划线                                                        | `boolean`                                               | `false`                                                    |
| className | 类名                                                          | `string`                                                | `-`                                                        |

## CSS 变量

| 属性                        | 说明                       | 默认值 |
| --------------------------- | -------------------------- | ------ |
| --card-list-height          | List 组件高度              | `100%` |
| --card-list-text-line-clamp | 标题文字超过几行出现省略号 | `2`    |

## List 上 Ref

| 方法   | 说明                                             | 类型                                       |
| ------ | ------------------------------------------------ | ------------------------------------------ |
| reload | 请求方法，配合手动做请求，`immediate`为`false`时 | `(requestParams:Record<string,any>)=>void` |
