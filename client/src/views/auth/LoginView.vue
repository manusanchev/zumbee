<script lang="ts" setup>
import AuthHeader from "@/components/auth/AuthHeader.vue"
import { useRouter } from "vue-router"
import { AuthStrategy } from "@/types/components/auth/AuthStrategy"
import AuthForm from "@/components/auth/AuthForm.vue"
import BaseTextInput from "@/components/base/BaseTextInput.vue"
import BaseSocialButton from "@/components/base/BaseSocialButton.vue"
import UserIcon from "@/components/icons/UserIcon.vue"
import BaseSeparator from "@/components/base/BaseSeparator.vue"
import { ref } from "vue"
import BaseFormPassword from "@/components/base/form/BaseFormPassword.vue"

const router = useRouter()
const emailOrUsername = ref("")
const password = ref("")

async function goToRegisterView() {
  await router.push({ name: "register" })
}
</script>
<template>
  <AuthHeader
    hint="¿No tienes cuenta?"
    button-name="Registrarme"
    @on-click-button="goToRegisterView"
  />
  <AuthForm
    section-title="Entra a tu cuenta"
    section-description="Introduce tus credenciales"
    button-name="Entrar"
  >
    <BaseSocialButton :strategy="AuthStrategy.Google" />
    <BaseSeparator />
    <BaseTextInput
      label="Correo electrónico o usuario"
      type="email"
      v-model="emailOrUsername"
      autocomplete="username"
      placeholder="paco@gmail.com"
    >
      <template #icon-left><UserIcon /></template>
    </BaseTextInput>
    <div>
      <BaseFormPassword v-model="password" />
      <div class="zb-login-view__link">
        <RouterLink to="/recover-password" class="zb-login-view__link-text"
          >Se me olvidó la contraseña</RouterLink
        >
      </div>
    </div>
  </AuthForm>
</template>

<style scoped>
.zb-login-view__link {
  color: var(--text-primary);
  font-size: 14px;
  text-align: right;
  margin-top: 8px;
}

.zb-login-view__link-text {
  color: var(--text-primary);
  font-size: 14px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
</style>
