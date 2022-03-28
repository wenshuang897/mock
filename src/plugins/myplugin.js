// 插件
// 对象
// let myplugin = {
//      install(Vue){
//         //  把插件挂载vue的原型上
//         Vue.prototype.cuiplugin = function(){
//             console.log("wenshuang")
//         }

//     }
// }

// 函数
// let myplugin = function(Vue){
//     Vue.prototype.cuifn = function(){
//         console.log("hjkkjjk")
//     }
// }


// 防抖
let myplugin = function(Vue){
    Vue.prototype.debouncefn = function(fn,wait){
        let timer = null;
        return function(){ //被封装后的新的业务函数
            clearTimeout(timer)
            timer = setTimeout(function(){
                fn()   //fn是业务函数
            },wait)
        }
    }
}
// Vue.prototype.debouncefn = function(){
//     console.log()
// }

export default myplugin