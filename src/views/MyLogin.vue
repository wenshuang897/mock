<template>
  <div class="login">
    <div class="myform">
      <div class="title">
        <h3>seec3后台管理系统</h3>
      </div>
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input placeholder="密码" v-model="formdata.pw"></el-input>
          <!--  -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitfn">
            登录</el-button
          >
        </el-form-item>
      </el-form>
      <p class="tip">温馨提示</p>
      <p class="tip">未登陆过的新用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </div>
  </div>
</template>
<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    // 自定义正则验证
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("用户格式不对"));
    };
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{2,6}$/;
      if (rg.test(value)) return;
      return callback(new Error("用户格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: 123456
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }]
      },
      newdebouncefn: null //用于接受防抖封装后的业务函数
    };
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn,2000);
    //    就是饭都封装后的新的业务函数
  },
  methods: {
    submitfn(){
      //   点击提交业务
      this.newdebouncefn();
    },
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let {data} = await instance.post("/login", {user,pw })
        // .then((res) => console.log(res.data));
        console.log(data)
        if(data.message =='fail')return this.$message.error("登陆失败")
        if(data.message =='success'){
             // 存token
             localStorage.setItem("token",data.data.token)
            this.$message({
                type:"success",
                message:"登录成功",
                duration:2000,
                onClose:()=>{ //箭头函数指向定义是的对象  指向vue
                    this.$router.push({name:"haha"})
                }
               
            })
        }
    }
  }
};
</script>
<style scoped>
.login {
  background-color: #324057;
  width: 100vw;
  height: 100vh;
}
.login .title {
  width: 370px;
  text-align: center;
  color: #fff;
  position: absolute;
  left: 50%;
  margin-left: -185px;
  top: -80px;
}
.login .myform {
  box-sizing: border-box;
  width: 370px;
  height: 260px;
  padding: 20px 20px 60px;
  /* border: 1px solid green; */
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -185px;
  margin-top: -130;
  background-color: #fff;
}
.login .btn {
  width: 100%;
}
.tip {
  font-size: 12px;
  color: red;
  text-align: center;
}
</style>
