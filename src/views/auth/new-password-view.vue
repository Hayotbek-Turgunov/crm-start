<template>
  <AuthLayout>
    <div class="new-password-view">
      <h2>Set a New Password</h2>
      <NewPasswordForm />
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '../../layouts/auth-layout.vue'
import NewPasswordForm from '../../components/auth/new-password-form.vue'
</script>
