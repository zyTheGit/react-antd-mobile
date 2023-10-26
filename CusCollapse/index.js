function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { DownOutline, RightOutline, UpOutline } from 'antd-mobile-icons';
import * as React from 'react';
import { Spin } from "../index";
import "./index.less";
var useState = React.useState;
var Index = function Index(_ref) {
  var _ref$list = _ref.list,
    list = _ref$list === void 0 ? [] : _ref$list,
    onCell = _ref.onCell,
    loading = _ref.loading,
    accordion = _ref.accordion,
    itemRender = _ref.itemRender,
    itemLeftRender = _ref.itemLeftRender,
    itemRightRender = _ref.itemRightRender;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    activeKeys = _useState2[0],
    setActiveKeys = _useState2[1];
  var handleClick = function handleClick(_, index) {
    var obj = _objectSpread({}, activeKeys);
    if (accordion) {
      obj = Object.keys(obj).reduce(function (pre, key) {
        if (key !== index) pre[key] = false;
        return pre;
      }, obj);
    }
    if (!Object.prototype.hasOwnProperty.call(obj, index)) {
      obj[index] = true;
    } else {
      obj[index] = !obj[index];
    }
    setActiveKeys(obj);

    // if (accordion && list.length - 1 !== index) {
    //   e.currentTarget?.scrollIntoView?.({
    //     behavior: 'smooth',
    //     block: 'start',
    //     inline: 'start',
    //   });
    // }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "cus-intelligent-collapse"
  }, /*#__PURE__*/React.createElement(Spin, {
    spinning: loading
  }, list.map(function (_ref2, index) {
    var title = _ref2.title,
      arr = _ref2.list,
      value = _ref2.value,
      unit = _ref2.unit,
      style = _ref2.style,
      prefix = _ref2.prefix;
    return /*#__PURE__*/React.createElement("section", {
      className: "cus-intelligent-collapse-item",
      key: index
    }, /*#__PURE__*/React.createElement("header", {
      className: "cus-intelligent-collapse-item__title",
      onClick: function onClick(e) {
        return handleClick(e, index);
      },
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "cus-intelligent-collapse-item__title--left"
    }, prefix, title), /*#__PURE__*/React.createElement("div", {
      className: "cus-intelligent-collapse-item__title--right"
    }, /*#__PURE__*/React.createElement("b", null, value), " ", /*#__PURE__*/React.createElement("em", null, unit), activeKeys[index] ? /*#__PURE__*/React.createElement(UpOutline, null) : /*#__PURE__*/React.createElement(DownOutline, null))), /*#__PURE__*/React.createElement("ul", {
      className: "cus-intelligent-collapse-item__content",
      style: {
        height: activeKeys[index] ? 'auto' : 0
      }
    }, arr.map(function (item, index) {
      var _itemRender, _itemLeftRender, _itemRightRender;
      var label = item.label,
        value = item.value,
        unit = item.unit;
      return /*#__PURE__*/React.createElement("li", {
        key: index,
        onClick: function onClick() {
          return onCell === null || onCell === void 0 ? void 0 : onCell(item);
        }
      }, (_itemRender = itemRender === null || itemRender === void 0 ? void 0 : itemRender(item)) !== null && _itemRender !== void 0 ? _itemRender : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "cus-intelligent-collapse-item__content-left"
      }, /*#__PURE__*/React.createElement("div", {
        className: "cus-intelligent-collapse-item__content-left--label"
      }, (_itemLeftRender = itemLeftRender === null || itemLeftRender === void 0 ? void 0 : itemLeftRender(item)) !== null && _itemLeftRender !== void 0 ? _itemLeftRender : label), (_itemRightRender = itemRightRender === null || itemRightRender === void 0 ? void 0 : itemRightRender(item)) !== null && _itemRightRender !== void 0 ? _itemRightRender : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "cus-intelligent-collapse-item__content--value"
      }, value), unit && /*#__PURE__*/React.createElement("span", {
        className: "cus-intelligent-collapse-item__content--unit"
      }, unit))), /*#__PURE__*/React.createElement(RightOutline, null)));
    })));
  })));
};
export default Index;