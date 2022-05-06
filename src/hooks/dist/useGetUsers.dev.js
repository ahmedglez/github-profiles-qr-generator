"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _apis = require("../apis/apis");

var _axios = _interopRequireDefault(require("axios"));

var _useGetQR = _interopRequireDefault(require("./useGetQR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useGetUsers = function useGetUsers() {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0, _react.useState)(user === undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      searchValue = _useState6[0],
      setSearchValue = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      code = _useState8[0],
      setCode = _useState8[1];

  var getCode = function getCode() {
    if (user !== undefined) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      setCode((0, _useGetQR["default"])(user.html_url));
    } else {
      setCode('');
    }
  };

  (0, _react.useEffect)(getCode, [user]);

  var lookForUser = function lookForUser(username) {
    console.log(username);
    var api = _apis.github_users + '/' + username;
    console.log(api);
    console.log(_apis.github_users);

    function getUser(username) {
      var myUser;
      return regeneratorRuntime.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap((0, _axios["default"])(api));

            case 2:
              myUser = _context.sent;
              setUser(myUser.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    getUser();
  };

  return {
    user: user,
    setUser: setUser,
    valid: valid,
    lookForUser: lookForUser,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    code: code,
    getCode: getCode
  };
};

var _default = useGetUsers;
exports["default"] = _default;