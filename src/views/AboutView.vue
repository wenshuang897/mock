<template>
  <div>
    <MyButton>world</MyButton>
    <el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="sub-title">激活即列出输入建议</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="sub-title">输入后匹配输入建议</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>

  </div>

</template>
<script>
import MyButton from "@/components/MyButton.vue"
  export default {
    data() {
      return {
        name:"AboutView",
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    compontent:{
      MyButton
    },
    methods: {
      querySearch(queryString, cb) {
        // 方法属性
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
        // 通过cb把过滤后的结果返回出去
      },
      createFilter(queryString) {
        // 返回的是一个函数  arr.filter(function(item){
          // return item =='222'
        // })
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          {value:"小明",address:"605"},
          {value:"王怎好",address:"605"},
          {value:"王晓",address:"605"},
          {value:"王哈",address:"605"},
          {value:"李小明",address:"605"},
          {value:"武小明",address:"605"},
          {value:"左一诺",address:"603"},
          {value:"高校",address:"605"},
          {value:"陈小明",address:"602"},
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>