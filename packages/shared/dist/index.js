"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var useHello = function () {
  console.log("Hello World!!!!!");
};

var Provider = function () {
  useHello();
  return null;
};

exports.Provider = Provider;
exports.useHello = useHello;
