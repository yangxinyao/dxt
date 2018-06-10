<template>
    <div>
        <el-container>
            <el-header>
                <h1>电信通</h1>
            </el-header>
            <el-container>
                <el-tabs type="border-card">
                    <el-tab-pane>
                        <span slot="label" @click="loginWay='qrcode'">
                            <i class="icon iconfont icon-erweima"></i>
                             二维码登录
                        </span>   
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label" @click="loginWay='account'">
                            <i class="icon iconfont icon-wode1"></i>账号登录
                        </span>
                    </el-tab-pane>
                    <div>
                       <Component :is='loginWay'>

                       </Component>
                    </div>      
                </el-tabs>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import qrcode from './qrcode.vue'
import account from './account.vue'
export default {
  name: "index",
  data() {
    return {
      loginWay:"qrcode",
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  components:{
    qrcode,
    account
  },
 
};
</script>
<style scoped>
</style>