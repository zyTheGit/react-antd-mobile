/**
 * auther:zy
 * createTime:2023/06/19
 * lastUpdateTime:2023/09/22
 * 请求列表，该组件暂不支持虚拟滚动
 */
import { Empty, InfiniteScroll, List } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import classnames from 'classnames';
import React from 'react';

import type { ListProps } from './interface';

import './index.less';

const defaultPagination = {
  pageIndex: 1,
  pageSize: 10,
  total: 0,
};

const defaultPaginationNames = { pageIndex: 'current', pageSize: 'size' };

const { useState, useRef, useImperativeHandle } = React;
const Index: React.FC<ListProps> = ({
  style = {},
  listProps = {},
  listItemProps = {},
  infiniteScrollProps = {},
  emptyProps = {},
  immediate = true,
  renderTitle,
  renderDesc,
  rowKey = 'id',
  requestParams = {},
  classNames,
  request,
  responseResult,
  pagination = {},
  paginationNames = defaultPaginationNames,
  titleDivider = false,
  instanceRef,
}) => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(immediate);
  const reqParams = useRef<Record<string, any>>(requestParams);
  const paginationRef = useRef({ ...defaultPagination, ...pagination });
  const isReload = useRef(false);

  const hasEmpty = () => !isReload.current && !loading && list.length === 0;

  const getResponseRes = (
    data: Record<string, any>,
  ): { records: any[]; total: number } => {
    const { records = [], total = 0 } = data ?? {};

    return { records, total };
  };

  const handleResponse = (res: any): [any[], number] => {
    let responseRes = {};
    if (typeof responseResult === 'function') {
      responseRes = responseResult(res);
    } else {
      const { data, code } = res ?? {};
      if (code === 200) {
        responseRes = data;
      }
    }
    const { records, total } = getResponseRes(responseRes);

    return [records, total];
  };

  const getCustomizePageNames = () => {
    return {
      ...defaultPaginationNames,
      ...paginationNames,
    };
  };

  const autoPagesParams = (params: Record<string, any>) => {
    const { pageIndex, pageSize } = paginationRef.current;
    const { pageIndex: current, pageSize: size } = getCustomizePageNames();
    const newParams = { ...params, [size]: pageSize, [current]: pageIndex };

    return newParams;
  };

  const getRowKey = (record: Record<string, any>, index: number) => {
    if (typeof rowKey === 'string') {
      return record[rowKey];
    } else if (typeof rowKey === 'function') {
      return rowKey(record, index);
    } else {
      return index;
    }
  };

  const getList = async () => {
    try {
      setLoading(true);
      const res = await request(autoPagesParams(reqParams.current));
      const [records, total] = handleResponse(res);

      paginationRef.current['total'] = total;
      isReload.current = false;

      const newData = [...list, ...records];
      let { pageIndex } = paginationRef.current;
      let _hasMore = false;
      if (total > newData.length && records.length > 0) {
        paginationRef.current = {
          ...paginationRef.current,
          pageIndex: ++pageIndex,
        };
        _hasMore = true;
      }

      setLoading(false);
      setList(newData);

      return Promise.resolve(_hasMore);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const renderReactNodeOrFunc = (
    attrProps: any,
    key: string,
    record: Record<string, any>,
  ) => {
    if (!Object.prototype.hasOwnProperty.call(attrProps, key)) {
      return null;
    }
    if (typeof attrProps[key] === 'function') {
      return attrProps[key](record);
    }
    return attrProps[key];
  };

  const onLoadMore = async () => {
    try {
      const _hasMore = await getList();
      setHasMore(_hasMore);
    } catch (error) {
      throw new Error('请求失败');
    }
  };

  useImperativeHandle(instanceRef, () => {
    return {
      reload(params = {}) {
        const newParams = Object.assign(requestParams, params);
        paginationRef.current = { ...defaultPagination, ...pagination };
        reqParams.current = newParams;
        isReload.current = true;
        setList([]);
        setHasMore(true);
      },
    };
  });

  return (
    <div className={classnames('cus-list', classNames)} style={style}>
      <List
        {...listProps}
        style={{
          ...(listProps?.style ?? {}),
          display: list.length > 0 ? 'block' : 'none',
        }}
      >
        {list.map((item, index) => (
          <List.Item
            {...listItemProps}
            className={classnames(
              {
                'adm-list-item__divider': listItemProps.divider,
              },
              {
                'adm-list-item--title-divider': titleDivider,
              },
              listItemProps.className,
            )}
            arrow={listItemProps.arrow ?? <RightOutline />}
            clickable={
              listItemProps.clickable ??
              typeof listItemProps?.onClick === 'function'
            }
            key={getRowKey(item, index)}
            title={renderTitle?.(item)}
            description={renderDesc?.(item)}
            onClick={() => listItemProps?.onClick?.(item)}
            prefix={renderReactNodeOrFunc(listItemProps, 'prefix', item)}
            extra={renderReactNodeOrFunc(listItemProps, 'extra', item)}
          >
            {renderReactNodeOrFunc(listItemProps, 'children', item)}
          </List.Item>
        ))}
      </List>
      <Empty
        style={{
          padding: '64px 0',
          ...(emptyProps?.style ?? {}),
          display: hasEmpty() ? 'block' : 'none',
        }}
        imageStyle={{ width: 128, ...(emptyProps?.imageStyle ?? {}) }}
        description={emptyProps?.description ?? '暂无数据'}
      />
      <InfiniteScroll
        {...infiniteScrollProps}
        loadMore={onLoadMore}
        hasMore={hasMore}
      >
        {infiniteScrollProps?.children}
      </InfiniteScroll>
    </div>
  );
};

export default React.forwardRef<any, ListProps>((props, ref) => {
  return <Index {...props} instanceRef={ref} />;
});
