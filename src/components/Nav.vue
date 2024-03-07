<template>
  <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/home" class="nav-link">HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/usuario" class="nav-link">USUARIO</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/listar" class="nav-link">ADMIN</router-link>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/login" class="nav-link">LOGIN</router-link>
      </li>
      <!-- Agrega más enlaces según sea necesario para el caso de v-else -->
    </ul>
    <div class="user_option">
      <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
        <button class="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
      </form>
    </div>
  </div>

  <HeaderSection />

  <router-view />
</template>

<script>
import HeaderSection from "@/components/home/HeaderSection-component.vue";
import LoginGitHub from "@/components/auth/LoginGitHub.vue";

export default {
  components: {
    HeaderSection,
    LoginGitHub,
  },
  data() {
    return {
      mostrarEnlaces: false,
      usuario: null, // Nuevo estado para almacenar información del usuario logueado
    };
  },
  methods: {
    async handleLoginSuccess(user) {
      // Actualizar el estado del usuario
      this.usuario = user;

      // Actualizar la visibilidad de los enlaces
      this.mostrarEnlaces = true;
    },
  },
  // Resto del código de tu componente
};
</script>
