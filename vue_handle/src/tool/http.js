import axios from 'axios'
let instance = axios.create({
     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    timeout: 3000,
  
});
//添加请求拦截器
instance.interceptors.request.use((config) => {
    if (process.env.NODE_ENV === "production") {
        // development
    } else {
        config.baseURL = 'http://localhost:8080'
    }
    return config
}, (err) => {
    return Promise.reject(err)
})
//添加响应拦截器
instance.interceptors.response.use((response) => {
    return response
}, (err) => {
    return Promise.reject(err)
})

//vue 插件
let httpPlugin = {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', {
            value: instance
        })
    }
}
export { instance }
export default httpPlugin
