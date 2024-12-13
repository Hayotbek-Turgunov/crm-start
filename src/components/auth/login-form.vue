<template>
  <form @submit.prevent="handleLogin">
    <div>
      <label>Email Address *</label>
      <input v-model="email" type="email" placeholder="Enter your email address" required />
    </div>
    <div>
      <label>Password *</label>
      <input v-model="password" type="password" placeholder="Enter your password" required />
    </div>
    <button type="submit">Login</button>
    <a @click="goToResetPassword">Forgot password?</a>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

// Login funksiyasi
const handleLogin = () => {
  if (email.value === 'admin@example.com' && password.value === 'password123') {
    router.push('/dashboard')
  } else {
    alert('Email yoki parol noto‘g‘ri!')
  }
}

// Reset Password sahifasiga yo'naltirish
const goToResetPassword = () => {
  router.push('/reset-password')
}
</script>
