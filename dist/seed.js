"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dataSource = require("./data-source");
// import { Post } from "./entity/Post"

_dataSource.AppDataSource.initialize().then(/*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var manager;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        manager = _dataSource.AppDataSource.manager; // const posts = await manager.find(Post);
        // console.log(posts);
        // if (posts.length === 0) {
        //     await manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => {
        //         return new Post({ title: `Post ${n}`, content: `这是我的第${n}篇文章` });
        //     }));
        //     console.log('数据填充了')
        // }
        // const posts2 = await manager.find(Post);
        // console.log(posts2);
        _dataSource.AppDataSource.destroy();
      case 2:
      case "end":
        return _context.stop();
    }
  }, _callee);
})))["catch"](function (error) {
  return console.log(error);
});