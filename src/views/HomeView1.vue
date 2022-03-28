<template>
  <div class="home">
    <el-container>
      <el-aside>
        <!-- 一级菜单 -->
        <el-menu>
          <el-submenu index="1">
            <!-- 二级菜单 -->
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                  <el-menu-item>选项1</el-menu-item>
                  <el-menu-item>选项2</el-menu-item>
            </el-menu-item-group>
            <!-- 分组二 -->
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
             </el-menu-item-group>
        
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          s
          <el-main> d </el-main>
        </el-header>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

import MyButton from "@/components/MyButton.vue";
export default {
  name: "HomeView",
  components: {
    MyButton
  },
  mounted() {
    // this.cuiplugin()
    // this.cuifn()
  }
};
</script>
<style scoped></style>
