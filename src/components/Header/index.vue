<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import api from "./api"; // 导入请求模块
// import { mapState, mapMutations } from "vuex"; // 导入辅助函数

export default {
  name: 'home',
  data() {
  return {
    msg: ''
  },
},
  methods: {
    toSearch() {
    this.$router.push({
              // path:"/search",
              // query:{
              //     ...this.$route.query,
              //     keyword:this.keyword
              
          });
      },
    }
  }
</script>

<style scoped></style>
