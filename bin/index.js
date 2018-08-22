#! /usr/bin/env node
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App(appRoot, projectRoot) {
        _classCallCheck(this, App);

        this.appRoot = appRoot;
        this.projectRoot = projectRoot;

        this.welcome();
    }

    _createClass(App, [{
        key: 'welcome',
        value: function welcome() {
            console.log(_chalk2.default.yellow(_figlet2.default.textSync('GLOBAL EXAMPLE', { horizontalLayout: 'full' })));
        }
    }, {
        key: 'sayHello',
        value: function sayHello() {}
    }]);

    return App;
}();

var app = new App(_path2.default.resolve(__dirname, '..'), process.env.PWD);