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
/**
 * auther:zy
 * createTime:2023/08/11
 * lastUpdateTime:2023/08/11
 * 层叠柱状图
 */

import { DownOutline, UpOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import * as React from 'react';
import { initTooltip } from "./unit";
import "./index.less";
var useRef = React.useRef,
  useState = React.useState,
  useEffect = React.useEffect,
  useMemo = React.useMemo;
var Index = function Index(_ref) {
  var className = _ref.className,
    series = _ref.series,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? [] : _ref$colors,
    _ref$xAxis = _ref.xAxis,
    xAxis = _ref$xAxis === void 0 ? [] : _ref$xAxis,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$valueStyle = _ref.valueStyle,
    valueStyle = _ref$valueStyle === void 0 ? {} : _ref$valueStyle,
    tooltipFormater = _ref.tooltipFormater,
    _ref$collapseLength = _ref.collapseLength,
    collapseLength = _ref$collapseLength === void 0 ? 5 : _ref$collapseLength,
    _ref$showValue = _ref.showValue,
    showValue = _ref$showValue === void 0 ? true : _ref$showValue,
    _ref$defaultExpanded = _ref.defaultExpanded,
    defaultExpanded = _ref$defaultExpanded === void 0 ? false : _ref$defaultExpanded;
  var stackChartRef = useRef(null);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _useState3 = useState(defaultExpanded),
    _useState4 = _slicedToArray(_useState3, 2),
    collapse = _useState4[0],
    setCollapse = _useState4[1];
  /**
   * 元素放大倍数
   */
  var _useState5 = useState(2),
    _useState6 = _slicedToArray(_useState5, 2),
    enlargeFactor = _useState6[0],
    setEnlargeFactor = _useState6[1];
  var _initTooltip = initTooltip(stackChartRef.current, tooltipFormater),
    registerMethods = _initTooltip.registerMethods,
    unregisterMethods = _initTooltip.unregisterMethods;

  /**
   * 判断当前data中是否全部为0
   */
  var getCurrentDataTotal = function getCurrentDataTotal(data) {
    return data.reduce(function (pre, num) {
      // eslint-disable-next-line no-param-reassign
      pre += num;
      return pre;
    }, 0);
  };
  var setCurrentItem = function setCurrentItem(name, data, colors, xAxis) {
    var curItem = {
      name: name,
      data: data,
      colors: colors,
      xAxis: xAxis
    };
    return JSON.stringify(curItem);
  };
  var newSeries = useMemo(function () {
    var _series = _toConsumableArray(list);
    return collapse ? _series : _series.slice(0, collapseLength);
  }, [list, collapse]);
  useEffect(function () {
    var totalArr = [];
    var _series = _toConsumableArray(series).reduce(function (pre, item) {
      var _ref2 = item,
        data = _ref2.data;
      var total = getCurrentDataTotal(data);
      if (total > 0) {
        pre.push(item);
        totalArr.push(total);
      }
      return pre;
    }, []);
    if (stackChartRef.current) {
      var _stackChartRef$curren = stackChartRef.current.getBoundingClientRect(),
        width = _stackChartRef$curren.width;
      var _maxTotal = totalArr.length === 0 ? 0 : Math.max.apply(Math, totalArr);
      var __enlargeFactor = _maxTotal === 0 ? 1 : width / _maxTotal;
      setEnlargeFactor(__enlargeFactor);
      registerMethods();
    }
    setList(_series);
    return function () {
      unregisterMethods();
    };
  }, [series]);
  return /*#__PURE__*/React.createElement("div", {
    ref: stackChartRef,
    className: classNames('cus-stack-chart', className),
    style: style
  }, newSeries === null || newSeries === void 0 ? void 0 : newSeries.map(function (_ref3) {
    var name = _ref3.name,
      data = _ref3.data,
      cols = _ref3.colors;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      className: "cus-stack-chart__title"
    }, name), /*#__PURE__*/React.createElement("div", {
      className: "cus-stack-chart__progress",
      "data-item": setCurrentItem(name, data, (cols === null || cols === void 0 ? void 0 : cols.length) > 0 ? cols : colors, xAxis)
    }, data === null || data === void 0 ? void 0 : data.map(function (num, index) {
      var _cols$index;
      return num !== 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: (_cols$index = cols === null || cols === void 0 ? void 0 : cols[index]) !== null && _cols$index !== void 0 ? _cols$index : colors[index],
          width: "".concat(num * enlargeFactor, "px")
        },
        key: index
      }, showValue && /*#__PURE__*/React.createElement("span", {
        style: valueStyle
      }, num));
    })));
  }), list.length > collapseLength && /*#__PURE__*/React.createElement("div", {
    className: "cus-stack-chart__footer",
    onClick: function onClick() {
      return setCollapse(!collapse);
    }
  }, collapse ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u6536\u8D77", /*#__PURE__*/React.createElement(UpOutline, null)) : /*#__PURE__*/React.createElement(React.Fragment, null, "\u5C55\u5F00", /*#__PURE__*/React.createElement(DownOutline, null))));
};
export default Index;