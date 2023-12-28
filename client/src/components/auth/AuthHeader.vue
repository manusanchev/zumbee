<script setup lang="ts">
import AppLogoIcon from "@/components/icons/AppLogoIcon.vue";
import BaseButton from "@/components/base/BaseButton.vue"
import { ButtonTheme } from "@/types/components/ButtonTheme"

defineProps({
  buttonName: { type: String, required: true },
  hint: { type: String, required: true }
})

const emits = defineEmits(["on-click-button"])

function onClickButton() {
  emits("on-click-button")
}
</script>

<template>
  <header class="zb-auth-header">
    <AppLogoIcon class="zb-auth-header__logo" />
    <div class="zb-auth-header__button">
      <p class="zb-auth-header__hint">{{ hint }}</p>
      <BaseButton
        :name="buttonName"
        :theme="ButtonTheme.Outline"
        type="button"
        @click="onClickButton"
      />
    </div>
  </header>
</template>

<style scoped>
.zb-auth-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.zb-auth-header__logo {
  width: 8rem;
}

.zb-auth-header__button {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
</style>
