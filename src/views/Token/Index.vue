<template>
  <div class="token">
    <div class="container">
      <el-button type="primary" :disabled="isStarMaskInstalled">{{
        isStarMaskInstalled ? "插件已下载" : "下载钱包插件"
      }}</el-button>
      <el-button type="primary" :disabled="isStarMaskConnected">{{
        isStarMaskConnected ? "钱包已连接" : "链接钱包插件"
      }}</el-button>
      <el-button type="primary" @click="dialogFormVisible = true"
        >发行 Token</el-button
      >
      <el-table :data="tableData">
        <el-table-column prop="token_name" label="名称" width="120" />
        <el-table-column prop="volume_str" label="数量" width="120" />
        <el-table-column prop="addressHolder" label="持有人数量" width="120" />
        <el-table-column prop="market_cap_str" label="总市值" />
      </el-table>
    </div>
    <el-dialog title="发行 Starcoin Token" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Token 地址" :label-width="formLabelWidth">
          <el-input v-model="form.addresss" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Token 名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Token 精度" :label-width="formLabelWidth">
          <el-input v-model="form.accuracy" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="初始挖矿" :label-width="formLabelWidth">
          <el-input v-model="form.genesis" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >发 行</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import StarMaskOnboarding from "@starcoin/starmask-onboarding";
export default {
  name: "TokenList",
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      formLabelWidth: "100px",
      form: {},
      isStarMaskInstalled: false,
      isStarMaskConnected: false,
    };
  },
  async created() {
    const TOKEN_LIST = "https://api.stcscan.io/v2/token/main/stats/1";
    const res = await axios.get(TOKEN_LIST);
    this.tableData = res.data.contents.map((item) => {
      let typeNameList = item.type_tag.split("::");
      item.token_name = typeNameList[1];
      item.volume_str = item.volume_str ? item.volume_str : "0";
      return item;
    });
  },
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      // 获取当前浏览器地址
      const currentUrl = new URL(window.location.href);
      // 判断当前地址
      const forwarderOrigin =
        currentUrl.hostname === "localhost"
          ? "http://localhost:8080"
          : undefined;
      // 浏览器钱包插件是否安装
      this.isStarMaskInstalled = StarMaskOnboarding.isStarMaskInstalled();
      // 是否已经与钱包连接
      this.isStarMaskConnected = false;
      console.log(
        this.isStarMaskInstalled,
        this.isStarMaskConnected,
        forwarderOrigin
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.el-button {
  margin-bottom: 1rem;
}
</style>
