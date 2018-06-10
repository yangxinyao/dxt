
// import Vue from 'vue'
// import state from './state.js'

let mutations = {
    setuserState(state, data) {
        state.menu = data.data
    },
    setGroup(state, data) {//弹窗
        state.group = data
    },
    setUser(state,data){//列表
        state.userList=data
    },
    deleItem(state, payload){//删除
       let tmp=[...state.userList];
       let inde;
       tmp.forEach((v,i)=>{
           if (v.code == payload.code){
               inde=i
           }
       })
       tmp.splice(inde,1) 
       state.userList=tmp;
        payload.cb()
    },
    setTree(state,payload){//菜单树
        state.treeData = payload
    }
}

export default mutations