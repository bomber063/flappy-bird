"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _animation = _interopRequireDefault(require("../base/animation"));

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

var ENEMY_IMG_SRC = 'images/enemy.png';
var ENEMY_WIDTH = 60;
var ENEMY_HEIGHT = 60;
var __ = {
  speed: Symbol('speed')
};
var databus = new _databus["default"]();

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

var Enemy = /*#__PURE__*/function (_Animation) {
  _inherits(Enemy, _Animation);

  var _super = _createSuper(Enemy);

  function Enemy() {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _super.call(this, ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT);

    _this.initExplosionAnimation();

    return _this;
  }

  _createClass(Enemy, [{
    key: "init",
    value: function init(speed) {
      this.x = rnd(0, window.innerWidth - ENEMY_WIDTH);
      this.y = -this.height;
      this[__.speed] = speed;
      this.visible = true;
    } // 预定义爆炸的帧动画

  }, {
    key: "initExplosionAnimation",
    value: function initExplosionAnimation() {
      var frames = [];
      var EXPLO_IMG_PREFIX = 'images/explosion';
      var EXPLO_FRAME_COUNT = 19;

      for (var i = 0; i < EXPLO_FRAME_COUNT; i++) {
        frames.push(EXPLO_IMG_PREFIX + (i + 1) + '.png');
      }

      this.initFrames(frames);
    } // 每一帧更新子弹位置

  }, {
    key: "update",
    value: function update() {
      this.y += this[__.speed]; // 对象回收

      if (this.y > window.innerHeight + this.height) databus.removeEnemey(this);
    }
  }]);

  return Enemy;
}(_animation["default"]);

exports["default"] = Enemy;
//# sourceMappingURL=enemy.js.map