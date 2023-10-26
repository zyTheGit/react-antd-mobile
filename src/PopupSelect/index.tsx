/**
 * auther:zy
 * createTime:2023/06/19
 * lastUpdateTime:2023/07/24
 * 下拉选择弹框
 */

import { Button, CheckList, Empty, Popup, SearchBar } from 'antd-mobile';
import { CheckCircleOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import * as React from 'react';

import type { PopupSelectProps, SelectorValue } from './interface';

import './index.less';

const { useMemo, useState, useLayoutEffect, useEffect } = React;
const Index: React.FC<PopupSelectProps> = ({
  title,
  searchProps,
  onChange,
  showCloseButton = true,
  items = [],
  multiple = false,
  fieldNames = { label: 'label', value: 'value' },
  showSearch = false,
  itemsFilter,
  disabled = false,
  ...otherProps
}) => {
  const prevValue = React.useRef<SelectorValue | null>();
  const [selected, setSelected] = useState<SelectorValue[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const filteredItems = useMemo(() => {
    const newItems =
      typeof itemsFilter === 'function'
        ? items.filter(itemsFilter)
        : [...items];

    if (searchText) {
      const label = fieldNames.label;
      return newItems.filter((item) => item?.[label]?.includes?.(searchText));
    } else {
      return newItems;
    }
  }, [items, searchText, otherProps.visible]);

  const hasEmpty = () => filteredItems.length === 0;

  const checkValue = (val: SelectorValue | null | undefined) => {
    return val?.toString() ?? '';
  };

  const onSearch = (val: string) => {
    setSearchText(val);
  };

  const onCusChange = (val: any) => {
    if (!multiple) {
      if (val?.length === 0) return;
      onChange?.(val[0]);
      otherProps?.onClose();
    }
    setSelected(val);
  };

  const onCancel = () => {
    const val = otherProps?.value ?? '';
    setSelected(Array.isArray(val) ? val : [val]);
    otherProps?.onClose();
  };

  const onConfirm = () => {
    const newVal = multiple ? selected : selected[0];
    onChange?.(newVal);
    otherProps?.onConfirm?.(newVal);
  };

  useLayoutEffect(() => {
    if (!otherProps.visible) {
      prevValue.current = null;
      setSearchText('');
      setSelected([]);
      return;
    }
  }, [otherProps.visible]);

  useEffect(() => {
    if (checkValue(otherProps.value) !== checkValue(prevValue.current)) {
      const val = otherProps.value;
      setSelected(Array.isArray(val) ? val : [val]);
      prevValue.current = val;
    }
  }, [otherProps.value, otherProps.visible]);

  return (
    <Popup
      className="cus-popup-select"
      {...otherProps}
      showCloseButton={showCloseButton}
      bodyStyle={{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      }}
    >
      <div className="cus-popup-select-box">
        <header className="cus-popup-select__header">{title}</header>
        {showSearch && (
          <SearchBar
            placeholder="请输入内容"
            {...searchProps}
            className="cus-popup-select__search"
            onSearch={onSearch}
          />
        )}
      </div>

      <div
        className={classNames([
          'cus-popup-select__container',
          `cus-popup-select__container--${showSearch ? 'search' : ''}${
            !disabled && multiple ? 'multiple' : ''
          }`,
        ])}
      >
        <CheckList
          value={selected}
          onChange={onCusChange}
          multiple={multiple}
          style={{
            display: hasEmpty() ? 'none' : 'block',
          }}
          disabled={disabled}
          activeIcon={otherProps?.activeIcon ?? <CheckCircleOutline />}
        >
          {filteredItems?.map((item) => (
            <CheckList.Item
              key={item[fieldNames.value]}
              value={item[fieldNames.value]}
              disabled={item.disabled}
            >
              {item[fieldNames.label]}
            </CheckList.Item>
          ))}
        </CheckList>

        <Empty
          style={{ padding: '64px 0', display: hasEmpty() ? 'block' : 'none' }}
          imageStyle={{ width: 128 }}
          description="暂无数据"
        />
      </div>

      <footer
        className={classNames({
          'cus-popup-select__footer': true,
          'cus-popup-select__footer--multiple': multiple,
          'cus-popup-select__footer--disabled': disabled,
        })}
      >
        <Button onClick={onCancel} shape="rounded">
          取消
        </Button>
        <Button color="primary" onClick={onConfirm} shape="rounded">
          确认
        </Button>
      </footer>
    </Popup>
  );
};

export default Index;
