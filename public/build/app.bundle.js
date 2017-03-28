/** ****/ (function (modules) { // webpackBootstrap
/** ****/ 	// The module cache
  /** ****/ 	const installedModules = {};
/** ****/
/** ****/ 	// The require function
  /** ****/ 	function __webpack_require__(moduleId) {
/** ****/
/** ****/ 		// Check if module is in cache
    /** ****/ 		if (installedModules[moduleId])
  /** ****/ 			{ return installedModules[moduleId].exports; }
/** ****/
/** ****/ 		// Create a new module (and put it into the cache)
    /** ****/ 		const module = installedModules[moduleId] = {
      /** ****/ 			i: moduleId,
      /** ****/ 			l: false,
      /** ****/ 			exports: {},
    /** ****/ 		};
/** ****/
/** ****/ 		// Execute the module function
    /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/** ****/
/** ****/ 		// Flag the module as loaded
    /** ****/ 		module.l = true;
/** ****/
/** ****/ 		// Return the exports of the module
    /** ****/ 		return module.exports;
  /** ****/ 	}
/** ****/
/** ****/
/** ****/ 	// expose the modules object (__webpack_modules__)
  /** ****/ 	__webpack_require__.m = modules;
/** ****/
/** ****/ 	// expose the module cache
  /** ****/ 	__webpack_require__.c = installedModules;
/** ****/
/** ****/ 	// identity function for calling harmony imports with the correct context
  /** ****/ 	__webpack_require__.i = function (value) { return value; };
/** ****/
/** ****/ 	// define getter function for harmony exports
  /** ****/ 	__webpack_require__.d = function (exports, name, getter) {
    /** ****/ 		if (!__webpack_require__.o(exports, name)) {
      /** ****/ 			Object.defineProperty(exports, name, {
        /** ****/ 				configurable: false,
        /** ****/ 				enumerable: true,
        /** ****/ 				get: getter,
      /** ****/ 			});
    /** ****/ 		}
  /** ****/ 	};
/** ****/
/** ****/ 	// getDefaultExport function for compatibility with non-harmony modules
  /** ****/ 	__webpack_require__.n = function (module) {
    /** ****/ 		const getter = module && module.__esModule ?
/** ****/ 			function getDefault() { return module.default; } :
/** ****/ 			function getModuleExports() { return module; };
    /** ****/ 		__webpack_require__.d(getter, 'a', getter);
    /** ****/ 		return getter;
  /** ****/ 	};
/** ****/
/** ****/ 	// Object.prototype.hasOwnProperty.call
  /** ****/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/** ****/
/** ****/ 	// __webpack_public_path__
  /** ****/ 	__webpack_require__.p = '';
/** ****/
/** ****/ 	// Load entry module and return exports
  /** ****/ 	return __webpack_require__(__webpack_require__.s = 4);
/** ****/ }([
/* 0 */
/** */ (function (module, exports, __webpack_require__) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  const Vector = (function () {
    function Vector(x, y) {
      _classCallCheck(this, Vector);

      this.x = x;
      this.y = y;
    }

    _createClass(Vector, null, [{
      key: 'add',
      value: function add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
      },
    }]);

    return Vector;
  }());

  exports.default = Vector;
/** */ }),
/* 1 */
/** */ (function (module, exports, __webpack_require__) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

  const _vector = __webpack_require__(0);

  const _vector2 = _interopRequireDefault(_vector);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/**
 * It is one-dimensional array where (x, y) value you can find by getting [x + width * y]
 */

  const Grid = (function () {
    function Grid(width, height) {
      _classCallCheck(this, Grid);

      this.grid = new Array(width * height);
      this.width = width;
      this.height = height;
      this.directions = {
        up: new _vector2.default(0, -1),
        ur: new _vector2.default(1, -1),
        e: new _vector2.default(1, 0),
        se: new _vector2.default(1, 1),
        s: new _vector2.default(0, 1),
        sw: new _vector2.default(-1, 1),
        w: new _vector2.default(-1, 0),
        ul: new _vector2.default(-1, -1),
      };
    }

    _createClass(Grid, [{
      key: 'get',
      value: function get(vector) {
        return this.grid[vector.x + this.width * vector.y];
      },
    }, {
      key: 'set',
      value: function set(vector, value) {
        this.grid[vector.x + this.width * vector.y] = value;
      },
    }, {
      key: 'forEach',
      value: function forEach(fn, context) {
        for (let y = 0; y < this.height; y += 1) {
          for (let x = 0; x < this.width; x += 1) {
            const value = this.grid[x + y * this.width];
            if (value != null) {
              fn.call(context, value, new _vector2.default(x, y));
            }
          }
        }
      },
    }, {
      key: 'free',
      value: function free(x, y) {
        const _this = this;

        return !this.directions.some(vector => _this.get(new _vector2.default(x, y).add(vector)) === 'X');
      },
    }]);

    return Grid;
  }());

  exports.default = Grid;
/** */ }),
/* 2 */
/** */ (function (module, exports, __webpack_require__) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

  const _vector = __webpack_require__(0);

  const _vector2 = _interopRequireDefault(_vector);

  const _grid = __webpack_require__(1);

  const _grid2 = _interopRequireDefault(_grid);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  const Game = (function () {
    function Game(canvas, options) {
      _classCallCheck(this, Game);

      const defaults = {
        width: 100,
        height: 100,
        cellSize: 10,
        rules: '23/3',
        gridColor: '#eee',
        cellColor: '#ccc',
      };
      this.canvas = canvas;
      this.options = options;
      this.ctx = canvas.getContext('2d');
      this.step = 0;
      this.options = Object.assign(defaults, options);

      this.grid = new _grid2.default(100, 100);
    }

    _createClass(Game, [{
      key: 'step',
      value: function step() {
      // get all alive cells
      // calculate next step
      // update grid
      },
    }]);

    return Game;
  }());

  exports.default = Game;
/** */ }),
/* 3 */
/** */ (function (module, exports, __webpack_require__) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  function get(url) {
    return fetch(url).catch((err) => {
    // todo: handle the fetch error
    });
  }

  function postRequest() {
    return fetch(url).catch((err) => {
    // todo: handle the fetch error
    });
  }

  exports.default = { get, post: postRequest };
/** */ }),
/* 4 */
/** */ (function (module, exports, __webpack_require__) {
  const _vector = __webpack_require__(0);

  const _vector2 = _interopRequireDefault(_vector);

  const _grid = __webpack_require__(1);

  const _grid2 = _interopRequireDefault(_grid);

  const _game = __webpack_require__(2);

  const _game2 = _interopRequireDefault(_game);

  const _http = __webpack_require__(3);

  const http = _interopRequireWildcard(_http);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  http.get('/endpoint').then((response) => {
    if (response.status !== 200) {
    // todo: handle the error
      return;
    }
    response.json().then((data) => {
      console.log(data);
    });
  });

  http.post;
/** */ }),
/******/ ]));
// # sourceMappingURL=app.bundle.js.map
