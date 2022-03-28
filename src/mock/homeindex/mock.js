let Mock = require("mockjs")
let data = [
    {id:0,name:"kjnlk",text:"我是hjkjkj"},
    {id:1,name:"kjnlk",text:"我是hjkjkj"},
    {id:2,name:"小李",text:"我是h小李"},
    {id:3,name:"小明",text:"我是小明"},
    {id:4,name:"王怎好",text:"我是王怎哈"},
    {id:5,name:"凤姐",text:"我是凤姐"},
    {id:6,name:"宇杰",text:"我是余杰"},
    {id:7,name:"结",text:"我是hjkjkj"},
    {id:8,name:"qiq",text:"我是hjkjkj"}
]
Mock.mock("/api/homeindex","get",function(config){
    console.log(config)
    return data
})
// 删除
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
console.log(config.url)
let arr = config.url.split("/")
let id = arr.pop()
 data.splice(id,1)
//  凹陷数据解决方案
 data = data.map(function(item,id){
    //  返回一个对象
        return{
            id,
            name:item.name,
            text:item.text
        }
  })
// data.forEach(function(item,index){
//     item.id = index
// })
    return data
})
//更新
Mock.mock(/\/api\/homeindex\/edit\/\d/,"put",function(config){
    console.log(config)
    let canshu = config.body
    let arr = config.url.split("/")
    let id = arr.pop()
    canshu = JSON.parse(canshu)   //obj
    data[id].name = canshu.name
    data[id].text = canshu.text
    console.log(canshu)
    return data
})
// 添加
Mock.mock("/api/homeindex",'post',function(config){
    console.log(config)
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    // 数组凹陷的解决方案
    data.push({id:data.length,name,text})
    return data
})