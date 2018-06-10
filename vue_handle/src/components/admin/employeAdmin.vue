<template>
    <div>
    <el-form :inline="true" :model="fromItem" class="demo-form-inline">
  <el-form-item label="用户姓名">
    <el-input v-model="fromItem.user" size="small" ></el-input>
  </el-form-item>
   <el-form-item label="用户姓名">
    <el-input v-model="fromItem.user" size="small" ></el-input>
  </el-form-item>
   <el-form-item label="用户姓名">
    <el-input v-model="fromItem.user" size="small" ></el-input>
  </el-form-item>
  <el-form-item label="归属组织">
     <el-popover placement="bottom" width="400" trigger="click" @after-enter='toFetchGroup'>
        <el-container direction='vertical'  v-loading="loading" >
            <el-form>
                <el-input class="el-input-width" size="small" v-model="groupData" ></el-input>
                <el-button type="primary" size="small" @click="formStr=groupData">查询</el-button>
            </el-form>
            <el-table :data="filterGroup()(formStr)" height='300' @row-click='rowClick'>
                <el-table-column width="50" type="index" label="序号"></el-table-column>
                <el-table-column width="150" property="ORGNAME" label="组织名称"></el-table-column>
                <el-table-column width="300" property="FORGNAME" label="上级组织"></el-table-column>
            </el-table>
        </el-container>
        <el-input placeholder="请输入内容"  suffix-icon="el-icon-arrow-down"  
             v-model="from" slot="reference">
        </el-input>
     </el-popover>
  </el-form-item>
  <el-form-item>
     <el-button type="primary"  size="small">查询</el-button>
  </el-form-item>
  <el-form-item class="posRight">
     <el-button type="primary"  size="small" @click='addBox' >新增</el-button>
  </el-form-item>
</el-form>

<!-- 列表 -->
<el-table size="small" :data="tableData" border  style="width: 100%">
   <el-table-column fixed type="index" label="序号" ></el-table-column>
   <el-table-column prop="name" label="姓名" width="80"></el-table-column>
   <el-table-column prop="id" label="员工ID" width="120" :show-overflow-tooltip="true"></el-table-column>
   <el-table-column prop="code" label="员工编号" width="100"></el-table-column>
   <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
   <el-table-column prop="email" label="邮箱"  width="120" :show-overflow-tooltip="true"></el-table-column>
   <el-table-column prop="org"  label="归属组织" width="120"></el-table-column>
   <el-table-column prop="auth" label="权限" width="120"></el-table-column>
   <el-table-column prop="forg"  label="上级组织"  width="120" :show-overflow-tooltip="true"></el-table-column>
   <el-table-column prop="date" label="创建日期" width="150"></el-table-column>
   <el-table-column fixed="right"  label="操作" width="100">
     <template slot-scope="scope">
        <el-button type="text" size="small" @click="dele(scope.row)">删除</el-button>
        <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
     </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
<el-pagination  background layout="prev, pager, next" :total="this.$store.state.userList.length"
 @current-change="pageChange" :page-size="pageSize"></el-pagination>
 <!-- 编辑 -->
 <el-dialog title="编辑" :visible.sync="dialogFormVisible">
  <el-form ref='edit' :model="editFrom" :inline='true' label-width='80' :rules="editRule">
    <el-form-item label="员工姓名" prop="name">
      <el-input  v-model="editFrom.name" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="员工ID" >
      <el-input  v-model="editFrom.id" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="员工编号" prop="code">
      <el-input  v-model="editFrom.code" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="手机号" prop="phone">
      <el-input  v-model="editFrom.phone" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input  v-model="editFrom.email" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="归属组织" prop="org">
      <el-input  v-model="editFrom.org" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="创建日期">
      <el-input  v-model="editFrom.date" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="ensure">确 定</el-button>
  </div>
</el-dialog>

</div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  data() {
      let validator =(rule,value,callback)=>{
        if(!value){
          return callback(new Error("不能为空"))
        }
        return callback()
      }
    return {
        from:"",
        fromItem:{
            user:""
        },
        formStr:"",//弹框查询input
        loading:true,
        groupData:'',//
        pageSize:5,//每页显示的条数
        page:1,
        dialogFormVisible:false,//控制编辑弹框
        editFrom: {//编辑表单
          name: '',
          id:'',
          code:'',
          phone:'',
          email:'',
          org:'',
          date:''
        },
        editRule:{
            name:[
                {required:true,message:"请输入正确的姓名",tigger:"blur"},
                {min:2,max:5,message:"2-5个字符之间",tigger:"blur"}
                ],
            code:[
                {validator,message:"请输入正确的编号",tigger:'blur'}
            ],
            phone:[
                {required:true,message:"请输入正确的手机号",tigger:"blur"},
                {mseeage:"手机号长度为11位",tigger:"blur"}
            ],
            email:[
              {message:"请输入正确的邮箱格式",tigger:'blur'}
            ],
            org:[
                {required:true,message:"请输入归属组织",tigger:'blur'}
            ]
        }
      };
    
  },
  mounted(){//触发获取group的action
    //   this.$store.dispatch('getGroup');
    //调用
    this.toFetchUser()
  },
  watch:{//监听group,关闭loading
    group(old,news){
        this.loading=false
    }
  },
   methods: {
       //触发group的action
      toFetchGroup(){
         this.loading=true;
         //传一个回调函数控制loading
         this.getGroup(()=>{
            this.loading=false
         })
      },
      //触发userList的action
      toFetchUser(){
         this.getUser()
      },
      //点击弹框每行，获取每行的数据
      rowClick(row){
         this.from=row.ORGNAME
      },
      //点击新增出现弹框
      addBox(row){
        this.dialogFormVisible=true  
        this.editFrom={ 
          name: '',
          id:'',
          code:'',
          phone:'',
          email:'',
          org:'',
          date:''
        }
      },
      //点击确定
      ensure(){
        //   validate
        this.$refs.edit.validate((isVal,errMsg)=>{
            if(isVal){
             //校验通过向后台传数据
            }
        })
          this.dialogFormVisible = false
      },
      //点击编辑
      handleClick(row) {
        console.log(row);
        this.dialogFormVisible=true
        this.editFrom=row
      },
      //点击删除
      dele(row){
          this.$confirm('确定要删除吗','提示',{
              callback:()=>{
                 this.deleItem({//只接受两个参数，传个对象
                     code:row.code,
                     cb:()=>{
                       this.$message("删除成功")
                     }
                 })
              }
          })
      },
      //分页
      pageChange(page){
      this.page=page
      },
      ...mapActions(['getGroup','getUser','deleItem']),
      //过滤数据
      ...mapGetters(['filterGroup'])
    },
    computed:{
        //映射获取数据 
         ...mapState(['group','userList']),
         //每页显示的数据
         tableData(){
           let arr=this.$store.state.userList.slice(this. pageSize*(this.page-1),
           this.pageSize*this.page)
            return arr
          }
    }
};
</script>
<style>
.el-input-width{
    width:65%
}
.el-form-item{
    display: inline-block
}
.posRight{
    margin-left:120px;
}
</style>
