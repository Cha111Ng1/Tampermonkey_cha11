// ==UserScript==
// @name        「Hook Script」fuck断点
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  一些用于hook的常用断点，禁用无限debug
// @author       Cha111Ng1
// @match        http*://*/*
// @icon         data:image/png;base64,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
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    // 取消vm debug
    (function(){}).constructor === Function;
    Function.prototype.constructor = function(){};

    'use strict';
    console.log('# ++++++++++++++++++++++++++++++++++++++++++')
    console.log('# +  微信公众号：攻有道       By:Cha111Ng1    +')
    console.log('# ++++++++++++++++++++++++++++++++++++++++++')

  var userChoices = prompt(" ━━━━━━️☠─────── \n请选择要启动的插件（多选用逗号分隔）\n ━━━━━━️☠─────── \n1. JSON.parse调用断点\n2. 每当尝试设置document.cookie时断点\n3.每当调用XMLHttpRequest时断点\n4.当发送POST请求时断点");

  if (userChoices) {
    var choicesArray = userChoices.split(',').map(function (choice) {
      return choice.trim();
    });

    choicesArray.forEach(function (chosenPlugin) {
      switch (chosenPlugin) {
          case '1':
              //alert("JSON.parse调用断点");
              var _parse = JSON.parse;
              JSON.parse = function (arg) {
                  console.log("[+]「油猴」JSON.parse调用断点:",arg);
                  debugger;
                  return _parse(arg);
              };
              break;

          case '2':
              //alert("每当尝试设置document.cookie时断点");
              Object.defineProperty(document, "cookie", {
                  set: function (a) {
                      debugger;
                  }
              });
              break;
          case '3':
              //alert("每当调用XMLHttpRequest.prototype.open时断点");
              var _open = XMLHttpRequest.prototype.open;
              XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
                  console.log("[+]「油猴」调用XMLHttpRequest.prototype.open断点:", method, url);
                  debugger;
                  return _open.apply(this, arguments);
              };
              break;
          case '4':
              //alert("每当调用XMLHttpRequest.prototype.send时断点");
              var _send = XMLHttpRequest.prototype.send;

              XMLHttpRequest.prototype.send = function (data) {
                  console.log("[+]「油猴」POST请求发送数据:", data);
                  debugger;
                  _send.apply(this, arguments);
              };
              break;

          default:
              alert("未知插件：" + chosenPlugin);
              break;
      }
    });
  } else {
    //alert("没有选择插件");
    console.log("[x]没有选择插件")
  }
})();