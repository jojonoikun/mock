<!--
 * @Author: JOJOcode
 * @Date: 2022-11-12 13:36:52
 * @LastEditTime: 2022-11-21 15:00:46
 * @FilePath: \mock\src\App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
import axios from "axios";

// 本地导入mock   前提是npm install mock
// const Mock = require("mockjs");
// var data = Mock.Mock({ "username|6": "^*&" });
// console.log(data);

export default {
  name: "App",
  components: {},

  // 第一种： fastmock 网络mock
  mounted() {
    const beaseUrl =
      "https://www.fastmock.site/mock/67b4bae28e695e9a13dc0734c44d5053/api";
    // 请求地址是$baseUrl 拼接上测试地址 /test
    axios.get(`${beaseUrl}/test`).then(({ data }) => {
      // 这里的{ data }是res请求对象的data解构赋值出来的  res.data
      //相当于 console.log("data:", res.data);
      console.log("data:", data);
    });
  },

  // 第二种 本地mock  配置本地(分3步:一、定义接口路由 二、在vue.config.js中配置devServer, 在before属性中引入接口路由函数  三、使用axios调用该接口获取数据)
  // created() {
  //   axios.get("/api/userInfo/").then((res) => {
  //     console.log("data:", res.body);
  //     console.log("data:", res.data);
  //   });
  // },
};
</script>
