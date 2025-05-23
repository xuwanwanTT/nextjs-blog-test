"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _typeorm = require("typeorm");
var _User = require("./User");
var _Post = require("./Post");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
var Comment = exports.Comment = (_dec = (0, _typeorm.Entity)('comments'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('increment'), _dec3 = (0, _typeorm.Column)('int'), _dec4 = (0, _typeorm.Column)('int'), _dec5 = (0, _typeorm.Column)('text'), _dec6 = (0, _typeorm.CreateDateColumn)(), _dec7 = (0, _typeorm.UpdateDateColumn)(), _dec8 = (0, _typeorm.ManyToOne)(function (type) {
  return _User.User;
}, function (user) {
  return user.comments;
}), _dec9 = (0, _typeorm.ManyToOne)(function (type) {
  return _Post.Post;
}, function (post) {
  return post.comments;
}), _dec(_class = (_class2 = /*#__PURE__*/(0, _createClass2["default"])(function Comment() {
  (0, _classCallCheck2["default"])(this, Comment);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "userId", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "postId", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "content", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "createdAt", _descriptor5, this);
  (0, _initializerDefineProperty2["default"])(this, "updatedAt", _descriptor6, this);
  (0, _initializerDefineProperty2["default"])(this, "user", _descriptor7, this);
  (0, _initializerDefineProperty2["default"])(this, "post", _descriptor8, this);
}), _descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "userId", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "postId", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "content", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createdAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "updatedAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "user", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "post", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class);