function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
import "./index.less";
var defaultPagination = {
  pageIndex: 1,
  pageSize: 10,
  total: 0
};
var defaultPaginationNames = {
  pageIndex: 'current',
  pageSize: 'size'
};
var useState = React.useState,
  useRef = React.useRef,
  useImperativeHandle = React.useImperativeHandle;
var Index = function Index(_ref) {
  var _listProps$style, _emptyProps$style, _emptyProps$imageStyl, _emptyProps$descripti;
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$listProps = _ref.listProps,
    listProps = _ref$listProps === void 0 ? {} : _ref$listProps,
    _ref$listItemProps = _ref.listItemProps,
    listItemProps = _ref$listItemProps === void 0 ? {} : _ref$listItemProps,
    _ref$infiniteScrollPr = _ref.infiniteScrollProps,
    infiniteScrollProps = _ref$infiniteScrollPr === void 0 ? {} : _ref$infiniteScrollPr,
    _ref$emptyProps = _ref.emptyProps,
    emptyProps = _ref$emptyProps === void 0 ? {} : _ref$emptyProps,
    _ref$immediate = _ref.immediate,
    immediate = _ref$immediate === void 0 ? true : _ref$immediate,
    renderTitle = _ref.renderTitle,
    renderDesc = _ref.renderDesc,
    _ref$rowKey = _ref.rowKey,
    rowKey = _ref$rowKey === void 0 ? 'id' : _ref$rowKey,
    _ref$requestParams = _ref.requestParams,
    requestParams = _ref$requestParams === void 0 ? {} : _ref$requestParams,
    classNames = _ref.classNames,
    request = _ref.request,
    responseResult = _ref.responseResult,
    _ref$pagination = _ref.pagination,
    pagination = _ref$pagination === void 0 ? {} : _ref$pagination,
    _ref$paginationNames = _ref.paginationNames,
    paginationNames = _ref$paginationNames === void 0 ? defaultPaginationNames : _ref$paginationNames,
    _ref$titleDivider = _ref.titleDivider,
    titleDivider = _ref$titleDivider === void 0 ? false : _ref$titleDivider,
    instanceRef = _ref.instanceRef;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = useState(immediate),
    _useState6 = _slicedToArray(_useState5, 2),
    hasMore = _useState6[0],
    setHasMore = _useState6[1];
  var reqParams = useRef(requestParams);
  var paginationRef = useRef(_objectSpread(_objectSpread({}, defaultPagination), pagination));
  var isReload = useRef(false);
  var hasEmpty = function hasEmpty() {
    return !isReload.current && !loading && list.length === 0;
  };
  var getResponseRes = function getResponseRes(data) {
    var _ref2 = data !== null && data !== void 0 ? data : {},
      _ref2$records = _ref2.records,
      records = _ref2$records === void 0 ? [] : _ref2$records,
      _ref2$total = _ref2.total,
      total = _ref2$total === void 0 ? 0 : _ref2$total;
    return {
      records: records,
      total: total
    };
  };
  var handleResponse = function handleResponse(res) {
    var responseRes = {};
    if (typeof responseResult === 'function') {
      responseRes = responseResult(res);
    } else {
      var _ref3 = res !== null && res !== void 0 ? res : {},
        data = _ref3.data,
        code = _ref3.code;
      if (code === 200) {
        responseRes = data;
      }
    }
    var _getResponseRes = getResponseRes(responseRes),
      records = _getResponseRes.records,
      total = _getResponseRes.total;
    return [records, total];
  };
  var getCustomizePageNames = function getCustomizePageNames() {
    return _objectSpread(_objectSpread({}, defaultPaginationNames), paginationNames);
  };
  var autoPagesParams = function autoPagesParams(params) {
    var _objectSpread2;
    var _paginationRef$curren = paginationRef.current,
      pageIndex = _paginationRef$curren.pageIndex,
      pageSize = _paginationRef$curren.pageSize;
    var _getCustomizePageName = getCustomizePageNames(),
      current = _getCustomizePageName.pageIndex,
      size = _getCustomizePageName.pageSize;
    var newParams = _objectSpread(_objectSpread({}, params), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, size, pageSize), _defineProperty(_objectSpread2, current, pageIndex), _objectSpread2));
    return newParams;
  };
  var getRowKey = function getRowKey(record, index) {
    if (typeof rowKey === 'string') {
      return record[rowKey];
    } else if (typeof rowKey === 'function') {
      return rowKey(record, index);
    } else {
      return index;
    }
  };
  var getList = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, _handleResponse, _handleResponse2, records, total, newData, pageIndex, _hasMore;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            _context.next = 4;
            return request(autoPagesParams(reqParams.current));
          case 4:
            res = _context.sent;
            _handleResponse = handleResponse(res), _handleResponse2 = _slicedToArray(_handleResponse, 2), records = _handleResponse2[0], total = _handleResponse2[1];
            paginationRef.current['total'] = total;
            isReload.current = false;
            newData = [].concat(_toConsumableArray(list), _toConsumableArray(records));
            pageIndex = paginationRef.current.pageIndex;
            _hasMore = false;
            if (total > newData.length && records.length > 0) {
              paginationRef.current = _objectSpread(_objectSpread({}, paginationRef.current), {}, {
                pageIndex: ++pageIndex
              });
              _hasMore = true;
            }
            setLoading(false);
            setList(newData);
            return _context.abrupt("return", Promise.resolve(_hasMore));
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", Promise.reject(_context.t0));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 17]]);
    }));
    return function getList() {
      return _ref4.apply(this, arguments);
    };
  }();
  var renderReactNodeOrFunc = function renderReactNodeOrFunc(attrProps, key, record) {
    if (!Object.prototype.hasOwnProperty.call(attrProps, key)) {
      return null;
    }
    if (typeof attrProps[key] === 'function') {
      return attrProps[key](record);
    }
    return attrProps[key];
  };
  var onLoadMore = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _hasMore;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getList();
          case 3:
            _hasMore = _context2.sent;
            setHasMore(_hasMore);
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw new Error('请求失败');
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function onLoadMore() {
      return _ref5.apply(this, arguments);
    };
  }();
  useImperativeHandle(instanceRef, function () {
    return {
      reload: function reload() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var newParams = Object.assign(requestParams, params);
        paginationRef.current = _objectSpread(_objectSpread({}, defaultPagination), pagination);
        reqParams.current = newParams;
        isReload.current = true;
        setList([]);
        setHasMore(true);
      }
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('cus-list', classNames),
    style: style
  }, /*#__PURE__*/React.createElement(List, _extends({}, listProps, {
    style: _objectSpread(_objectSpread({}, (_listProps$style = listProps === null || listProps === void 0 ? void 0 : listProps.style) !== null && _listProps$style !== void 0 ? _listProps$style : {}), {}, {
      display: list.length > 0 ? 'block' : 'none'
    })
  }), list.map(function (item, index) {
    var _listItemProps$arrow, _listItemProps$clicka;
    return /*#__PURE__*/React.createElement(List.Item, _extends({}, listItemProps, {
      className: classnames({
        'adm-list-item__divider': listItemProps.divider
      }, {
        'adm-list-item--title-divider': titleDivider
      }, listItemProps.className),
      arrow: (_listItemProps$arrow = listItemProps.arrow) !== null && _listItemProps$arrow !== void 0 ? _listItemProps$arrow : /*#__PURE__*/React.createElement(RightOutline, null),
      clickable: (_listItemProps$clicka = listItemProps.clickable) !== null && _listItemProps$clicka !== void 0 ? _listItemProps$clicka : typeof (listItemProps === null || listItemProps === void 0 ? void 0 : listItemProps.onClick) === 'function',
      key: getRowKey(item, index),
      title: renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle(item),
      description: renderDesc === null || renderDesc === void 0 ? void 0 : renderDesc(item),
      onClick: function onClick() {
        var _listItemProps$onClic;
        return listItemProps === null || listItemProps === void 0 || (_listItemProps$onClic = listItemProps.onClick) === null || _listItemProps$onClic === void 0 ? void 0 : _listItemProps$onClic.call(listItemProps, item);
      },
      prefix: renderReactNodeOrFunc(listItemProps, 'prefix', item),
      extra: renderReactNodeOrFunc(listItemProps, 'extra', item)
    }), renderReactNodeOrFunc(listItemProps, 'children', item));
  })), /*#__PURE__*/React.createElement(Empty, {
    style: _objectSpread(_objectSpread({
      padding: '64px 0'
    }, (_emptyProps$style = emptyProps === null || emptyProps === void 0 ? void 0 : emptyProps.style) !== null && _emptyProps$style !== void 0 ? _emptyProps$style : {}), {}, {
      display: hasEmpty() ? 'block' : 'none'
    }),
    imageStyle: _objectSpread({
      width: 128
    }, (_emptyProps$imageStyl = emptyProps === null || emptyProps === void 0 ? void 0 : emptyProps.imageStyle) !== null && _emptyProps$imageStyl !== void 0 ? _emptyProps$imageStyl : {}),
    description: (_emptyProps$descripti = emptyProps === null || emptyProps === void 0 ? void 0 : emptyProps.description) !== null && _emptyProps$descripti !== void 0 ? _emptyProps$descripti : '暂无数据'
  }), /*#__PURE__*/React.createElement(InfiniteScroll, _extends({}, infiniteScrollProps, {
    loadMore: onLoadMore,
    hasMore: hasMore
  }), infiniteScrollProps === null || infiniteScrollProps === void 0 ? void 0 : infiniteScrollProps.children));
};
export default /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Index, _extends({}, props, {
    instanceRef: ref
  }));
});