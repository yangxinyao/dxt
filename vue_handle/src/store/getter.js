let getters={
    //弹框筛选数据
    filterGroup(state){
        return (filter)=>{
            if(filter){//筛选数据
              return  state.group.filter((item)=>{
                  //检测数据里有没有符合输入框里内容的数据并返回
                let bol= item.ORGNAME.indexOf(filter) > -1 || item.FORGNAME.indexOf(filter) > -1    
                 return bol
             })
            }else{
                return state.group
            } 
        }
    }
}
export default getters