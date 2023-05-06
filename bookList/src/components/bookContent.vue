<template>
  <div id="bookContent">
    <div id="header">
      <div id="imag">
        <el-image :src="url" :fit="fill" class="logo-image">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div id="navigator">
        <el-button type="text">Create</el-button>
        <el-button type="text">Vote</el-button>
        <el-button type="text">Comment</el-button>

        <div id="log">
          <el-button v-if="!isLoggedIn" @click="goToLogin">Log in</el-button>
          <el-button v-if="!isLoggedIn" @click="goToSignUp">Sign up</el-button>
          <el-button v-else @click="logOut">Log out</el-button>
        </div>
      </div>
    </div>
    <div id="main">
      <div id="bookName" class="bookContent">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input book name: "
          v-model="bookContent"
        >
        </el-input>
      </div>
      <div id="authorName" class="bookContent">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input author name: "
          v-model="bookContent"
        >
        </el-input>
      </div>
      <div id="content" class="bookContent">
        <el-input
          type="textarea"
          :rows="15"
          placeholder="Please input book Content: "
          v-model="bookContent"
        >
        </el-input>
      </div>
      <div id="comment" class="bookContent">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="Comment:"
          v-model="comment"
        >
        </el-input>
      </div>
      <div>
        <el-button>Save</el-button>
        <el-button>Create</el-button>
      </div>
    </div>
    <div id="footer">
      <div class="footer-container">
        <div class="footer-text">
          Powered by
          <span class="footer-highlight">Internet Technology Group</span>
          of
          <span class="footer-highlight">University of Glasgow</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      bookContent: "",
      comment: "",
      url: require("@/img/book-logo2.png"),
      isLoggedIn: false,
    };
  },
  methods: {
    logOut() {
      // 在此处实现注销逻辑
      this.isLoggedIn = false;
    },
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
    goToSignUp() {
      this.$router.push({ name: "SignUp" });
    },
  },
};
</script>
  
  <style>
#log {
  margin: 0px 0px 0px 30px;
}
/* #header {
  display: flex;
  justify-content: space-between;
} */

/* .button-container {
  margin: 0px 20px 0px 20px;
} */
.el-dropdown-link {
  background-color: #fff;
  color: #333;
}
.el-dropdown-link:hover {
  color: #409eff;
}
#main {
  padding: 20px 20px 20px 20px;
}
.bookContent {
  margin: 0px 0px 10px 0px;
}
/* .button-container {
  display: flex;
  align-items: center;
} */

/* #navigator {
  display: flex;
  align-items: center;
} */

/* .el-button {
  background-color: #ffffff;
  color: rgb(120, 120, 120);
  margin: 0px 10px;
  vertical-align: middle;
} */
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 20px;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.footer-text {
  font-size: 14px;
  font-weight: normal;
}

.footer-highlight {
  font-weight: bold;
  color: #333333;
}
</style>