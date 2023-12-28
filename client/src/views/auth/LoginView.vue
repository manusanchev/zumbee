<script lang="ts" setup>
import AuthHeader from "@/components/auth/AuthHeader.vue"
import { useRouter } from "vue-router"

const router = useRouter()
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
</template>
