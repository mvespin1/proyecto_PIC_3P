<template>
  <div v-if="!user" class="login">
    <button @click="loginWithGitHub">Login with GitHub</button>
  </div>
  <div v-else class="login">
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async loginWithGitHub() {
  try {
    const { user, error } = await this.$supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) {
      console.error('Error during GitHub login:', error.message);
    } else {
      // Se ha iniciado sesión correctamente
      // Emitir evento para manejarlo en el componente padre (App.vue)
      this.$emit('login-success', user);
      
      // Redirigir a la ruta correcta después de iniciar sesión
      this.$router.replace('/home');
    }
  } catch (error) {
    console.error('Error during GitHub login:', error.message);
  }
}
,
    async logout() {
      await this.$supabase.auth.signOut();
      // Limpiar el estado del usuario al cerrar sesión
      this.user = null;
    },
  },
};
</script>

<style scoped>
.login {
  /* Agrega estilos específicos para este componente */
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
