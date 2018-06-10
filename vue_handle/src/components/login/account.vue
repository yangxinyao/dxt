<template>
<div>
    <span>登录账号</span>
       <el-form :model="loginAccount" ref='from'  label-width="100px" >
             <el-form-item prop='account' label="用户" :rules="rules" >
               <el-input v-model="loginAccount.account" placeholder="请输入手机号或邮箱" ></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="checkValidate('phone')" :disabled='phoneFlag'>{{phoneMsg}}</el-button>
                <el-button type="primary" @click="checkValidate('email')">{{emaliMsg}}</el-button>
            </el-form-item>
        </el-form>
        <el-form label-width="100px" label='动态密码' >
          <el-form-item>
           <el-input  placeholder="请输入动态密码"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click='loginClick' >登录</el-button>
</div>
    
</template>
<script>
export default {
    data(){
    
       return{
         phoneMsg: "手机号获取动态密码",
         emaliMsg:"邮箱获取动态密码",
         phoneFlag:false,
         emaliFlag:false,
         timer:null,
         loginAccount:{
            account:""
         },
         rules:[
                {required: true, message: '请输入账户信息',trigger: 'blur' },
              ]
        }
    },
   methods: {
//倒计时
    countDown(type){
        let startNum=5; 
        this.timer=setInterval(()=>{
        startNum--;
        type=='phone'?
        (this.phoneMsg=startNum+'s后重新获取',this.phoneFlag=true)
        :(this.emaliMsg=startNum+'s后重新获取',this.emaliFlag=true)
        if(startNum<=0){
          clearInterval(this.timer)
          startNum=5;
          type=='phone'?
          (this. phoneMsg= "手机号获取动态密码",this.phoneFlag=false)
          :(this. emaliMsg="邮箱获取动态密码",this.emaliFlag=false)
          
        }
      },1000)
    },
    checkValidate(type){
      if(this.rules.length>1){
         this.rules.shift()
      }
      if(type=='phone'){
          this.rules.push({validator:(rule,value,callback)=>{
            console.log(value)
          if(/^1[3578]\d{9}/.test(value)){
             callback()
          }else{
            callback(new Error('请输入正确格式的手机号'))
          }
        }, message: '请输入正确的手机号',trigger: 'blur'})
      }else if(type=='email'){
          this.rules.push({type, message: '请输入正确的邮箱',trigger: 'blur'})
      }
      this.$refs.from.validate((isValid,rules)=>{
        console.log(isValid)
          if(isValid){
           this.countDown(type)
          //  sessionStorage.setItem('isLogin',1)
          }
      })
    },
    //点击登录
    loginClick(){
       sessionStorage.setItem('isLogin',1)
       this.$router.push('/home')
    }
  }
}
</script>
<style>
</style>
