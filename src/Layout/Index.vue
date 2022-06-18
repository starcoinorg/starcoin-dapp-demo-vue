<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-color: #d3dce6;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
