<!--
 * @Author: JOJOcode
 * @Date: 2022-11-12 21:07:56
 * @LastEditTime: 2022-11-12 22:46:00
 * @FilePath: \mock_test\src\App.vue
-->
<!--
 * @Author: JOJOcode
 * @Date: 2022-11-12 21:07:56
 * @LastEditTime: 2022-11-12 21:15:45
 * @FilePath: \mock\src\App.vue
-->
<template>
  <div>Hello Mock</div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  created() {
    axios
      .get("/api/userinfo")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error", error);
        console.log(error.response);
      });
  },
};
</script>
