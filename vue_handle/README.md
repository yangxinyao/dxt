# y

> y

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 总结
1. 项目内容 

   * 电信集团长城宽带后台管理系统 采用了vue-cli搭建项目目录，结合vuex进行后台数据管理，以及vue-router配置路由和elementUI自定义结构样式
2. 遇到的问题

     在开发过程中遇到了大大小小的各种问题，总结以下几点：
      

      * 导航守卫
      * 同一个输入框验证不同的信息出错
       * axios封装http拦截器，请求静态文件时出错
       * vuex运用不熟练
       * 菜单管理中左侧边栏用elementUI的树形控件进行了样式布局，导致路由路径出现了错误

3. 收获

     * 对一些不熟练的知识点，有了跟进一步的掌握
     * 树形控件node-click事件，点击树形控件时，可以获取到点击的这条数据，通过数据中的type字段用this.$router.history.push()进行路由跳转

4. 自我总结

     学习是一件持之以恒的事情，自己需要提升的地方还有很多，要学会自主的学习，学会扩展知识，在以后的实践中要提高自己解决问题的能力。



