<template>
  <div id="login">
    <div class="form-container">
      <div class="form-title">Login</div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <div class="button-container">
          <el-button type="primary" @click="submitForm">Login</el-button>
          <el-button @click="resetForm">Reset</el-button>
        </div>
      </el-form>
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
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please enter your username",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          axios.post(window.requestURL+"/accounts/login/",this.loginForm)
            .then(response => {
              if(response.data.status=="success"){
                localStorage.setItem("isLoggedIn",true);
                this.$router.push({path:"/"});
              }else{
                window.alert("Incorrect username or password.");
              }
            })
            .catch((error) => {
              console.error("An error occurred:", error);
            });
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
  },
};
</script>
    
<style>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
}

.form-container {
  width: 400px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 5px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.el-form-item__label {
  font-weight: bold;
  color: #333333;
}

.el-button {
  background-color: #ffffff;
  color: #333333;
}

.el-button--primary {
  background-color: #409eff;
  color: #ffffff;
}

.el-input {
  width: 100%;
}

.el-input__inner {
  border-radius: 5px;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 20px;
}
</style>  