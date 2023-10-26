function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
import PopupSelect from "../PopupSelect";
import "./index.less";
var useState = React.useState,
  useEffect = React.useEffect,
  useLayoutEffect = React.useLayoutEffect;
var Index = function Index() {
  var _otherProps$ellipsisP, _otherProps$ellipsisP2, _otherProps$ellipsisP3, _otherProps$ellipsisP4, _otherProps$ellipsisP5, _otherProps$ellipsisP6, _otherProps$ellipsisP7, _otherProps$ellipsisP8, _otherProps$options2, _otherProps$title;
  var otherProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = useState(function () {
      if (typeof (otherProps === null || otherProps === void 0 ? void 0 : otherProps.value) !== 'undefined') {
        return otherProps === null || otherProps === void 0 ? void 0 : otherProps.value;
      } else {
        return otherProps === null || otherProps === void 0 ? void 0 : otherProps.defaultValue;
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    cusValue = _useState4[0],
    setCusValue = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    valueLabel = _useState6[0],
    setValueLabel = _useState6[1];
  var getCurrentItem = function getCurrentItem(val) {
    var _otherProps$options, _otherProps$fieldName, _items$find;
    var items = (_otherProps$options = otherProps === null || otherProps === void 0 ? void 0 : otherProps.options) !== null && _otherProps$options !== void 0 ? _otherProps$options : [];
    var _ref = (_otherProps$fieldName = otherProps === null || otherProps === void 0 ? void 0 : otherProps.fieldNames) !== null && _otherProps$fieldName !== void 0 ? _otherProps$fieldName : {
        value: 'value',
        label: 'label'
      },
      valueFileKey = _ref.value,
      labelFileKey = _ref.label;
    var chooseEntity = Array.isArray(val) ? items.filter(function (i) {
      return val.includes(i[valueFileKey]);
    }) : (_items$find = items.find(function (i) {
      return i[valueFileKey] === val;
    })) !== null && _items$find !== void 0 ? _items$find : {};
    return {
      chooseEntity: chooseEntity,
      valueFileKey: valueFileKey,
      labelFileKey: labelFileKey
    };
  };
  var getLable = function getLable(chooseEntity, labelFileKey) {
    var str = Array.isArray(chooseEntity) ? chooseEntity.reduce(function (pre, item) {
      pre.push(item[labelFileKey]);
      return pre;
    }, []).toString() : chooseEntity[labelFileKey];
    setValueLabel(str !== null && str !== void 0 ? str : '');
  };
  var getChooseItem = function getChooseItem(val) {
    var emptyLabel = otherProps !== null && otherProps !== void 0 && otherProps.multiple ? (val === null || val === void 0 ? void 0 : val.length) === 0 : [undefined, null, ''].includes(val);
    if (emptyLabel) {
      setValueLabel('');
      return;
    }
    var _getCurrentItem = getCurrentItem(val),
      chooseEntity = _getCurrentItem.chooseEntity,
      labelFileKey = _getCurrentItem.labelFileKey;
    getLable(chooseEntity, labelFileKey);
  };
  var onCusClear = function onCusClear(event) {
    var _otherProps$onChange, _otherProps$onClear;
    event.stopPropagation();
    setValueLabel('');
    setCusValue('');
    otherProps === null || otherProps === void 0 || (_otherProps$onChange = otherProps.onChange) === null || _otherProps$onChange === void 0 || _otherProps$onChange.call(otherProps, '', null);
    otherProps === null || otherProps === void 0 || (_otherProps$onClear = otherProps.onClear) === null || _otherProps$onClear === void 0 || _otherProps$onClear.call(otherProps);
  };
  var onCusChange = function onCusChange(e) {
    var _otherProps$onChange2;
    var _getCurrentItem2 = getCurrentItem(e),
      chooseEntity = _getCurrentItem2.chooseEntity;
    setCusValue(e !== null && e !== void 0 ? e : '');
    otherProps === null || otherProps === void 0 || (_otherProps$onChange2 = otherProps.onChange) === null || _otherProps$onChange2 === void 0 || _otherProps$onChange2.call(otherProps, e, chooseEntity);
  };
  var onClick = function onClick() {
    var _otherProps$onBeforeV;
    if (otherProps !== null && otherProps !== void 0 && otherProps.disabled) return;
    if (otherProps !== null && otherProps !== void 0 && (_otherProps$onBeforeV = otherProps.onBeforeVisibleChange) !== null && _otherProps$onBeforeV !== void 0 && _otherProps$onBeforeV.call(otherProps)) {
      return;
    }
    setVisible(true);
  };
  var onConfirm = function onConfirm() {
    setVisible(false);
  };
  useLayoutEffect(function () {
    var _otherProps$value;
    setCusValue((_otherProps$value = otherProps === null || otherProps === void 0 ? void 0 : otherProps.value) !== null && _otherProps$value !== void 0 ? _otherProps$value : '');
  }, [otherProps === null || otherProps === void 0 ? void 0 : otherProps.value]);
  useEffect(function () {
    getChooseItem(cusValue);
  }, [cusValue, otherProps === null || otherProps === void 0 ? void 0 : otherProps.options]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classNames('cus-select', {
      'cus-select__clear': otherProps === null || otherProps === void 0 ? void 0 : otherProps.allowClear
    }),
    onClick: onClick
  }, valueLabel ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ellipsis, {
    direction: (_otherProps$ellipsisP = otherProps === null || otherProps === void 0 || (_otherProps$ellipsisP2 = otherProps.ellipsisProps) === null || _otherProps$ellipsisP2 === void 0 ? void 0 : _otherProps$ellipsisP2.direction) !== null && _otherProps$ellipsisP !== void 0 ? _otherProps$ellipsisP : 'end',
    rows: (_otherProps$ellipsisP3 = otherProps === null || otherProps === void 0 || (_otherProps$ellipsisP4 = otherProps.ellipsisProps) === null || _otherProps$ellipsisP4 === void 0 ? void 0 : _otherProps$ellipsisP4.rows) !== null && _otherProps$ellipsisP3 !== void 0 ? _otherProps$ellipsisP3 : 2,
    content: valueLabel,
    expandText: (_otherProps$ellipsisP5 = otherProps === null || otherProps === void 0 || (_otherProps$ellipsisP6 = otherProps.ellipsisProps) === null || _otherProps$ellipsisP6 === void 0 ? void 0 : _otherProps$ellipsisP6.expandText) !== null && _otherProps$ellipsisP5 !== void 0 ? _otherProps$ellipsisP5 : '展开',
    collapseText: (_otherProps$ellipsisP7 = otherProps === null || otherProps === void 0 || (_otherProps$ellipsisP8 = otherProps.ellipsisProps) === null || _otherProps$ellipsisP8 === void 0 ? void 0 : _otherProps$ellipsisP8.collapseText) !== null && _otherProps$ellipsisP7 !== void 0 ? _otherProps$ellipsisP7 : '收起',
    stopPropagationForActionButtons: ['click', 'click']
  }), (otherProps === null || otherProps === void 0 ? void 0 : otherProps.allowClear) && /*#__PURE__*/React.createElement(CloseCircleOutline, {
    onClick: onCusClear
  })) : /*#__PURE__*/React.createElement(Input, {
    readOnly: true,
    value: cusValue
  })), /*#__PURE__*/React.createElement(PopupSelect, {
    visible: visible,
    onMaskClick: function onMaskClick() {
      setVisible(false);
    },
    onClose: function onClose() {
      setVisible(false);
    },
    onChange: onCusChange,
    onConfirm: onConfirm,
    items: (_otherProps$options2 = otherProps === null || otherProps === void 0 ? void 0 : otherProps.options) !== null && _otherProps$options2 !== void 0 ? _otherProps$options2 : [],
    title: (_otherProps$title = otherProps === null || otherProps === void 0 ? void 0 : otherProps.title) !== null && _otherProps$title !== void 0 ? _otherProps$title : '下拉',
    multiple: otherProps === null || otherProps === void 0 ? void 0 : otherProps.multiple,
    showSearch: otherProps === null || otherProps === void 0 ? void 0 : otherProps.showSearch,
    fieldNames: otherProps === null || otherProps === void 0 ? void 0 : otherProps.fieldNames,
    itemsFilter: otherProps === null || otherProps === void 0 ? void 0 : otherProps.itemsFilter,
    value: cusValue
  }));
};
export default Index;