<script lang="ts" setup>
import type { PropType } from "vue"

defineProps({
  label: { type: String, default: "" },
  type: { type: String as PropType<"text" | "password" | "email">, default: "text" },
  hint: { type: String, default: "" },
  state: { type: String as PropType<"default" | "disabled" | "error">, default: "default" },
  modelValue: { type: String, required: true },
  placeholder: { type: String, required: true },
  required: { type: Boolean, default: undefined },
  autocomplete: { type: String, default: undefined }
})

const emits = defineEmits(["click-icon-left", "click-icon-right", "update:modelValue"])

function onClickIconLeft() {
  emits("click-icon-left")
}
function onClickIconRight() {
  emits("click-icon-right")
}

function onInput(event: Event) {
  emits("update:modelValue", (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="zb-base-text-input" :class="`zb-base-text-input--${state}`">
    <label class="zb-base-text-input__label" v-if="label" for="">{{ label }}</label>
    <div class="zb-base-text-input__icon-container">
      <span class="zb-base-text-input__icon zb-base-text-input__icon-left" @click="onClickIconLeft">
        <slot name="icon-left" />
      </span>
      <input
        :type="type"
        class="zb-base-text-input__input"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput"
        :required="required"
        :autocomplete="autocomplete"
      />
      <span
        class="zb-base-text-input__icon zb-base-text-input__icon-right"
        @click="onClickIconRight"
      >
        <slot name="icon-right" />
      </span>
    </div>
    <small v-if="hint" class="zb-base-text-input__hint">{{ hint }}</small>
  </div>
</template>

<style scoped>
.zb-base-text-input {
  display: flex;
  flex-direction: column;
  row-gap: 0.375rem;
}

.zb-base-text-input__label {
  font-weight: 500;
}

.zb-base-text-input__icon-container {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}

.zb-base-text-input__input {
  flex-grow: 1;
  color: var(--input-text-default);
  border: 1px solid var(--input-border);
  background-color: var(--input-bg);
  border-radius: 0.313rem;
  height: 42px;
  width: 100%;
  font-size: 16px;
  padding: 1rem 2rem;
}

.zb-base-text-input__input:focus-visible {
  outline: 1px solid var(--input-border-focus);
}

.zb-base-text-input__icon {
  position: absolute;
  display: flex;
  align-items: center;
  color: var(--input-placeholder);
}

.zb-base-text-input__icon:deep(svg) {
  width: 1.25rem;
  height: 1.25rem;
}

.zb-base-text-input__icon-left {
  left: 8px;
}

.zb-base-text-input__icon-right {
  right: 8px;
  cursor: pointer;
}
</style>
