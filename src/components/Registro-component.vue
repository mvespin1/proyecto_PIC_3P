<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="registro" class="registro-form">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Contraseña:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Registrarse</button>
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
    async registro() {
      try {
        const { user, error } = await this.$supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });

        if (error) {
          console.error(error.message);
        } else {
          console.log('Usuario registrado:', user);
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
.registro-form {
  max-width: 300px;
  margin: auto;
}

.registro-form label {
  display: block;
  margin-bottom: 8px;
}

.registro-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}

.registro-form button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
