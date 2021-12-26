<template>
  <div class="market-select">
    <label>Filter By:</label>
    <el-select size="mini" v-model="value">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "MarketSelect",
  data() {
    return {
      options: [
        { label: "All", value: 1 },
        { label: "Common", value: 2 },
        { label: "UnCommon", value: 3 },
        { label: "Rare", value: 4 },
        { label: "Epic", value: 5 },
        { label: "Legendary", value: 6 }
      ],
      value: 4
    };
  }
};
</script>

<style lang="scss" scoped>
.market-select {
  background-color: #3d3240;
  border: 1px solid #19181c;
  border-radius: 0.25rem;
  padding: 2px 8px;
  display: inline-block;
  label {
    padding-right: 0.5rem !important;
  }
  .el-select {
    >>> .el-input__inner {
      width: 14em;
      font-family: "God Of War", serif;
      color: #3d3240;
    }
    >>> .el-select__caret {
      color: #3d3240;
    }
  }
}
.el-select-dropdown__item {
  font-family: "God Of War", serif;
  color: #3d3240;
}
</style>