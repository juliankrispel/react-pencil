#!/usr/bin/env node
"use strict";

var _commander = require("commander");

var _commander2 = _interopRequireDefault(_commander);

var _findRoot = require("find-root");

var _findRoot2 = _interopRequireDefault(_findRoot);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version("0.0.1").usage("[options] <file ...>").parse(process.argv);

var modulePath = _commander2.default.args[0];

console.log(_path2.default.join(process.cwd(), modulePath));

//findRoot(modulePath);

