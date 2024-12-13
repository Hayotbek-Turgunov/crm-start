<template>
  <form @submit.prevent="verifyCode">
    <input type="text" maxlength="4" placeholder="Enter code" required />
    <button type="submit">Reset Password</button>
  </form>
</template>

<script setup lang="ts">
const verifyCode = () => {
  console.log('Code verified')
}
</script>
