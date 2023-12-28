<script lang="ts" setup>
import type { PropType } from "vue"
import { ButtonTheme } from "@/types/components/ButtonTheme"
import { ButtonStyle } from "@/types/components/ButtonStyle"

defineProps({
  name: { type: String, required: true },
  theme: { type: Object as PropType<ButtonTheme>, default: ButtonTheme.Primary },
  style: { type: Object as PropType<ButtonStyle>, default: ButtonStyle.White },
  hasIcon: { type: Boolean, default: false },
  type: { type: String as PropType<"submit" | "button">, default: "submit" }
})
</script>

<template>
  <button
    class="zb-base-button"
    :class="`zb-base-button--${theme} zb-base-button--${style}`"
    :type="type"
  >
    <span v-if="hasIcon" class="zb-base-button__icon">
      <slot name="icon" />
    </span>
    {{ name }}
  </button>
</template>

<style scoped>
.zb-base-button {
  color: var(--button-text-default);
  height: 35px;
  border-radius: 0.5rem;
  padding: 0.25rem 1.25rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  cursor: pointer;
  transition: background-color 250ms;
}

.zb-base-button__icon:deep(*) {
  width: 1.25rem;
  height: 1.25rem;
}

.zb-base-button--primary {
  background-color: var(--button-bg-primary);
}

.zb-base-button--outline.zb-base-button--white {
  border: 1px solid var(--button-border-secondary);
}

.zb-base-button--outline.zb-base-button--white:hover {
  background-color: var(--button-bg-neutral);
  color: var(--button-text-dark);
}

.zb-base-button--outline.zb-base-button--purple {
  border: 1px solid var(--button-border-primary);
}

.zb-base-button--outline.zb-base-button--purple:hover {
  background-color: var(--button-bg-primary);
}
</style>
