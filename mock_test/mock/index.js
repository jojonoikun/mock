/*
 * @Author: JOJOcode
 * @Date: 2022-11-12 14:31:01
 * @LastEditTime: 2022-11-21 14:57:29
 * @FilePath: \mock_test\mock\index.js
 */

const express = require("express");
const app = express();

// 允许跨域  让前后端不同端口允许访问
app.use(require("cors")());

//让express识别前端提交过来的数据
app.use(express.json());
const Mock = require("mockjs");

// 创建一个随机数据对象
var data = Mock.mock({
  code: 0,
  data: {
    "name|count": "★★★",
    userName: "@cname",
    "age|10-30": 17,
    email: "@email",
    token: "123456",
  },
});

// 定义接口路由，在接口中返回mock模拟数据  (暴露一个服务器的函数)
module.exports = function (app) {
  app.use("/api/userinfo", (req, res) => {
    // 把模拟数据转成json返回前端
    res.json(data);
  });
};

app.listen(3001, () => {
  console.log("http://localhost:3001");
});
