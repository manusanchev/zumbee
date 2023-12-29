<script lang="ts" setup>
import type { PropType } from "vue"
import type { AuthStrategy } from "@/types/auth/AuthStrategy"
import { authStrategyIconRelated } from "@/types/auth/AuthStrategy"

defineProps({
  strategy: { type: Object as PropType<AuthStrategy>, required: true }
})
</script>

<template>
  <div class="zb-base-social-button">
    <component :is="authStrategyIconRelated[strategy]" /> Continuar con {{ strategy }}
  </div>
</template>

<style scoped>
.zb-base-social-button {
  background-color: var(--background-elevation);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 14px;
}

.zb-base-social-button:hover {
  background-color: var(--background-neutral);
  cursor: pointer;
}

</style>