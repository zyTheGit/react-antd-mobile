var _excluded = ["instanceRef", "title", "allowClear", "onClear", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { DatePicker } from 'antd-mobile';
import React from 'react';
import "./index.less";
var Index = function Index(_ref) {
  var instanceRef = _ref.instanceRef,
    title = _ref.title,
    allowClear = _ref.allowClear,
    onClear = _ref.onClear,
    children = _ref.children,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var onCusClear = function onCusClear() {
    onClear === null || onClear === void 0 || onClear();
  };
  var renderTitle = function renderTitle() {
    return allowClear ? /*#__PURE__*/React.createElement("div", {
      className: "cus-date-picker__title"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cus-date-picker__title--center"
    }, title), /*#__PURE__*/React.createElement("span", {
      className: "cus-date-picker__title--clear",
      onClick: onCusClear
    }, "\u6E05\u7A7A")) : title;
  };
  return /*#__PURE__*/React.createElement(DatePicker, _extends({
    title: renderTitle(),
    ref: instanceRef
  }, otherProps), children);
};
export default /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Index, _extends({}, props, {
    instanceRef: ref
  }));
});