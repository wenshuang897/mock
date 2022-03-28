<template>
  <div>
    <el-container>
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu background-color="rgb(50,64,87)" text-color="#fff" :router="true">
          <el-menu-item class="item">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span slot="title">数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">用户列表</el-menu-item>
              <el-menu-item index="2-2">商家列表</el-menu-item>
              <el-menu-item index="2-3">食品列表</el-menu-item>
              <el-menu-item index="2-4">订单列表</el-menu-item>
              <el-menu-item index="2-5">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 二级菜单 -->
          <el-submenu index="3" class="item">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span slot="title">添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">添加用户</el-menu-item>
              <el-menu-item index="3-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 图表分布 -->
          <el-submenu index="4" class="item">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span slot="title">图标</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <!-- 编辑 -->
          <el-submenu index="5" class="item">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span slot="title">编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 设置 -->
          <el-submenu index="6" class="item">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 说明 -->
          <el-submenu index="7" class="item">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span slot="title">说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <!--面包屑 -->
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
               <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- 下拉 -->
          <div>
            <el-dropdown>
              <img src="@/assets/logo.png" alt="" class="img" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>推出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted(){
      console.log(this.$route.meta)
  }
};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.aside .item {
  color: #fff;
  background-color: rgb(50, 64, 87);
}

.aside .item span {
  color: #fff;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eff2f7;
}

</style>
