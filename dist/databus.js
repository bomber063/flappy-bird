"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pool = _interopRequireDefault(require("./base/pool"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
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

var instance;
/**
 * 全局状态管理器
 */

var DataBus = /*#__PURE__*/function () {
  function DataBus() {
    _classCallCheck(this, DataBus);

    if (instance) return instance;
    instance = this;
    this.pool = new _pool["default"]();
    this.reset();
  }

  _createClass(DataBus, [{
    key: "reset",
    value: function reset() {
      this.frame = 0;
      this.score = 0;
      this.bullets = [];
      this.enemys = [];
      this.animations = [];
      this.gameOver = false;
    }
    /**
     * 回收敌人，进入对象池
     * 此后不进入帧循环
     */

  }, {
    key: "removeEnemey",
    value: function removeEnemey(enemy) {
      var temp = this.enemys.shift();
      temp.visible = false;
      this.pool.recover('enemy', enemy);
    }
    /**
     * 回收子弹，进入对象池
     * 此后不进入帧循环
     */

  }, {
    key: "removeBullets",
    value: function removeBullets(bullet) {
      var temp = this.bullets.shift();
      temp.visible = false;
      this.pool.recover('bullet', bullet);
    }
  }]);

  return DataBus;
}();

exports["default"] = DataBus;
//# sourceMappingURL=databus.js.map