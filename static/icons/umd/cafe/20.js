(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Cafe20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 20,
      height: 20,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M2 28h28v2H2zm22.5-17H8a2.002 2.002 0 0 0-2 2v8a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-1h.5a4.5 4.5 0 0 0 0-9zM22 21a3.003 3.003 0 0 1-3 3h-8a3.003 3.003 0 0 1-3-3v-8h14zm2.5-3H24v-5h.5a2.5 2.5 0 0 1 0 5zM19 9h-2v-.146a1.988 1.988 0 0 0-1.105-1.789L13.21 5.724A3.979 3.979 0 0 1 11 2.146V1h2v1.146a1.99 1.99 0 0 0 1.105 1.789l2.684 1.341A3.98 3.98 0 0 1 19 8.854z',
        },
      },
    ],
    name: 'cafe',
    size: 20,
  };

  return _20;

})));