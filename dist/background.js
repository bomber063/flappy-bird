"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sprite = _interopRequireDefault(require("../base/sprite"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var BG_IMG_SRC = 'images/bg.jpg';
var BG_WIDTH = 512;
var BG_HEIGHT = 512;
/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */

var BackGround = /*#__PURE__*/function (_Sprite) {
  _inherits(BackGround, _Sprite);

  var _super = _createSuper(BackGround);

  function BackGround(ctx) {
    var _this;

    _classCallCheck(this, BackGround);

    _this = _super.call(this, BG_IMG_SRC, BG_WIDTH, BG_HEIGHT);
    _this.top = 0;

    _this.render(ctx);

    return _this;
  }

  _createClass(BackGround, [{
    key: "update",
    value: function update() {
      this.top += 2;
      if (this.top >= screenHeight) this.top = 0;
    }
    /**
     * 背景图重绘函数
     * 绘制两张图片，两张图片大小和屏幕一致
     * 第一张漏出高度为top部分，其余的隐藏在屏幕上面
     * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面
     */

  }, {
    key: "render",
    value: function render(ctx) {
      ctx.drawImage(this.img, 0, 0, this.width, this.height, 0, -screenHeight + this.top, screenWidth, screenHeight);
      ctx.drawImage(this.img, 0, 0, this.width, this.height, 0, this.top, screenWidth, screenHeight);
    }
  }]);

  return BackGround;
}(_sprite["default"]);

exports["default"] = BackGround;
//# sourceMappingURL=background.js.map