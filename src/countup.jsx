import React from 'react';
// import PropTypes from 'prop-types';
import { CountUp } from 'countup.js';

const typeOf = type => object => Object.prototype.toString.call(object) === `[object ${type}]`;

// const isString = typeOf('String');
// const isObject = typeOf('Object');
const isFunction = typeOf('Function');

export default class ReactCountUp extends React.PureComponent {
  // static propTypes = {
  //   className: PropTypes.string,
  //   endVal: PropTypes.number,
  //   delay: PropTypes.number,
  //   options: PropTypes.object,
  //   onReady: PropTypes.func,
  //   onComplete: PropTypes.func,
  //   onUpdate: PropTypes.func,
  //   onError: PropTypes.func,
  // };

  static defaultProps = {
    className: 'i-countup',
    endVal: 100,
    delay: 0,
    options: {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: true,
      useGrouping: true,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ',',
      decimal: '.',
      easingFn: null,
      formattingFn: null,
      prefix: '',
      suffix: '',
      numerals: [],
    },
    onReady: () => {},
    onComplete: () => {},
    onUpdate: () => {},
    onError: () => {},
  };

  constructor() {
    super(...arguments);

    const that = this;

    that.dom = React.createRef();
    that.instance = null;

    // that.state = {};
  }

  componentDidMount() {
    const that = this;
    // console.log('componentDidMount', that.props, that.state);
    that.create();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const that = this;
  //   // console.log('shouldComponentUpdate', that.props, nextProps, that.state, nextState);
  //   const { className, endVal, options } = that.props;

  //   const isUpdate =
  //     className !== nextProps.className ||
  //     endVal !== nextProps.endVal ||
  //     options !== nextProps.options;

  //   return isUpdate;
  // }

  componentDidUpdate(prevProps, prevState) {
    const that = this;
    // console.log('componentDidUpdate', prevProps, that.props, prevState, that.state);
    that.update(prevProps, prevState);
  }

  componentWillUnmount() {
    const that = this;
    // console.log('componentWillUnmount', that.props, that.state);
    that.destroy();
  }

  create = (forceUpdate = false) => {
    const that = this;
    const { delay, endVal, options, onReady, onError } = that.props;

    if (!that.dom || !that.dom.current) {
      return;
    }

    const instance = new CountUp(that.dom.current, endVal, options);
    if (instance.error) {
      if (isFunction(onError)) {
        onError(instance.error);
      }

      return;
    }

    that.instance = instance;

    if (!forceUpdate && isFunction(onReady)) {
      onReady(that.instance, CountUp);
    }

    if (delay > -1) {
      setTimeout(() => that.instance.start(), delay);
    }
  };

  update = (prevProps, prevState) => {
    const that = this;
    const { endVal, options, onUpdate } = that.props;

    const isUpdate = options !== prevProps.options;

    if (isUpdate) {
      that.create(true);
    } else if (endVal !== prevProps.endVal) {
      that.reset();
      that.updateValue(endVal);
    }

    if (isFunction(onUpdate)) {
      onUpdate(that.instance, CountUp);
    }
  };

  destroy = () => {
    const that = this;

    if (that.instance && isFunction(that.instance.destroy)) {
      that.instance.destroy();
    }

    that.dom = null;
    that.instance = null;
  };

  printValue = value => {
    const that = this;

    if (!that.instance || !isFunction(that.instance.printValue)) {
      return;
    }

    return that.instance.printValue(value);
  };

  start = callback => {
    const that = this;
    const { onComplete } = that.props;

    if (!that.instance || !isFunction(that.instance.start)) {
      return;
    }

    return that.instance.start(() => {
      if (isFunction(callback)) {
        callback(that.instance, CountUp);
      }

      if (isFunction(onComplete)) {
        onComplete(that.instance, CountUp);
      }
    });
  };

  pauseResume = () => {
    const that = this;

    if (!that.instance || !isFunction(that.instance.pauseResume)) {
      return;
    }

    return that.instance.pauseResume();
  };

  reset = () => {
    const that = this;

    if (!that.instance || !isFunction(that.instance.reset)) {
      return;
    }

    return that.instance.reset();
  };

  updateValue = newEndVal => {
    const that = this;

    if (!that.instance || !isFunction(that.instance.update)) {
      return;
    }

    return that.instance.update(newEndVal);
  };

  render() {
    const that = this;
    // console.log('render');
    const { className, children } = that.props;

    return (
      <span ref={that.dom} className={className}>
        {children || null}
      </span>
    );
  }
}
