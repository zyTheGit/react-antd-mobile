export var initTooltip = function initTooltip(el, tooltipFormater) {
  var removeTooltip = function removeTooltip() {
    var _tooltipEl$remove;
    if (!el) return;
    var tooltipEl = el.querySelector('.tooltip');
    tooltipEl === null || tooltipEl === void 0 || (_tooltipEl$remove = tooltipEl.remove) === null || _tooltipEl$remove === void 0 || _tooltipEl$remove.call(tooltipEl);
  };
  var renderTooltipContext = function renderTooltipContext(_ref) {
    var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? [] : _ref$colors,
      _ref$xAxis = _ref.xAxis,
      xAxis = _ref$xAxis === void 0 ? [] : _ref$xAxis;
    var html = "<div class=\"tooltip--title\">".concat(name, "</div>");
    return data.reduce(function (pre, num, index) {
      // eslint-disable-next-line no-param-reassign
      pre += "<div class=\"tooltip__item\">\n        <span class=\"tooltip__item--tag\" style=\"background-color:".concat(colors[index], "\"></span>\n        <span class=\"tooltip__item--name\">").concat(xAxis[index], "</span>\n        <span class=\"tooltip__item--value\">").concat(num, "</span>\n      </div>");
      return pre;
    }, html);
  };
  var createrTooltip = function createrTooltip(_ref2) {
    var clientX = _ref2.clientX,
      clientY = _ref2.clientY,
      parentEl = _ref2.parentEl,
      item = _ref2.item;
    if (!el) return;
    var tooltipEl = el.querySelector('.tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'tooltip';
      tooltipEl.getBoundingClientRect();
      el.appendChild(tooltipEl);
    }
    tooltipEl.innerHTML = typeof tooltipFormater === 'function' ? tooltipFormater === null || tooltipFormater === void 0 ? void 0 : tooltipFormater(item) : renderTooltipContext(item);
    var _window = window,
      innerHeight = _window.innerHeight;
    var _el$getBoundingClient = el.getBoundingClientRect(),
      x = _el$getBoundingClient.x,
      y = _el$getBoundingClient.y,
      bottom = _el$getBoundingClient.bottom;
    var _parentEl$getBounding = parentEl.getBoundingClientRect(),
      pWidth = _parentEl$getBounding.width,
      pHeight = _parentEl$getBounding.height,
      right = _parentEl$getBounding.right;
    var _tooltipEl$getBoundin = tooltipEl.getBoundingClientRect(),
      width = _tooltipEl$getBoundin.width,
      height = _tooltipEl$getBoundin.height;
    var left = clientX - x;
    var top = clientY - y;
    var styleX = '',
      styleY = '';
    if (pWidth - left <= width && left >= width) {
      styleX = "right:".concat(right - left, "px");
    } else {
      styleX = "left:".concat(left, "px");
    }
    styleY = clientY + height + pHeight > innerHeight ? "bottom:".concat(bottom - clientY + pHeight, "px") : "top:".concat(top + pHeight, "px");
    tooltipEl.setAttribute('style', "".concat(styleX, ";").concat(styleY));
  };
  var hanlderClick = function hanlderClick(e) {
    if (e.target.className === 'cus-stack-chart__footer') {
      return;
    }
    if (e.target.className !== 'cus-stack-chart__progress') {
      return;
    }
    var curItemStr = e.target.getAttribute('data-item');
    var clientX = e.clientX,
      clientY = e.clientY;
    var curItem = {};
    try {
      curItem = JSON.parse(curItemStr);
    } catch (error) {
      curItem = {};
    }
    createrTooltip({
      clientX: clientX,
      clientY: clientY,
      parentEl: e.target,
      item: curItem
    });
    e.stopPropagation();
  };
  var hanlderWindowClick = function hanlderWindowClick() {
    removeTooltip();
  };
  var registerMethods = function registerMethods() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el && el.addEventListener('click', hanlderClick);
    window.addEventListener('click', hanlderWindowClick);
  };
  var unregisterMethods = function unregisterMethods() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el && el.removeEventListener('click', hanlderClick);
    window.removeEventListener('click', hanlderWindowClick);
  };
  return {
    registerMethods: registerMethods,
    unregisterMethods: unregisterMethods
  };
};