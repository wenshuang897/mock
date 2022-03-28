import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)  //在vue应用中安装vuex
let store = new Vuex.Store({
    state:{count:0},//存放数据
    mutations:{
        // mutation 是唯一修改stat的方法
        // 存放用户提交的方法  业务
        increment(state,payload){ //修改stated的业务函数
            console.log(payload)
            // 每个mutations的第一个参数就是state本身
            state.count = state.count+payload
        },
        decrement(state,payload){
         console.log(payload)  
         state.count = state.count-payload
        }
    },
    actions:{
        asyncincrement(context,payload){
            // 存放异步
            // 每个action的第一个参数是store  上下文对象 ,第二个参数是用户提交的参数
            console.log(payload)
            console.log(context)
            setTimeout(function(){
                context.commit('increment',payload)
            },2000)
        }
    }

}) 
export default store