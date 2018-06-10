import axios from 'axios'
import {instance as http} from '../tool/http.js'
let actions = {
    //左侧导航
    getUserState({ commit }) {
        return new Promise((resolve, reject) => {
           axios.get('/api/menu').then(res => {
                commit('setuserState', res.data[0])
            })
        })
    },
    //归属组织弹框
    getGroup({commit,state},cb){
        if(state.group.length>0){
            cb()
        }
       http.get('/static/sever/group.json').then(res => {
           setTimeout(() => {
               commit('setGroup', res.data.orgs)
            //    console.log(cb)
               cb()
           }, 2000);
            
        })
    },
    //列表
    getUser({commit}){
      http.get('/static/sever/user.json').then(res=>{
          commit('setUser', res.data.userList)
      })
    },
    //删除
    deleItem({commit},payload) {//删除
        commit("deleItem",payload)
    },
    //树状菜单
    treeMenu({commit},payload){
      http.get('/static/sever/treeMenu.json').then(res => {
          console.log(res.data.data)
          commit('setTree', res.data.data)
        })
    }
}

export default actions
