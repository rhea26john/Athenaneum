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

      <div>
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
      </div>

      <div>
        <el-button v-if="!isLoggedIn" @click="goToLogin">Log in</el-button>
        <el-button v-if="!isLoggedIn" @click="goToSignUp">Sign up</el-button>
        <el-button v-else @click="logOut">Log out</el-button>
      </div>
    </div>
    <div id="main">
      <div class="content-wrapper">
        <div id="booklist">
          <div>
            <el-table :data="bookdata" style="width: 100%">
              <el-table-column prop="title" label="Title" width="200">
                <template slot-scope="scope">
                  <div @click="bookDetail(scope.row.id)">
                    <a href="javascript:;">{{ scope.row.title }}</a>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="author" label="Author" width="150">
              </el-table-column>
              <el-table-column
                prop="published_date"
                label="Published Date"
                width="150"
              >
              </el-table-column>
              <el-table-column
                prop="description"
                label="Description"
                width="350"
              >
              </el-table-column>
              <el-table-column prop="content" label="Content" width="350">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div>
        <el-pagination background layout="prev, pager, next" :total="100">
        </el-pagination>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      input1: "",
      url: require("@/img/book-logo2.png"),
      bookdata: [], // 添加一个新属性以存储获取到的图书列表
      // isLoggedIn:false,
      fill: "fill",
    };
  },
  computed: {
    isLoggedIn: function () {
      return localStorage.getItem("isLoggedIn") == "true" ? true : false;
    },
  },
  methods: {
    bookDetail(id) {
      this.$router.push({ path: "/bookDetail/" + id });
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
  created() {
    this.fetchBooks();
  },
};
</script>

<style>
/* #home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} */
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

.logo-image {
  vertical-align: middle;
  width: 100px;
  height: auto;
}
</style>
