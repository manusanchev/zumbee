<script lang="ts" setup>
import BaseButton from "@/components/base/BaseButton.vue"
defineProps({
  sectionTitle: { type: String, required: true },
  sectionDescription: { type: String, required: true },
  buttonName: { type: String, required: true }
})
function onSubmitForm() {}
</script>
<template>
  <div class="zb-auth-view__content">
    <form class="zb-auth-view__form" @submit.prevent="onSubmitForm">
      <div class="zb-auth-view__welcome">
        <h2 class="zb-auth-view__title">{{ sectionTitle }}</h2>
        <p>{{ sectionDescription }}</p>
      </div>
      <slot />
      <BaseButton class="zb-auth-view__button" :name="buttonName" type="submit" />
    </form>
  </div>
</template>

<style scoped>
.zb-auth-view__content {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.zb-auth-view__form {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  row-gap: 1.25rem;
}

.zb-auth-view__welcome {
  text-align: center;
}

.zb-auth-view__title {
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.zb-auth-view__button {
  margin-top: 8px;
}
</style>
