<template>
  <div id="app">
    <router-view></router-view>
    <!-- <bookContent></bookContent> -->
    <!-- <bookDetail></bookDetail> -->
    <!-- <book-list></book-list> -->
  </div>
</template>
<script>
//import BookList from './components/bookList.vue';
// import bookContent from "./components/bookContent.vue";
//import signUp from "@/components/signUp.vue";
//import login from "./components/login.vue";
//import bookDetail from "./components/bookDetail.vue";
export default {
  name: "App",
  components: {
    //"book-list": BookList,
    // bookContent: bookContent,
    //"login": login,
    //"signUp": signUp,
    //bookDetail: bookDetail,
  },
  created() {
    // window.requestURL="http://localhost:8000";
    window.requestURL = "https://55w982c487.yicp.fun";
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>





