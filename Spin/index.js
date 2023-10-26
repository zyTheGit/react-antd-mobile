import { DotLoading, Mask } from 'antd-mobile';
import React from 'react';
import "./index.less";
var Index = function Index(_ref) {
  var spinning = _ref.spinning,
    _ref$loadingText = _ref.loadingText,
    loadingText = _ref$loadingText === void 0 ? '加载中' : _ref$loadingText,
    _ref$loadingTextStyle = _ref.loadingTextStyle,
    loadingTextStyle = _ref$loadingTextStyle === void 0 ? {
      color: '#bbb'
    } : _ref$loadingTextStyle,
    _ref$opacity = _ref.opacity,
    opacity = _ref$opacity === void 0 ? 'default' : _ref$opacity,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mask, {
    visible: spinning,
    opacity: opacity
  }, /*#__PURE__*/React.createElement("span", {
    style: loadingTextStyle
  }, loadingText), /*#__PURE__*/React.createElement(DotLoading, null)), children);
};
export default Index;