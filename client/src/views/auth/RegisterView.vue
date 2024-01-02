<script lang="ts" setup>
import AuthHeader from "@/components/auth/AuthHeader.vue"
import { useRouter } from "vue-router"
import BaseTextInput from "@/components/base/BaseTextInput.vue"
import EmailIcon from "@/components/icons/EmailIcon.vue"
import UserIcon from "@/components/icons/UserIcon.vue"
import { ref } from "vue"
import AuthForm from "@/components/auth/AuthForm.vue"
import BaseSocialButton from "@/components/base/BaseSocialButton.vue"
import { AuthStrategy } from "@/types/components/auth/AuthStrategy"
import BaseSeparator from "@/components/base/BaseSeparator.vue"
import BaseFormPassword from "@/components/base/form/BaseFormPassword.vue";

const router = useRouter()
const email = ref("")
const password = ref("")
const username = ref("")

async function goToLoginView() {
  await router.push({ name: "login" })
}

function onRegister() {}
</script>
<template>
  <AuthHeader hint="¿Tienes cuenta?" button-name="Entrar" @on-click-button="goToLoginView" />
  <AuthForm
    section-title="Registrarme"
    section-description="En tan solo 1 sencillo paso"
    button-name="Registrarme"
  >
    <BaseSocialButton :strategy="AuthStrategy.Google" />
    <BaseSeparator />
    <BaseTextInput
      label="Correo electrónico"
      type="email"
      v-model="email"
      placeholder="paco@gmail.com"
    >
      <template #icon-left><EmailIcon /></template>
    </BaseTextInput>
    <BaseTextInput label="Usuario" autocomplete="username" v-model="username" placeholder="zumbename">
      <template #icon-left><UserIcon /></template>
    </BaseTextInput>
    <BaseFormPassword v-model="password" />
  </AuthForm>
</template>
