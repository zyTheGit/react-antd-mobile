type RowKeyFunc = (arg: any, index: number) => string | number;

type ReactNodeOrFunc = React.ReactNode | ((record: any) => React.ReactNode);

interface List {
  header?: React.ReactNode;
  mode?: 'default' | 'card';
  style?: React.CSSProperties;
}

interface IPagination {
  pageIndex?: number;
  pageSize?: number;
}

interface ListItem {
  clickable?: boolean;
  disabled?: boolean;
  arrow?: boolean | React.ReactNode;
  extra?: ReactNodeOrFunc;
  prefix?: ReactNodeOrFunc;
  children?: ReactNodeOrFunc;
  onClick?: (item: any) => void;
  divider?: boolean;
  className?: string;
}

interface IInfiniteScroll {
  threshold?: 250;
  children?:
    | React.ReactNode
    | ((
        hasMore: boolean,
        failed: boolean,
        retry: () => void,
      ) => React.ReactNode);
}

interface IEmpty {
  style?: React.CSSProperties;
  description?: React.ReactNode;
  image?: React.ReactNode;
  imageStyle?: React.CSSProperties;
}

interface IPaginationNames {
  /**
   * @default size
   */
  pageSize?: string;
  /**
   * @default current
   */
  pageIndex?: string;
}

export interface ListProps {
  instanceRef?: any;
  /**
   * 是否立即执行
   * @default true
   */
  immediate?: boolean;
  requestParams?: Record<string, any>;
  listProps?: List;
  listItemProps?: ListItem;
  infiniteScrollProps?: IInfiniteScroll;
  emptyProps?: IEmpty;
  /**
   * @default id
   */
  rowKey?: string | RowKeyFunc;
  classNames?: string | Record<string, boolean> | Array<string>;
  style?: React.CSSProperties &
    Partial<
      Record<
        '--card-list-height' | '--card-list-text-line-clamp',
        string | number
      >
    >;
  /**
   * 手动处理响应结果
   * 也可以通过此回调获取请求响应值，但必须返回总条数和records值
   * @param { * } res
   * @returns { Object } { total: number, records: Array }
   */
  responseResult?: <T>(res: any) => { total: number; records: T[] };
  renderTitle?: (item: Record<string, any>) => React.ReactNode;
  renderDesc?: (item: Record<string, any>) => React.ReactNode;
  /**
   * 分页默认分页操作配置
   */
  pagination?: IPagination;
  /**
   * 分页默认分页字段自定义
   */
  paginationNames?: IPaginationNames;
  request: (...arg: any) => Promise<any>;
  /**
   * 标题下的分割线
   */
  titleDivider?: boolean;
}
