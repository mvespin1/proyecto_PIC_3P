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
  </div>

  <HeaderSection />

  <router-view />
</template>

<script>
import HeaderSection from "@/components/home/HeaderSection-component.vue";

export default {
  components: {
    HeaderSection,
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
