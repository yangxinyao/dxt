<template>
<div>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="160px">
        <el-row class="tac">
          <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-submenu v-for="(item,index) in menu" :index="index+'1'" :key='index'>
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="(v,i) in item.submenus" :index="index+'1'+'-'+i+1" :key='i'>
          <router-link  :to='{name:v.type}'>{{v.name}}</router-link>
        </el-menu-item>
        </el-submenu>
      </el-menu>
      </el-col>
      </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>

</template>
<script>
import {mapState,mapActions,mapGetters} from "vuex"

export default {
  name: "",
  data() {
    return {
  
    }; 
  },

  mounted(){ 
   this.$store.dispatch('getUserState');
  },
  methods: {
  // ...mapActions(['getUserState'])
  },
  computed:{
    ...mapState(['menu']),
  }
};
</script>
<style scoped>
.el-header{
 text-align: center;
 box-shadow: 0px  2px 5px  skyblue;
}
.el-aside{
  margin-top:5px;
  overflow: hidden;
}
</style>

