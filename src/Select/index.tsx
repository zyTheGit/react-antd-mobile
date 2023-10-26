/**
 * auther:zy
 * createTime:2023/06/19
 * lastUpdateTime:2023/09/05
 * 下拉框，可配合hooks中useRequestList 方法获取options
 */

import { Ellipsis, Input } from 'antd-mobile';
import { CloseCircleOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import * as React from 'react';
import PopupSelect from '../PopupSelect';

import './index.less';

interface EllipsisProps {
  /**
   * 文字超过显示几行
   * @default 2
   */
  rows?: number;

  expandText?: string;

  collapseText?: string;
  /**
   * @default end
   */
  direction?: 'start' | 'end' | 'middle';
}

interface SelectProps {
  defaultValue?: string | undefined;
  value?: string | undefined;
  fieldNames?: Record<string, any>;
  title?: string | React.ReactNode;
  /**
   * @default false
   * 是否多选
   */
  multiple?: boolean;
  allowClear?: boolean;
  itemsFilter?: (value: any, index: number, array: any[]) => any;
  onClear?: () => void;
  onChange?: (value: any, record: any) => void;
  /**
   * 点击下拉框弹出选择框之前回调，当回调返回true,阻止弹框打开
   * @returns boolean
   */
  onBeforeVisibleChange?: () => boolean;
  ellipsisProps?: EllipsisProps;
  [k: string]: any;
}

const { useState, useEffect, useLayoutEffect } = React;
const Index: React.FC<SelectProps> = (otherProps = {}) => {
  const [visible, setVisible] = useState(false);
  const [cusValue, setCusValue] = useState<any>(() => {
    if (typeof otherProps?.value !== 'undefined') {
      return otherProps?.value;
    } else {
      return otherProps?.defaultValue;
    }
  });
  const [valueLabel, setValueLabel] = useState<string>('');

  const getCurrentItem = (val: any) => {
    const items = otherProps?.options ?? [];
    const { value: valueFileKey, label: labelFileKey } =
      otherProps?.fieldNames ?? {
        value: 'value',
        label: 'label',
      };
    const chooseEntity = Array.isArray(val)
      ? items.filter((i: any) => val.includes(i[valueFileKey]))
      : items.find((i: any) => i[valueFileKey] === val) ?? {};

    return { chooseEntity, valueFileKey, labelFileKey };
  };

  const getLable = (chooseEntity: any, labelFileKey: any) => {
    const str = Array.isArray(chooseEntity)
      ? chooseEntity
          .reduce((pre, item) => {
            pre.push(item[labelFileKey]);

            return pre;
          }, [])
          .toString()
      : chooseEntity[labelFileKey];
    setValueLabel(str ?? '');
  };

  const getChooseItem = (val: any) => {
    const emptyLabel = otherProps?.multiple
      ? val?.length === 0
      : [undefined, null, ''].includes(val);
    if (emptyLabel) {
      setValueLabel('');
      return;
    }
    const { chooseEntity, labelFileKey } = getCurrentItem(val);
    getLable(chooseEntity, labelFileKey);
  };

  const onCusClear = (event: any) => {
    event.stopPropagation();
    setValueLabel('');
    setCusValue('');
    otherProps?.onChange?.('', null);
    otherProps?.onClear?.();
  };

  const onCusChange = (e: any) => {
    const { chooseEntity } = getCurrentItem(e);
    setCusValue(e ?? '');
    otherProps?.onChange?.(e, chooseEntity);
  };

  const onClick = () => {
    if (otherProps?.disabled) return;
    if (otherProps?.onBeforeVisibleChange?.()) {
      return;
    }
    setVisible(true);
  };

  const onConfirm = () => {
    setVisible(false);
  };

  useLayoutEffect(() => {
    setCusValue(otherProps?.value ?? '');
  }, [otherProps?.value]);

  useEffect(() => {
    getChooseItem(cusValue);
  }, [cusValue, otherProps?.options]);
  return (
    <>
      <div
        className={classNames('cus-select', {
          'cus-select__clear': otherProps?.allowClear,
        })}
        onClick={onClick}
      >
        {valueLabel ? (
          <>
            <Ellipsis
              direction={otherProps?.ellipsisProps?.direction ?? 'end'}
              rows={otherProps?.ellipsisProps?.rows ?? 2}
              content={valueLabel}
              expandText={otherProps?.ellipsisProps?.expandText ?? '展开'}
              collapseText={otherProps?.ellipsisProps?.collapseText ?? '收起'}
              stopPropagationForActionButtons={['click', 'click']}
            />
            {otherProps?.allowClear && (
              <CloseCircleOutline onClick={onCusClear} />
            )}
          </>
        ) : (
          <Input readOnly value={cusValue} />
        )}
      </div>

      <PopupSelect
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        onChange={onCusChange}
        onConfirm={onConfirm}
        items={otherProps?.options ?? []}
        title={otherProps?.title ?? '下拉'}
        multiple={otherProps?.multiple}
        showSearch={otherProps?.showSearch}
        fieldNames={otherProps?.fieldNames}
        itemsFilter={otherProps?.itemsFilter}
        value={cusValue}
      />
    </>
  );
};

export default Index;
