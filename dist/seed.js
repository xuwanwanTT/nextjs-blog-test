"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dataSource = require("./data-source");
var _Comment = require("./entity/Comment");
var _Post = require("./entity/Post");
var _User = require("./entity/User");
_dataSource.AppDataSource.initialize().then(/*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var manager, u1, p1, c1;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        manager = _dataSource.AppDataSource.manager; // 创建 user 1
        u1 = new _User.User();
        u1.username = 'xuwanwan';
        u1.passwordDigest = '520';
        _context.next = 6;
        return manager.save(u1);
      case 6:
        // 创建 post 1
        p1 = new _Post.Post();
        p1.title = 'First Post';
        p1.content = 'This is my first post';
        p1.author = u1;
        _context.next = 12;
        return manager.save(p1);
      case 12:
        // 创建 comment 1
        c1 = new _Comment.Comment();
        c1.content = '666';
        c1.user = u1;
        c1.post = p1;
        _context.next = 18;
        return manager.save(c1);
      case 18:
        _dataSource.AppDataSource.destroy();
      case 19:
      case "end":
        return _context.stop();
    }
  }, _callee);
})))["catch"](function (error) {
  return console.log(error);
});