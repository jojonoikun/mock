/*
 * @Author: JOJOcode
 * @Date: 2022-11-12 15:00:49
 * @LastEditTime: 2022-11-12 22:50:45
 * @FilePath: \demo_mock\mock\mock\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //在发送请求时，会先在devServer指定的函数在进行处理，如果在devServer在没有对应的接口路由，才会请求外网等操作
  // devServer: {
  //   // require导入模块 函数
  //   before: require("./src/mock_test/index"),
  // },
});

// 在vue.config.js中配置devServer, 在before属性中引入接口路由函数
