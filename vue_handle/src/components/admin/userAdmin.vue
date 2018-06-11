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
        </el-form>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>
<style>

</style>
