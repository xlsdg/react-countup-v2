(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('react'), require('countup.js')))
    : typeof define === 'function' && define.amd
    ? define(['react', 'countup.js'], factory)
    : (global.ReactCountUp = factory(global.React, global.CountUp));
})(this, function(React, countup_js) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag$1 && symToStringTag$1 in Object(value) ? getRawTag(value) : objectToString(value);
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var ReactCountUp =
    /*#__PURE__*/
    (function(_React$Component) {
      _inherits(ReactCountUp, _React$Component);

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
      // static getDerivedStateFromProps(nextProps, prevState) {
      //   return null;
      // }
      function ReactCountUp(props) {
        var _this;

        _classCallCheck(this, ReactCountUp);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactCountUp).call(this, props));

        _defineProperty(_assertThisInitialized(_this), 'init', function() {
          var forceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          var that = _assertThisInitialized(_this);

          var _that$props = that.props,
            delay = _that$props.delay,
            endVal = _that$props.endVal,
            options = _that$props.options,
            onReady = _that$props.onReady,
            onError = _that$props.onError;

          if (!that.dom) {
            return;
          }

          var instance = new countup_js.CountUp(that.dom, endVal, options);

          if (instance.error && isFunction(onError)) {
            return onError(instance.error);
          }

          that.setState({
            instance: instance,
          });

          if (!forceUpdate && isFunction(onReady)) {
            onReady(instance, countup_js.CountUp);
          }

          setTimeout(function() {
            return instance.start();
          }, delay);
        });

        _defineProperty(_assertThisInitialized(_this), 'update', function(prevProps, prevState) {
          var that = _assertThisInitialized(_this);

          var instance = that.state.instance;
          var _that$props2 = that.props,
            endVal = _that$props2.endVal,
            options = _that$props2.options,
            onUpdate = _that$props2.onUpdate;
          var isUpdate = options !== prevProps.options;

          if (isUpdate) {
            that.init(true);
          } else if (endVal !== prevProps.endVal) {
            that.reset();
            that.updateValue(endVal);
          }

          if (isFunction(onUpdate)) {
            onUpdate(instance, countup_js.CountUp);
          }
        });

        _defineProperty(_assertThisInitialized(_this), 'unInit', function() {
          var that = _assertThisInitialized(_this);

          that.setState({
            instance: null,
          });
        });

        _defineProperty(_assertThisInitialized(_this), 'printValue', function(value) {
          var that = _assertThisInitialized(_this);

          var instance = that.state.instance;

          if (!instance) {
            return;
          }

          return instance.printValue(value);
        });

        _defineProperty(_assertThisInitialized(_this), 'start', function(callback) {
          var that = _assertThisInitialized(_this);

          var onComplete = that.props.onComplete;
          var instance = that.state.instance;

          if (!instance) {
            return;
          }

          return instance.start(function() {
            if (isFunction(callback)) {
              callback(instance, countup_js.CountUp);
            }

            if (isFunction(onComplete)) {
              onComplete(instance, countup_js.CountUp);
            }
          });
        });

        _defineProperty(_assertThisInitialized(_this), 'pauseResume', function() {
          var that = _assertThisInitialized(_this);

          var instance = that.state.instance;

          if (!instance) {
            return;
          }

          return instance.pauseResume();
        });

        _defineProperty(_assertThisInitialized(_this), 'reset', function() {
          var that = _assertThisInitialized(_this);

          var instance = that.state.instance;

          if (!instance) {
            return;
          }

          return instance.reset();
        });

        _defineProperty(_assertThisInitialized(_this), 'updateValue', function(newEndVal) {
          var that = _assertThisInitialized(_this);

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
              endVal = _that$props3.endVal,
              options = _that$props3.options;
            var isUpdate =
              className !== nextProps.className || endVal !== nextProps.endVal || options !== nextProps.options;
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
    onReady: function onReady() {},
    onComplete: function onComplete() {},
    onUpdate: function onUpdate() {},
    onError: function onError() {},
  });

  return ReactCountUp;
});
