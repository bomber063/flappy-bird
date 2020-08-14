"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sprite = _interopRequireDefault(require("../base/sprite"));

var _bullet = _interopRequireDefault(require("./bullet"));

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

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight; // 玩家相关常量设置

var PLAYER_IMG_SRC = 'images/hero.png';
var PLAYER_WIDTH = 80;
var PLAYER_HEIGHT = 80;
var databus = new _databus["default"]();

var Player = /*#__PURE__*/function (_Sprite) {
  _inherits(Player, _Sprite);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT); // 玩家默认处于屏幕底部居中位置

    _this.x = screenWidth / 2 - _this.width / 2;
    _this.y = screenHeight - _this.height - 30; // 用于在手指移动的时候标识手指是否已经在飞机上了

    _this.touched = false;
    _this.bullets = []; // 初始化事件监听

    _this.initEvent();

    return _this;
  }
  /**
   * 当手指触摸屏幕的时候
   * 判断手指是否在飞机上
   * @param {Number} x: 手指的X轴坐标
   * @param {Number} y: 手指的Y轴坐标
   * @return {Boolean}: 用于标识手指是否在飞机上的布尔值
   */


  _createClass(Player, [{
    key: "checkIsFingerOnAir",
    value: function checkIsFingerOnAir(x, y) {
      var deviation = 30;
      return !!(x >= this.x - deviation && y >= this.y - deviation && x <= this.x + this.width + deviation && y <= this.y + this.height + deviation);
    }
    /**
     * 根据手指的位置设置飞机的位置
     * 保证手指处于飞机中间
     * 同时限定飞机的活动范围限制在屏幕中
     */

  }, {
    key: "setAirPosAcrossFingerPosZ",
    value: function setAirPosAcrossFingerPosZ(x, y) {
      var disX = x - this.width / 2;
      var disY = y - this.height / 2;
      if (disX < 0) disX = 0;else if (disX > screenWidth - this.width) disX = screenWidth - this.width;
      if (disY <= 0) disY = 0;else if (disY > screenHeight - this.height) disY = screenHeight - this.height;
      this.x = disX;
      this.y = disY;
    }
    /**
     * 玩家响应手指的触摸事件
     * 改变战机的位置
     */

  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this2 = this;

      canvas.addEventListener('touchstart', function (e) {
        e.preventDefault();
        var x = e.touches[0].clientX;
        var y = e.touches[0].clientY; //

        if (_this2.checkIsFingerOnAir(x, y)) {
          _this2.touched = true;

          _this2.setAirPosAcrossFingerPosZ(x, y);
        }
      }.bind(this));
      canvas.addEventListener('touchmove', function (e) {
        e.preventDefault();
        var x = e.touches[0].clientX;
        var y = e.touches[0].clientY;
        if (_this2.touched) _this2.setAirPosAcrossFingerPosZ(x, y);
      }.bind(this));
      canvas.addEventListener('touchend', function (e) {
        e.preventDefault();
        _this2.touched = false;
      }.bind(this));
    }
    /**
     * 玩家射击操作
     * 射击时机由外部决定
     */

  }, {
    key: "shoot",
    value: function shoot() {
      var bullet = databus.pool.getItemByClass('bullet', _bullet["default"]);
      bullet.init(this.x + this.width / 2 - bullet.width / 2, this.y - 10, 10);
      databus.bullets.push(bullet);
    }
  }]);

  return Player;
}(_sprite["default"]);

exports["default"] = Player;
//# sourceMappingURL=index.js.map