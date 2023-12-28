<script setup lang="ts">
import HeroAuthDemo from "@/components/hero/auth/HeroAuthDemo.vue"
</script>

<template>
  <aside class="zb-hero-section">
    <HeroAuthDemo />
  </aside>
</template>

<style scoped>
.zb-hero-section {
  background-color: var(--background-secondary);
  border-left: 1px solid var(--gray-light);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
