<template>
  <div class="header">
    <div class="header-left">left</div>
    <div class="header-right">right</div>
  </div>
</template>

<script>
import { loadBlockchainData } from '../metamask'
export default {
  name:'Header',
  data(){
    return {

    }
  },
  created() {
    loadBlockchainData()
  },
  
};
</script>

<style>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content:space-between;
}
.header-left {
  width:300px;
  background-color: aqua;
}
.header-right {
  width: 400px;
  background-color: blanchedalmond;
}
</style>