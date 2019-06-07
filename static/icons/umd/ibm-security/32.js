(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.IbmSecurity32 = factory());
}(this, (function () { 'use strict';

  var _32 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 32,
      height: 32,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M16 31A11 11 0 0 1 5 20V6.91l11-6 11 6V20a11 11 0 0 1-11 11zM7 8.09V20a9 9 0 0 0 18 0V8.09l-9-4.95z',
        },
      },
    ],
    name: 'ibm-security',
    size: 32,
  };

  return _32;

})));
