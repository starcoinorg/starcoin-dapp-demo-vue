<template>
  <div class="home">
    <el-select v-model="value" placeholder="请选择" @change="onChangeOptions">
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.value"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
import res from "./res.json";
export default {
  name: "HomeView",
  data() {
    return {
      value: "",
      input: "",
      options: [],
    };
  },
  created() {
    this.options = res.map((item) => {
      return {
        id: item.id,
        value: item.carrierId,
        label: item.carrierName,
      };
    });
  },
  mounted() {
    for (var i = 0; i < 5; i++) {
      ((j) => {
        setTimeout(() => {
          console.log(j);
        }, 1000 * j);
      })(i);
    }
  },
  methods: {
    onChangeOptions(e) {
      let res = this.options.find((item) => item.value === e);
      this.input = res.label;
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 500px;
  display: flex;
}
</style>
