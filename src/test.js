const _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');

_Object$defineProperty(exports, '__esModule', {
  value: true,
});
const _rq = require('./rq');

_Object$defineProperty(exports, 'request', {
  enumerable: true,
  get: function get() {
    return () => {
      console.log(990);
      return _rq;
    };
  },
});
