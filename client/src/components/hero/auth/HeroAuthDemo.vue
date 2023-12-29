<script setup lang="ts">
import ShakeIcon from "@/components/icons/ShakeIcon.vue"
import BaseButton from "@/components/base/BaseButton.vue"
import { ButtonTheme } from "@/types/components/ButtonTheme"
import { ButtonStyle } from "@/types/components/ButtonStyle"
</script>

<template>
  <div class="zb-hero-auth-demo">
    <div class="zb-hero-auth-demo__shake">
      <ShakeIcon class="zb-hero-auth-demo__shake-icon" />
    </div>
    <div class="zb-hero-auth-demo__content">
      <h1 class="zb-hero-auth-demo__title">Envía y recibe mensajes con zumbeedos</h1>
      <p class="zb-hero-auth-demo__subtitle">
        Tan solo pulsa el botón y la pantalla se moverá para la otra persona
      </p>
    </div>
    <BaseButton
      :has-icon="true"
      type="button"
      name="Prueba"
      :theme="ButtonTheme.Outline"
      :style="ButtonStyle.Purple"
    >
      <template #icon>
        <ShakeIcon />
      </template>
    </BaseButton>
  </div>
</template>

<style scoped>
.zb-hero-auth-demo {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
}
.zb-hero-auth-demo__shake {
  max-width: fit-content;
  background-color: var(--background-elevation);
  padding: 2rem;
  border-radius: 1rem;
}

.zb-hero-auth-demo__shake-icon {
  width: 98px;
  height: 98px;
}

.zb-hero-auth-demo__content {
  text-align: center;
}

.zb-hero-auth-demo__title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.zb-hero-auth-demo__subtitle {
  font-size: 1rem;
}
</style>
