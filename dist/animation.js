"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sprite = _interopRequireDefault(require("./sprite"));

var _databus = _interopRequireDefault(require("../databus"));

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

var databus = new _databus["default"]();
var __ = {
  timer: Symbol('timer')
};
/**
 * 简易的帧动画类实现
 */

var Animation = /*#__PURE__*/function (_Sprite) {
  _inherits(Animation, _Sprite);

  var _super = _createSuper(Animation);

  function Animation(imgSrc, width, height) {
    var _this;

    _classCallCheck(this, Animation);

    _this = _super.call(this, imgSrc, width, height); // 当前动画是否播放中

    _this.isPlaying = false; // 动画是否需要循环播放

    _this.loop = false; // 每一帧的时间间隔

    _this.interval = 1000 / 60; // 帧定时器

    _this[__.timer] = null; // 当前播放的帧

    _this.index = -1; // 总帧数

    _this.count = 0; // 帧图片集合

    _this.imgList = [];
    /**
     * 推入到全局动画池里面
     * 便于全局绘图的时候遍历和绘制当前动画帧
     */

    databus.animations.push(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 初始化帧动画的所有帧
   * 为了简单，只支持一个帧动画
   */


  _createClass(Animation, [{
    key: "initFrames",
    value: function initFrames(imgList) {
      var _this2 = this;

      imgList.forEach(function (imgSrc) {
        var img = new Image();
        img.src = imgSrc;

        _this2.imgList.push(img);
      });
      this.count = imgList.length;
    } // 将播放中的帧绘制到canvas上

  }, {
    key: "aniRender",
    value: function aniRender(ctx) {
      ctx.drawImage(this.imgList[this.index], this.x, this.y, this.width * 1.2, this.height * 1.2);
    } // 播放预定的帧动画

  }, {
    key: "playAnimation",
    value: function playAnimation() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // 动画播放的时候精灵图不再展示，播放帧动画的具体帧

      this.visible = false;
      this.isPlaying = true;
      this.loop = loop;
      this.index = index;

      if (this.interval > 0 && this.count) {
        this[__.timer] = setInterval(this.frameLoop.bind(this), this.interval);
      }
    } // 停止帧动画播放

  }, {
    key: "stop",
    value: function stop() {
      this.isPlaying = false;
      if (this[__.timer]) clearInterval(this[__.timer]);
    } // 帧遍历

  }, {
    key: "frameLoop",
    value: function frameLoop() {
      this.index++;

      if (this.index > this.count - 1) {
        if (this.loop) {
          this.index = 0;
        } else {
          this.index--;
          this.stop();
        }
      }
    }
  }]);

  return Animation;
}(_sprite["default"]);

exports["default"] = Animation;
//# sourceMappingURL=animation.js.map