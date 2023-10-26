var _excluded = ["title", "searchProps", "onChange", "showCloseButton", "items", "multiple", "fieldNames", "showSearch", "itemsFilter", "disabled"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import "./index.less";
var useMemo = React.useMemo,
  useState = React.useState,
  useLayoutEffect = React.useLayoutEffect,
  useEffect = React.useEffect;
var Index = function Index(_ref) {
  var _otherProps$activeIco;
  var title = _ref.title,
    searchProps = _ref.searchProps,
    onChange = _ref.onChange,
    _ref$showCloseButton = _ref.showCloseButton,
    showCloseButton = _ref$showCloseButton === void 0 ? true : _ref$showCloseButton,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    _ref$fieldNames = _ref.fieldNames,
    fieldNames = _ref$fieldNames === void 0 ? {
      label: 'label',
      value: 'value'
    } : _ref$fieldNames,
    _ref$showSearch = _ref.showSearch,
    showSearch = _ref$showSearch === void 0 ? false : _ref$showSearch,
    itemsFilter = _ref.itemsFilter,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var prevValue = React.useRef();
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchText = _useState4[0],
    setSearchText = _useState4[1];
  var filteredItems = useMemo(function () {
    var newItems = typeof itemsFilter === 'function' ? items.filter(itemsFilter) : _toConsumableArray(items);
    if (searchText) {
      var label = fieldNames.label;
      return newItems.filter(function (item) {
        var _item$label, _item$label$includes;
        return item === null || item === void 0 || (_item$label = item[label]) === null || _item$label === void 0 || (_item$label$includes = _item$label.includes) === null || _item$label$includes === void 0 ? void 0 : _item$label$includes.call(_item$label, searchText);
      });
    } else {
      return newItems;
    }
  }, [items, searchText, otherProps.visible]);
  var hasEmpty = function hasEmpty() {
    return filteredItems.length === 0;
  };
  var checkValue = function checkValue(val) {
    var _val$toString;
    return (_val$toString = val === null || val === void 0 ? void 0 : val.toString()) !== null && _val$toString !== void 0 ? _val$toString : '';
  };
  var onSearch = function onSearch(val) {
    setSearchText(val);
  };
  var onCusChange = function onCusChange(val) {
    if (!multiple) {
      if ((val === null || val === void 0 ? void 0 : val.length) === 0) return;
      onChange === null || onChange === void 0 || onChange(val[0]);
      otherProps === null || otherProps === void 0 || otherProps.onClose();
    }
    setSelected(val);
  };
  var onCancel = function onCancel() {
    var _otherProps$value;
    var val = (_otherProps$value = otherProps === null || otherProps === void 0 ? void 0 : otherProps.value) !== null && _otherProps$value !== void 0 ? _otherProps$value : '';
    setSelected(Array.isArray(val) ? val : [val]);
    otherProps === null || otherProps === void 0 || otherProps.onClose();
  };
  var onConfirm = function onConfirm() {
    var _otherProps$onConfirm;
    var newVal = multiple ? selected : selected[0];
    onChange === null || onChange === void 0 || onChange(newVal);
    otherProps === null || otherProps === void 0 || (_otherProps$onConfirm = otherProps.onConfirm) === null || _otherProps$onConfirm === void 0 || _otherProps$onConfirm.call(otherProps, newVal);
  };
  useLayoutEffect(function () {
    if (!otherProps.visible) {
      prevValue.current = null;
      setSearchText('');
      setSelected([]);
      return;
    }
  }, [otherProps.visible]);
  useEffect(function () {
    if (checkValue(otherProps.value) !== checkValue(prevValue.current)) {
      var val = otherProps.value;
      setSelected(Array.isArray(val) ? val : [val]);
      prevValue.current = val;
    }
  }, [otherProps.value, otherProps.visible]);
  return /*#__PURE__*/React.createElement(Popup, _extends({
    className: "cus-popup-select"
  }, otherProps, {
    showCloseButton: showCloseButton,
    bodyStyle: {
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cus-popup-select-box"
  }, /*#__PURE__*/React.createElement("header", {
    className: "cus-popup-select__header"
  }, title), showSearch && /*#__PURE__*/React.createElement(SearchBar, _extends({
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
  }, searchProps, {
    className: "cus-popup-select__search",
    onSearch: onSearch
  }))), /*#__PURE__*/React.createElement("div", {
    className: classNames(['cus-popup-select__container', "cus-popup-select__container--".concat(showSearch ? 'search' : '').concat(!disabled && multiple ? 'multiple' : '')])
  }, /*#__PURE__*/React.createElement(CheckList, {
    value: selected,
    onChange: onCusChange,
    multiple: multiple,
    style: {
      display: hasEmpty() ? 'none' : 'block'
    },
    disabled: disabled,
    activeIcon: (_otherProps$activeIco = otherProps === null || otherProps === void 0 ? void 0 : otherProps.activeIcon) !== null && _otherProps$activeIco !== void 0 ? _otherProps$activeIco : /*#__PURE__*/React.createElement(CheckCircleOutline, null)
  }, filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.map(function (item) {
    return /*#__PURE__*/React.createElement(CheckList.Item, {
      key: item[fieldNames.value],
      value: item[fieldNames.value],
      disabled: item.disabled
    }, item[fieldNames.label]);
  })), /*#__PURE__*/React.createElement(Empty, {
    style: {
      padding: '64px 0',
      display: hasEmpty() ? 'block' : 'none'
    },
    imageStyle: {
      width: 128
    },
    description: "\u6682\u65E0\u6570\u636E"
  })), /*#__PURE__*/React.createElement("footer", {
    className: classNames({
      'cus-popup-select__footer': true,
      'cus-popup-select__footer--multiple': multiple,
      'cus-popup-select__footer--disabled': disabled
    })
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel,
    shape: "rounded"
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    onClick: onConfirm,
    shape: "rounded"
  }, "\u786E\u8BA4")));
};
export default Index;