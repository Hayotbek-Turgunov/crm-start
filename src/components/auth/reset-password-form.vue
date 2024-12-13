<template>
  <form @submit.prevent="handleReset">
    <div>
      <label>Phone *</label>
      <input v-model="phone" type="tel" placeholder="+998 90 000 00 00" required />
    </div>
    <button type="submit">Reset Password</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const phone = ref('')
const emit = defineEmits(['reset-success'])

// Reset funksiyasi
const handleReset = () => {
  alert('Verification code sent to your phone number')
  emit('reset-success') // Reset muvaffaqiyatli bo'lganda eventni chaqiramiz
}
</script>
