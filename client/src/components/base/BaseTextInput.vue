<script lang="ts" setup>
import type { PropType } from "vue"

defineProps({
  label: { type: String, default: "" },
  type: { type: String as PropType<"text" | "password" | "email">, default: "text" },
  hint: { type: String, default: "" },
  state: { type: String as PropType<"default" | "disabled" | "error">, default: "default" }
})
</script>

<template>
  <div class="zb-base-text-input" :class="`zb-base-text-input--${state}`">
    <label class="zb-base-text-input__label" v-if="label" for="">Correo electronico</label>
    <div class="zb-base-text-input__content">
      <slot name="icon-left" />
      <input type="text" class="zb-base-text-input__input" />
      <slot name="icon-right" />
    </div>
    <small v-if="hint" class="zb-base-text-input__hint">Este es email ya esta en uso</small>
  </div>
</template>

<style scoped></style>
