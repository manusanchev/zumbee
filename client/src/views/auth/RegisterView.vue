<script lang="ts" setup>
import AuthHeader from "@/components/auth/AuthHeader.vue"
import { useRouter } from "vue-router"
import BaseTextInput from "@/components/base/BaseTextInput.vue"

const router = useRouter()
async function goToLoginView() {
  await router.push({ name: "login" })
}
</script>
<template>
  <AuthHeader hint="¿Tienes cuenta?" button-name="Entrar" @on-click-button="goToLoginView" />
  <form class="zb-auth-view">
    <h2>Registrarme</h2>
    <p>En tan solo 1 sencillo paso</p>
    <BaseTextInput />
    <BaseTextInput />
    <BaseTextInput />
  </form>
</template>

<style scoped>
.zb-auth-view {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
