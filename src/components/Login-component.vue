<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Contraseña:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const { user, error } = await this.$supabase.auth.signIn({
          email: this.email,
          password: this.password,
        });

        if (error) {
          console.error(error.message);
        } else {
          console.log('Usuario autenticado:', user);
          // Puedes redirigir a otra página o actualizar el estado de tu aplicación aquí.
        }
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: auto;
}

.login-form label {
  display: block;
  margin-bottom: 8px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}

.login-form button {
  background-color: #2196f3;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
