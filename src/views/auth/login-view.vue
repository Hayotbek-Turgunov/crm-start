<template>
  <AuthLayout>
    <div class="login-view">
      <h2>Login to your account</h2>
      <LoginForm />
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '../../layouts/auth-layout.vue'
import LoginForm from '../../components/auth/login-form.vue'
</script>
