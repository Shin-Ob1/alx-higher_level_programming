#!/usr/bin/node

exports.esrever = function (list) {
  for (let i = 0, len = list.length - 1; i < len; i++, len--) {
    [list[i], list[len]] = [list[len], list[i]];
  }
  return list;
};
