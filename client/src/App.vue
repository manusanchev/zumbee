<script setup lang="ts">
</script>

<template>
  <div class="zb-app">
    <div class="zb-app__view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.zb-app {
  background-color: var(--background-base);
  width: 100%;
  height: 100vh;
}

.zb-app__view {
  border-radius: 8%;
  padding:;
}
</style>
