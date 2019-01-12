'use strict';

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = _interopDefault(require('react'));
var isFunction = _interopDefault(require('lodash-es/isFunction'));
var CountUp = _interopDefault(require('countup.js'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

var ReactCountUp =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(ReactCountUp, _React$Component);

    // static propTypes = {
    //   className: PropTypes.string,
    //   delay: PropTypes.number,
    //   startVal: PropTypes.number,
    //   endVal: PropTypes.number,
    //   decimals: PropTypes.number,
    //   duration: PropTypes.number,
    //   options: PropTypes.object,
    //   onReady: PropTypes.func,
    //   onComplete: PropTypes.func,
    //   onUpdate: PropTypes.func,
    //   onError: PropTypes.func,
    // };
    // static getDerivedStateFromProps(nextProps, prevState) {
    //   return null;
    // }
    function ReactCountUp(props) {
      var _this;

      _classCallCheck(this, ReactCountUp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactCountUp).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'init', function() {
        var forceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var that = _assertThisInitialized(_assertThisInitialized(_this));

        var _that$props = that.props,
          delay = _that$props.delay,
          startVal = _that$props.startVal,
          endVal = _that$props.endVal,
          decimals = _that$props.decimals,
          duration = _that$props.duration,
          options = _that$props.options,
          onReady = _that$props.onReady,
          onError = _that$props.onError;

        if (!that.dom) {
          return;
        }

        var instance = new CountUp(that.dom, startVal, endVal, decimals, duration, options);

        if (instance.error && isFunction(onError)) {
          return onError(instance.error);
        }

        that.setState({
          instance: instance,
        });

        if (!forceUpdate && isFunction(onReady)) {
          onReady(instance, CountUp);
        }

        setTimeout(function() {
          return instance.start();
        }, delay);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'update', function(prevProps, prevState) {
        var that = _assertThisInitialized(_assertThisInitialized(_this));

        var instance = that.state.instance;
        var _that$props2 = that.props,
          startVal = _that$props2.startVal,
          endVal = _that$props2.endVal,
          decimals = _that$props2.decimals,
          duration = _that$props2.duration,
          options = _that$props2.options,
          onUpdate = _that$props2.onUpdate;
        var isUpdate =
          startVal !== prevProps.startVal ||
          decimals !== prevProps.decimals ||
          duration !== prevProps.duration ||
          options !== prevProps.options;

        if (isUpdate) {
          that.init(true);
        } else if (endVal !== prevProps.endVal) {
          that.reset();
          that.updateValue(endVal);
        }

        if (isFunction(onUpdate)) {
          onUpdate(instance, CountUp);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'unInit', function() {
        var that = _assertThisInitialized(_assertThisInitialized(_this));

        that.setState({
          instance: null,
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'printValue', function(value) {
        var that = _assertThisInitialized(_assertThisInitialized(_this));

        var instance = that.state.instance;

        if (!instance) {
          return;
        }

        return instance.printValue(value);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'start', function(callback) {
        var that = _assertThisInitialized(_assertThisInitialized(_this));

        var onComplete = that.props.onComplete;
        var instance = that.state.instance;

        if (!instance) {
          return;
        }

        return instance.start(function() {
          if (isFunction(callback)) {
            callback(instance, CountUp);
          }

          if (isFunction(onComplete)) {
            onComplete(instance, CountUp);
          }
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'pauseResume', function() {
        var that = _assertThisInitialized(_assertThisInitialized(_this));

        var instance = that.state.instance;

        if (!instance) {
          return;
        }

        return instance.pauseResume();
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'reset', function() {
        var that = _assertThisInitialized(_assertThisInitialized(_this));

        var instance = that.state.instance;

        if (!instance) {
          return;
        }

        return instance.reset();
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'updateValue', function(newEndVal) {
        var that = _assertThisInitialized(_assertThisInitialized(_this));

        var instance = that.state.instance;

        if (!instance) {
          return;
        }

        return instance.update(newEndVal);
      });

      _this.dom = null;
      _this.state = {
        instance: null,
      };
      return _this;
    }

    _createClass(ReactCountUp, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var that = this;
          that.init();
        },
      },
      {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          var that = this; // console.log('shouldComponentUpdate', that.props, nextProps, that.state, nextState);

          var _that$props3 = that.props,
            className = _that$props3.className,
            startVal = _that$props3.startVal,
            endVal = _that$props3.endVal,
            decimals = _that$props3.decimals,
            duration = _that$props3.duration,
            options = _that$props3.options;
          var isUpdate =
            className !== nextProps.className ||
            startVal !== nextProps.startVal ||
            endVal !== nextProps.endVal ||
            decimals !== nextProps.decimals ||
            duration !== nextProps.duration ||
            options !== nextProps.options;
          return isUpdate;
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState, snapshot) {
          var that = this;
          that.update(prevProps, prevState);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var that = this;
          that.unInit();
        },
      },
      {
        key: 'render',
        value: function render() {
          var that = this;
          var className = that.props.className;
          return React.createElement('span', {
            className: className,
            ref: function ref(e) {
              that.dom = e;
            },
          });
        },
      },
    ]);

    return ReactCountUp;
  })(React.Component);

_defineProperty(ReactCountUp, 'defaultProps', {
  className: null,
  delay: 0,
  startVal: 0,
  endVal: 100,
  decimals: 0,
  duration: 2,
  options: {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    easingFn: null,
    formattingFn: null,
    prefix: '',
    suffix: '',
    numerals: [],
  },
  onReady: function onReady() {},
  onComplete: function onComplete() {},
  onUpdate: function onUpdate() {},
  onError: function onError() {},
});

module.exports = ReactCountUp;
