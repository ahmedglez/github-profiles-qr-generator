"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apis = require("../apis/apis");

var useGetQR = function useGetQR(link) {
  var code = _apis.qr_generator + link;
  return code;
};

var _default = useGetQR;
exports["default"] = _default;