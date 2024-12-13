import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/login-view.vue'
import ResetPasswordView from '../views/auth/reset-password-view.vue'
import NewPasswordView from '../views/auth/new-password-view.vue'
import DashboardView from '../views/dashboard-view.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPasswordView },
  { path: '/new-password', name: 'NewPassword', component: NewPasswordView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
