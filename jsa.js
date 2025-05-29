"use strict";
let cl = console.log;
// 简写document.write()
function dw(x) {
  document.write(x);
}

// 分割线
function lzf() {
  dw("<br />================================================================<br /><br />");
  cl("<br />================================================================<br /><br />");
}

// 编辑功能
function makeEditable() {
  document.body.contentEditable = true;
}

// 练习学习study
// 对象
const user = {
  name: "John",
  age: 30,
  "likes birds": true,
};
/*
for (let key in user) {
  cl(`${key}: ${user[key]}`)
}
*/

document.addEventListener("DOMContentLoaded", function() {
  let js = document.getElementById("js");
  let list = document.getElementById("list");
  list.appendChild(js);
    
});
