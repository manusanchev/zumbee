<script setup lang="ts"></script>

<template>
  <div class="zb-app">
    <div class="zb-app__view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.zb-app {
  background-color: var(--background-default);
  width: 100%;
  padding: 2.75rem;
  height: 100vh;
}

.zb-app__view {
  border-radius: 0.5rem;
  background-color: var(--background-primary);
  height: 100%;
}
</style>
