import * as React from 'react';
import "./index.less";
var useRef = React.useRef,
  useEffect = React.useEffect;
var FloatSphere = function FloatSphere(_ref) {
  var time = _ref.time;
  var floatRef = useRef(null);
  var offsetX = 0,
    offsetY = 0,
    isTouchStart = false;
  var getElPosition = function getElPosition() {
    var list = ['left', 'top', 'width', 'height'];
    var defaultObj = list.reduce(function (pre, item) {
      pre[item] = 0;
      return pre;
    }, {});
    if (!floatRef.current) return defaultObj;
    var position = getComputedStyle(floatRef.current, null);
    return Object.keys(defaultObj).reduce(function (pre, key) {
      pre[key] = parseInt(position[key].replace('px'));
      return pre;
    }, {});
  };
  var setElPosition = function setElPosition(x, y) {
    if (!floatRef.current) return;
    var dom = floatRef.current;
    dom.style.left = "".concat(x, "px");
    dom.style.top = "".concat(y, "px");
  };
  var eventList = [{
    name: 'touchstart',
    handler: function handler(e) {
      e.preventDefault();
      isTouchStart = true;
      var x = e.touches[0].clientX,
        y = e.touches[0].clientY,
        position = getElPosition();
      offsetX = x - position.left;
      offsetY = y - position.top;
    }
  }, {
    name: 'touchmove',
    handler: function handler(e) {
      e.preventDefault();
      if (isTouchStart) {
        var x = e.touches[0].clientX,
          y = e.touches[0].clientY,
          position = getElPosition(),
          maxLeft = window.innerWidth - position.width,
          maxTop = window.innerHeight - position.height;
        var left = x - offsetX,
          top = y - offsetY;
        if (left <= 0) left = 0;
        if (left > maxLeft) left = maxLeft;
        if (top <= 47) top = 47;
        if (top > maxTop) top = maxTop;
        setElPosition(left, top);
      }
    }
  }, {
    name: 'touchend',
    handler: function handler(e) {
      e.preventDefault();
      isTouchStart = false;
    }
  }];
  var eventMount = function eventMount(eventName) {
    eventList.forEach(function (_ref2) {
      var _floatRef$current, _floatRef$current$eve;
      var name = _ref2.name,
        handler = _ref2.handler;
      return (_floatRef$current = floatRef.current) === null || _floatRef$current === void 0 || (_floatRef$current$eve = _floatRef$current[eventName]) === null || _floatRef$current$eve === void 0 ? void 0 : _floatRef$current$eve.call(_floatRef$current, name, handler);
    });
  };
  var initEvent = function initEvent() {
    eventMount('addEventListener');
  };
  useEffect(function () {
    initEvent();
    return function () {
      return eventMount('removeEventLister');
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "float-sphere",
    ref: floatRef
  }, /*#__PURE__*/React.createElement("span", null, "\u5269\u4F59\u65F6\u95F4"), /*#__PURE__*/React.createElement("span", null, time));
};
export default FloatSphere;