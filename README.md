# react-countup-v2

> React component wrap for CountUp.js

## Installation

```
$ npm install --save countup.js react-countup-v2
```

## Usage

``` javascript
import ReactCountUp from 'react-countup-v2';

export default () => {
  const onReady = (instance, CountUp) => {};
  const onComplete = (instance, CountUp) => {};
  const onUpdate = (instance, CountUp) => {};
  const onError = error => console.error(error);

  return (
    <ReactCountUp
      delay={10}
      endVal={1000}
      onReady={onReady}
      onComplete={onComplete}
      onUpdate={onUpdate}
      onError={onError}
    />
  );
}
```

## propTypes

``` javascript
className: PropTypes.string,
delay: PropTypes.number,
endVal: PropTypes.number,
options: PropTypes.object,
onReady: PropTypes.func,
onComplete: PropTypes.func,
onUpdate: PropTypes.func,
onError: PropTypes.func,
```

[Read more](https://github.com/inorganik/countUp.js)

## defaultProps

``` javascript
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
onReady: () => {},
onComplete: () => {},
onUpdate: () => {},
onError: () => {},
```

# License

MIT
