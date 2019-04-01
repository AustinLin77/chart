<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">人事报表系统</div>
            <el-form :model="loginDatas" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="loginDatas.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="loginDatas.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p class="login-tips">Tips : 根据用户名密码登陆。</p>
            </el-form>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data: function() {
    return {
      loginDatas: {
//        username: "wuy",
//        password: "123456",
        danxuan:"活动界面",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created: function() {

  },
  methods: {
    submitForm(formName) {
      let vm = this;
      this.$refs[formName].validate(async valid => {
        if (valid) {
            vm.$router.push("/");
            localStorage.setItem('draw_user',JSON.stringify({name:'wuyi'}));
//          let res = await this.$fetch(vm.$path + "active2/toLogin.json",
//                    {
//                        managerName : vm.loginDatas.username,
//                        managerPassword : vm.loginDatas.password
//                    });
//          console.log(res);

        }
      });
    },


  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url(../../assets/loginbg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
