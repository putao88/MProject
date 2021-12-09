<template>
  <div id="app" class="root">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{ Header },
}
</script>

<style>
@import './styles/common.css';
@import './styles/index.css';
</style>
