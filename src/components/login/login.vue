<template>
  <div>
    <div class="login_container">
      <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.userName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formLabelAlign.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item class="tc">
          <v-btn class="submit_btn" size="large" type="primary" @click="onSubmit">登录</v-btn>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
console.log("logining");

export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        userName: "",
        pwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const { userName, pwd } = this.formLabelAlign;
      if (!userName) {
        this.$message.error("请输入账号");
        return;
      }

      if (!pwd) {
        this.$message.error("请输入密码");
        return;
      }

      // LeanCloud - 登录
      // https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
      this.$AV.User.logIn(userName, pwd).then(
        function(loginedUser) {
          // 登录成功，跳转到商品 list 页面
          console.log("Login!");

          this.$router.push("/");
        },
        function(error) {
          alert(JSON.stringify(error));
        }
      );

      // const data = {
      //   userName,
      //   pwd,
      // }
      // this.$http.post('common/login', data).then(res => {
      //   if(res.success) {
      //     this.$router.push('/')
      //   }
      // })
    }
  }
};
</script>
<style scoped>
.login_container {
  padding-top: 30vh;
  height: 70vh;
  margin: auto;
  width: 250px;
}

.submit_btn {
  display: inline-block;
  width: 200px;
}
</style>
