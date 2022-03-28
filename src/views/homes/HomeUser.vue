<template>
    <div>
      <button @click="add(10)">增加</button>
       <button @click="jian(6)">减少</button>
      <p>{{this.$store.state.count}}</p>

    </div>
</template>
<script>
export default {
    name:"HomeUser",
    methods:{
        add(a){
            // mutation 用$store.commit提交
            // actions用dispatch提交
            // 用户行为  提交修改count的业务函数   不能直接修改count
            // this.$store.commit('increment')
             this.$store.dispatch('asyncincrement',a)
            //  dispatch 给actions提交方法
        },
        jian(b){
            this.$store.commit('decrement',b)
        }
    }
}
</script>
<style scoped>

</style>