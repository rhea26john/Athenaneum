<template>
  <div id="register">
    <div class="form-container">
      <div class="form-title">Register</div>
      <el-form
        ref="registerForm"
        :model="registerForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="Username" prop="username">
          <el-input
            v-model="registerForm.username"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="registerForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password1">
          <el-input
            v-model="registerForm.password1"
            type="password"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="password2">
          <el-input
            id="last"
            v-model="registerForm.password2"
            type="password"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <div class="button-container">
          <el-button type="primary" @click="submitForm">Register</el-button>
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
      registerForm: {
        username: "",
        email: "",
        password1: "",
        password2: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please enter your username",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please enter a valid email address",
            trigger: ["blur", "change"],
          },
        ],
        password1: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password length should be at least 6 characters",
            trigger: "blur",
          },
        ],
        password21: [
          {
            required: true,
            message: "Please confirm your password",
            trigger: "blur",
          },
          {
            validator: this.validateConfirmPassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    validateConfirmPassword(rule, value, callback) {
      if (value !== this.registerForm.password1) {
        callback(new Error("The two passwords do not match"));
      } else {
        callback();
      }
    },
    submitForm() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          // perform register action
          axios.post(window.requestURL+"/register/",this.registerForm)
            .then(response => {
              if(response.data.status=="success"){
                window.alert("Register success. Please login.");
                this.$router.push("/login");
              }else{
                window.alert("Register failed.");
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
      this.$refs.registerForm.resetFields();
    },
  },
};
</script>
    
    <style>
#register {
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
  justify-content: center;
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
#last {
  margin: 20px 0px 0px 0px;
}
</style>
  