<template>
  <div class="market-pagination">
    <div class="pag">Previous</div>
    <el-pagination background layout="pager" :total="1000"> </el-pagination>
    <div class="pag">Next</div>
  </div>
</template>

<script>
export default {
  name: "MarketPagination",
  data() {
    return {
      options: [
        { label: "All", value: 1 },
        { label: "Common", value: 2 },
        { label: "UnCommon", value: 3 },
        { label: "Rare", value: 4 },
        { label: "Epic", value: 5 },
        { label: "Legendary", value: 6 },
      ],
      value: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
.market-pagination {
  background-color: #3d3240;
  border: 1px solid #19181c;
  border-radius: 0.25rem;
  display: inline-block;
  display: flex;
  height: 34px;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
  width: 500px;
  .pag {
    display: inline-block;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    width: 80px;
    text-align: center;
    cursor: pointer;
  }
  label {
    padding-right: 0.5rem !important;
  }
  .el-pagination {
    padding: 0;
    height: 100%;
    >>> .el-pager {
      li {
        line-height: 34px;
        background-color: #3d3240;
        font-family: "God Of War", serif;
        color: #ffffff;
        height: 100%;
        margin: 0;
        border-left: 1px solid #19181c;
        border-right: 1px solid #19181c;
        width: 40px;
        &:hover {
          z-index: 2;
          color: #282334;
          background-color: #e9ecef;
          border-color: #dee2e6;
        }
      }
      .active {
        background-color: #282334 !important;
      }
      height: 100%;
    }
  }
}
</style>