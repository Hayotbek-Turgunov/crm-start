<template>
  <AuthLayout>
    <div class="reset-password-view">
      <h2>Reset Password</h2>
      <ResetPasswordForm @reset-success="goToNewPassword" />
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '../../layouts/auth-layout.vue'
import ResetPasswordForm from '../../components/auth/reset-password-form.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Yangi parol sahifasiga o'tish
const goToNewPassword = () => {
  router.push('/new-password')
}
</script>
