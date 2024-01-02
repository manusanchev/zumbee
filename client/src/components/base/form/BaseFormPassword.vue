<script lang="ts" setup>
import BaseTextInput from "@/components/base/BaseTextInput.vue"
import EyeIcon from "@/components/icons/EyeIcon.vue"
import LockIcon from "@/components/icons/LockIcon.vue"
import { ref } from "vue"
import type { Ref } from "vue"
import EyeOffIcon from "@/components/icons/EyeOffIcon.vue"

const typeInput: Ref<"password" | "text"> = ref("password")
const isTextVisible = ref(false)
defineProps({
  modelValue: { type: String, required: true }
})

const emits = defineEmits(["update:modelValue"])

function onUpdateValue(value: string) {
  emits("update:modelValue", value)
}

function toggleTextVisibility() {
  typeInput.value = isTextVisible.value ? "password" : "text"
  isTextVisible.value = !isTextVisible.value
}
</script>
<template>
  <BaseTextInput
    label="Contraseña"
    :type="typeInput"
    :model-value="modelValue"
    placeholder="Introduce tu contraseña"
    @update:modelValue="onUpdateValue"
    autocomplete="current-password"
  >
    <template #icon-left><LockIcon /></template>
    <template #icon-right>
      <div @click="toggleTextVisibility">
        <EyeIcon v-if="!isTextVisible" />
        <EyeOffIcon v-else />
      </div>
    </template>
  </BaseTextInput>
</template>
