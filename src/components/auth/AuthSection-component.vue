<template>
  <div class="auth_section">
    <div v-if="!user">
      <!-- Formulario de inicio de sesión -->
      <form @submit.prevent="login">
        <label>Email:</label>
        <input v-model="loginEmail" type="email" required />
        <label>Contraseña:</label>
        <input v-model="loginPassword" type="password" required />
        <button type="submit">Iniciar sesión</button>
      </form>

      <!-- Formulario de registro -->
      <form @submit.prevent="register">
        <label>Email:</label>
        <input v-model="registerEmail" type="email" required />
        <label>Contraseña:</label>
        <input v-model="registerPassword" type="password" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>

    <div v-else>
      <!-- Muestra el contenido restante solo si el usuario está autenticado -->
      <p>Bienvenido, {{ user.email }}!</p>
      <button @click="logout">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js';

export default {
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
      registerEmail: "",
      registerPassword: "",
      user: null,
    };
  },
  methods: {
    async login() {
      const { user, error } = await this.$supabase.auth.signIn({
        email: this.loginEmail,
        password: this.loginPassword,
      });

      if (error) {
        console.error(error.message);
      } else {
        this.user = user;
      }
    },
    async register() {
      const { user, error } = await this.$supabase.auth.signUp({
        email: this.registerEmail,
        password: this.registerPassword,
      });

      if (error) {
        console.error(error.message);
      } else {
        this.user = user;
      }
    },
    async logout() {
      const { error } = await this.$supabase.auth.signOut();

      if (error) {
        console.error(error.message);
      } else {
        this.user = null;
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para el componente AuthSection */
.auth_section {
  /* Estilos para el contenedor principal si es necesario */
}
</style>
