<template>
  <form @submit.prevent="handleNewPassword">
    <div>
      <label>New Password *</label>
      <input v-model="newPassword" type="password" required />
    </div>
    <div>
      <label>Confirm Password *</label>
      <input v-model="confirmPassword" type="password" required />
    </div>
    <button type="submit">Continue</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newPassword = ref('')
const confirmPassword = ref('')

const handleNewPassword = () => {
  if (newPassword.value === confirmPassword.value) {
    alert('Password successfully reset!')
  } else {
    alert('Passwords do not match!')
  }
}
</script>
