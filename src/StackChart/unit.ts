import { TooltipFormaterParams } from './interface';

export const initTooltip = (
  el: HTMLDivElement | null,
  tooltipFormater?: (record: TooltipFormaterParams) => string,
) => {
  const removeTooltip = () => {
    if (!el) return;
    const tooltipEl = el.querySelector('.tooltip');
    tooltipEl?.remove?.();
  };

  const renderTooltipContext = ({
    name = '',
    data = [],
    colors = [],
    xAxis = [],
  }): string => {
    const html = `<div class="tooltip--title">${name}</div>`;
    return data.reduce((pre, num, index) => {
      // eslint-disable-next-line no-param-reassign
      pre += `<div class="tooltip__item">
        <span class="tooltip__item--tag" style="background-color:${colors[index]}"></span>
        <span class="tooltip__item--name">${xAxis[index]}</span>
        <span class="tooltip__item--value">${num}</span>
      </div>`;

      return pre;
    }, html);
  };

  const createrTooltip = ({ clientX, clientY, parentEl, item }: any) => {
    if (!el) return;
    let tooltipEl = el.querySelector('.tooltip');

    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'tooltip';
      tooltipEl.getBoundingClientRect();

      el.appendChild(tooltipEl);
    }
    tooltipEl.innerHTML =
      typeof tooltipFormater === 'function'
        ? tooltipFormater?.(item)
        : renderTooltipContext(item);
    const { innerHeight } = window;
    const { x, y, bottom } = el.getBoundingClientRect();
    const {
      width: pWidth,
      height: pHeight,
      right,
    } = parentEl.getBoundingClientRect();
    const { width, height } = tooltipEl.getBoundingClientRect();
    const left = clientX - x;
    const top = clientY - y;
    let styleX = '',
      styleY = '';
    if (pWidth - left <= width && left >= width) {
      styleX = `right:${right - left}px`;
    } else {
      styleX = `left:${left}px`;
    }

    styleY =
      clientY + height + pHeight > innerHeight
        ? `bottom:${bottom - clientY + pHeight}px`
        : `top:${top + pHeight}px`;
    (tooltipEl as HTMLDivElement).setAttribute('style', `${styleX};${styleY}`);
  };

  const hanlderClick = (e: any) => {
    if (e.target.className === 'cus-stack-chart__footer') {
      return;
    }

    if (e.target.className !== 'cus-stack-chart__progress') {
      return;
    }

    const curItemStr = e.target.getAttribute('data-item');
    const { clientX, clientY } = e;
    let curItem = {};
    try {
      curItem = JSON.parse(curItemStr);
    } catch (error) {
      curItem = {};
    }
    createrTooltip({ clientX, clientY, parentEl: e.target, item: curItem });
    e.stopPropagation();
  };

  const hanlderWindowClick = () => {
    removeTooltip();
  };

  const registerMethods = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el && el.addEventListener('click', hanlderClick);
    window.addEventListener('click', hanlderWindowClick);
  };

  const unregisterMethods = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el && el.removeEventListener('click', hanlderClick);
    window.removeEventListener('click', hanlderWindowClick);
  };

  return { registerMethods, unregisterMethods };
};
