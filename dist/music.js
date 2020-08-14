"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
 * 统一的音效管理器
 */

var Music = /*#__PURE__*/function () {
  function Music() {
    _classCallCheck(this, Music);

    if (instance) return instance;
    instance = this;
    this.bgmAudio = new Audio();
    this.bgmAudio.loop = true;
    this.bgmAudio.src = 'audio/bgm.mp3';
    this.shootAudio = new Audio();
    this.shootAudio.src = 'audio/bullet.mp3';
    this.boomAudio = new Audio();
    this.boomAudio.src = 'audio/boom.mp3';
    this.playBgm();
  }

  _createClass(Music, [{
    key: "playBgm",
    value: function playBgm() {
      this.bgmAudio.play();
    }
  }, {
    key: "playShoot",
    value: function playShoot() {
      this.shootAudio.currentTime = 0;
      this.shootAudio.play();
    }
  }, {
    key: "playExplosion",
    value: function playExplosion() {
      this.boomAudio.currentTime = 0;
      this.boomAudio.play();
    }
  }]);

  return Music;
}();

exports["default"] = Music;
//# sourceMappingURL=music.js.map