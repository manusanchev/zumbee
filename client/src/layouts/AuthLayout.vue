<script lang="ts" setup>
import HeroSection from "@/components/hero/HeroSection.vue"
</script>
<template>
  <div class="zb-auth-layout">
    <div class="zb-auth-layout__view">
      <RouterView />
    </div>
    <HeroSection class="zb-auth-layout__hero" />
  </div>
</template>

<style scoped>
.zb-auth-layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.zb-auth-layout__view {
  width: 50%;
  padding: 1.5rem;
}

.zb-auth-layout__hero {
  border-radius: 0 8px 8px 0;
  flex-grow: 1;
}

@media screen and (max-width: 800px) {
  .zb-auth-layout__view {
    width: 100%;
  }

  .zb-auth-layout__hero {
    display: none;
  }
}
</style>
