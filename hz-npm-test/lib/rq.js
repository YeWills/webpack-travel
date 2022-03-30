"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.request = void 0;

var request = function request(option) {

  // console.log('11111111111111', Object.entries({aa:123}));
  console.log('11111111111111', option?.rrr ?? 99);
  // console.log('11111111111111', option?.rrr);
  console.log('11111111111111', option.rrr);
};

exports.request = request;
