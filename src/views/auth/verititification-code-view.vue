<template>
  <AuthLayout>
    <div class="verification-code-view">
      <h2>Enter Verification Code</h2>
      <VerificationCodeForm />
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '../../layouts/auth-layout.vue'

import VerificationCodeForm from '../../components/auth/verification-code-form.vue'
</script>
