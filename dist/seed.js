"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dataSource = require("./data-source");
var _Post = require("./entity/Post");
_dataSource.AppDataSource.initialize().then(/*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var manager, posts, posts2;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        manager = _dataSource.AppDataSource.manager;
        _context.next = 3;
        return manager.find(_Post.Post);
      case 3:
        posts = _context.sent;
        console.log(posts);
        if (!(posts.length === 0)) {
          _context.next = 9;
          break;
        }
        _context.next = 8;
        return manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (n) {
          return new _Post.Post({
            title: "Post ".concat(n),
            content: "\u8FD9\u662F\u6211\u7684\u7B2C".concat(n, "\u7BC7\u6587\u7AE0")
          });
        }));
      case 8:
        console.log('数据填充了');
      case 9:
        _context.next = 11;
        return manager.find(_Post.Post);
      case 11:
        posts2 = _context.sent;
        console.log(posts2);
        _dataSource.AppDataSource.destroy();
      case 14:
      case "end":
        return _context.stop();
    }
  }, _callee);
})))["catch"](function (error) {
  return console.log(error);
});