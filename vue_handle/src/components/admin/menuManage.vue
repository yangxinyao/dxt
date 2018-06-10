<template>
    <div>
      <el-container>
         <el-aside width="200px"> 
        <!-- show-checkbox 显示选中框  expand-on-click-node 点击节点时是否展开 -->
          <el-tree
            :data="treeData" node-key="id"
            :props="defaultProps"
            :expand-on-click-node="true"
             @node-click="menuRoute">
          </el-tree>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>
        
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    computed:{
     ...mapState(['treeData'])
    },
    mounted(){
    //调用的数据
     this.tofechTree();
    
    },
    methods:{
        //获取数据
        tofechTree(){
            this.treeMenu()
        },
        menuRoute(state){
          let path=this.$router.history.current.path
           console.log(path)
          if(state.type){
            if(path=="/home/menuManage"){
               this.$router.push(path+"/"+state.type) 
            }else{
              path="/home/menuManage";
              this.$router.push(path+"/"+state.type) 
            }   
          }
        },
       ...mapActions(["treeMenu"])
    }
  };
</script>
<style>


</style>

