import React from 'react';
// import PropTypes from 'prop-types';
// import _ from 'lodash-es';
import _isFunction from 'lodash-es/isFunction';
import { CountUp } from 'countup.js';

export default class ReactCountUp extends React.Component {
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
    className: null,
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

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  constructor(props) {
    super(props);

    this.dom = null;
    this.state = {
      instance: null,
    };
  }

  componentDidMount() {
    const that = this;
    that.init();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const that = this;
    // console.log('shouldComponentUpdate', that.props, nextProps, that.state, nextState);
    const { className, endVal, options } = that.props;

    const isUpdate =
      className !== nextProps.className ||
      endVal !== nextProps.endVal ||
      options !== nextProps.options;

    return isUpdate;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const that = this;
    that.update(prevProps, prevState);
  }

  componentWillUnmount() {
    const that = this;
    that.unInit();
  }

  init = (forceUpdate = false) => {
    const that = this;
    const { delay, endVal, options, onReady, onError } = that.props;

    if (!that.dom) {
      return;
    }

    const instance = new CountUp(that.dom, endVal, options);

    if (instance.error && _isFunction(onError)) {
      return onError(instance.error);
    }

    that.setState({
      instance,
    });

    if (!forceUpdate && _isFunction(onReady)) {
      onReady(instance, CountUp);
    }

    setTimeout(() => instance.start(), delay);
  };

  update = (prevProps, prevState) => {
    const that = this;
    const { instance } = that.state;
    const { endVal, options, onUpdate } = that.props;

    const isUpdate = options !== prevProps.options;

    if (isUpdate) {
      that.init(true);
    } else if (endVal !== prevProps.endVal) {
      that.reset();
      that.updateValue(endVal);
    }

    if (_isFunction(onUpdate)) {
      onUpdate(instance, CountUp);
    }
  };

  unInit = () => {
    const that = this;

    that.setState({
      instance: null,
    });
  };

  printValue = value => {
    const that = this;
    const { instance } = that.state;

    if (!instance) {
      return;
    }

    return instance.printValue(value);
  };

  start = callback => {
    const that = this;
    const { onComplete } = that.props;
    const { instance } = that.state;

    if (!instance) {
      return;
    }

    return instance.start(() => {
      if (_isFunction(callback)) {
        callback(instance, CountUp);
      }

      if (_isFunction(onComplete)) {
        onComplete(instance, CountUp);
      }
    });
  };

  pauseResume = () => {
    const that = this;
    const { instance } = that.state;

    if (!instance) {
      return;
    }

    return instance.pauseResume();
  };

  reset = () => {
    const that = this;
    const { instance } = that.state;

    if (!instance) {
      return;
    }

    return instance.reset();
  };

  updateValue = newEndVal => {
    const that = this;
    const { instance } = that.state;

    if (!instance) {
      return;
    }

    return instance.update(newEndVal);
  };

  render() {
    const that = this;
    const { className } = that.props;

    return (
      <span
        className={className}
        ref={e => {
          that.dom = e;
        }}
      />
    );
  }
}
