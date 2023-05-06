<!-- cxy -->
<template>
  <div id="home">
    <div id="header">
      <div>
        <el-image :src="url" :fit="fill" class="logo-image">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div id="navigator">
        <el-dropdown class="nav-item">
          <span class="el-dropdown-link">
            Categories<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Category1</el-dropdown-item>
            <el-dropdown-item>Category2</el-dropdown-item>
            <el-dropdown-item>Category3</el-dropdown-item>
            <el-dropdown-item>Category4</el-dropdown-item>
            <el-dropdown-item>Category5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="text" class="nav-item">Recommendations</el-button>
        <el-button type="text" class="nav-item">Rankings</el-button>
      </div>

      <!-- <div>
        <el-input
          placeholder="Please enter the content"
          v-model="input1"
          class="input-with-select"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="searchBooks"
          ></el-button>
        </el-input>
      </div> -->

      <div>
        <el-button v-if="!isLoggedIn" @click="goToLogin">Log in</el-button>
        <el-button v-if="!isLoggedIn" @click="goToSignUp">Sign up</el-button>
        <el-button v-else @click="logOut">Log out</el-button>
      </div>
    </div>
    <div id="main">
      <div class="content-wrapper">
        <div class="book-info">
          <el-image :src="imageUrl" :fit="fill" class="book-image">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="book-text">
            <div id="bookName" class="bookContent">
              <div class="label">Title:</div>
              <el-input
                type="textarea"
                :rows="1"
                v-model="bookName"
                readonly
              ></el-input>
            </div>
            <div id="authorName" class="bookContent">
              <div class="label">Author:</div>
              <el-input
                type="textarea"
                :rows="1"
                v-model="authorName"
                readonly
              ></el-input>
            </div>
          </div>
        </div>
        <div id="content" class="bookContent">
          <div class="label">Content:</div>
          <el-input type="textarea" :rows="15" v-model="bookContent" readonly>
          </el-input>
        </div>
        <!-- <div id="comment" class="bookContent">
          <div class="label">Comment:</div>
          <el-input type="textarea" :rows="5" v-model="comment" readonly>
          </el-input>
        </div> -->
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
import axios from "axios";

export default {
  data() {
    return {
      bookName: "",
      authorName: "",
      bookContent: "",
      url: require("@/img/book-logo2.png"),
      bookdata: [], // 添加一个新属性以存储获取到的图书列表
      // isLoggedIn:false,
      fill: "fill",
      imageUrl: "",
    };
  },
  computed: {
    isLoggedIn: function () {
      return localStorage.getItem("isLoggedIn") == "true" ? true : false;
    },
  },
  methods: {
    fetchBookById() {
      window.vue = this;
      axios
        .get(window.requestURL + "/book/reading/" + this.$route.params.id)
        .then((response) => {
          var bookdata = response.data.book[0].fields;
          this.bookName = bookdata.title;
          this.authorName = bookdata.author;
          this.bookContent = bookdata.content;
          this.imageUrl = encodeURI(
            window.requestURL + "/static/pic/" + bookdata.title + ".jpg"
          );
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    },
    logOut() {
      axios
        .get(window.requestURL + "/logout/")
        .then((response) => {
          if (response.data.status == "success") {
            localStorage.setItem("isLoggedIn", false);
            this.$router.push("/");
          } else {
            window.alert("Logout failed.");
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    },
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
    goToSignUp() {
      this.$router.push({ name: "SignUp" });
    },
    fetchBooks() {
      axios
        .get(window.requestURL + "/book/list/")
        .then((response) => {
          this.bookdata = response.data.books;
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    },
    searchBooks() {
      axios
        .get(window.requestURL + "/book/search/", {
          params: {
            query: this.input1,
          },
        })
        .then((response) => {
          this.bookdata = response.data.books;
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    },
  },
  mounted() {
    this.fetchBookById();
  },
};
</script>
  
  <style>
/* #home {
    display: flex;
  } */
.book-info {
  display: flex;
  align-items: center;
}

.book-text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.nav-item {
  margin-right: 15px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-icon-arrow-down {
  font-size: 12px;
}

#header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
}
#navigator {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.dropdown-container {
  margin-right: 20px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}

.el-input {
  width: 300px;
}
.input-with-select {
  background-color: #fff;
}
.el-button {
  background-color: #ffffff;
  color: rgb(120, 120, 120);
}
.el-dropdown-link {
  background-color: #fff;
  color: #333;
}
.el-dropdown-link:hover {
  color: #409eff;
}
#main {
  display: flex;
  flex-direction: column;
  margin: 20px 0px 20px 0px;
}
.content-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#booklist {
  display: flex;
  justify-content: space-around;
}
#footer {
  display: flex;
  justify-content: space-around;
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
.logo-image {
  vertical-align: middle;
  width: 100px;
  height: auto;
}
.label {
  font-weight: bold;
  text-align: left;
  width: 100%;
}
.book-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
}
</style>
  