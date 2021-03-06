#! /usr/bin/env node
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var args = [].concat(_toConsumableArray(process.argv)).slice(2);

var App = function () {
    function App(appRoot, projectRoot, args) {
        _classCallCheck(this, App);

        //node 脚本根目录
        this.appRoot = appRoot;
        //脚本当前的运行目录
        this.projectRoot = projectRoot;
        //用户输入的参数
        this.args = args;
        //创建一个用于用户交互的问答功能
        this.prompt = _inquirer2.default.createPromptModule();
        this.welcome(); //显示欢迎信息

        this.captureUserData();
    }

    //显示程序信息


    _createClass(App, [{
        key: 'welcome',
        value: function welcome() {
            console.log(_chalk2.default.yellow(_figlet2.default.textSync('BIN EXAMPLE', { horizontalLayout: 'full' })));
            //打印用户输入的参数，如果有的话
            args.length && console.log('user args:', args);
        }

        //获取用户输入的内容

    }, {
        key: 'captureUserData',
        value: function captureUserData() {
            var _this = this;

            console.log('handle user type example');
            this.q1().then(function () {
                console.log('q1 done: ' + _this.q1val);
                return _this.q2();
            }).then(function () {
                console.log('q2 done: ' + _this.q2val);
            });;
        }
    }, {
        key: 'q1',
        value: async function q1() {
            var data = await this.prompt(Q_1);
            this.q1val = (data.q1val || '').trim();
        }
    }, {
        key: 'q2',
        value: async function q2() {
            var data = await this.prompt(Q_2);
            this.q2val = (data.q2val || '').trim();
        }
    }]);

    return App;
}();

var Q_1 = [{
    "name": "q1val",
    "type": "input",
    "message": "q1: 请随便输入点什么~"
}];
var Q_2 = [{
    "name": "q2val",
    "type": "input",
    "message": "q2: 请再随便输入点什么~"
}];

var app = new App(_path2.default.resolve(__dirname, '..'), process.env.PWD, args);