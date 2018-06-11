<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="菜单名称">
    <el-input v-model="formInline.user"></el-input>
  </el-form-item>
  <el-form-item label="菜单代码">
    <el-input v-model="formInline.user"></el-input>
  </el-form-item>
  <el-form-item label="菜单显示名称">
    <el-input v-model="formInline.user"></el-input>
  </el-form-item>
   <el-form-item label="菜单显示顺序">
    <el-input v-model="formInline.user"></el-input>
  </el-form-item>
   <el-form-item label="功能资源">
    <el-input v-model="formInline.user"></el-input>
  </el-form-item>
  <el-form-item label="是否为叶子菜单">
    <el-input v-model="formInline.user"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>

    </div>
</template>
<script>
 export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style>

</style>