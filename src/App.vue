<template>
  <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span> Fitness Tracker 360 </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div>
                <!-- Asegúrate de que el botón esté dentro del div v-if -->
                <ul class="navbar-nav">
                  <router-link @click="loginGitHub" to="/home" class="nav-link"
                    >LOGIN GitHub</router-link
                  >
                </ul>
              </div>

              <div
                class="d-flex ml-auto flex-column flex-lg-row align-items-center"
              >
                <ul class="navbar-nav" v-if="mostrarEnlaces">
                  <li class="nav-item active">
                    <router-link to="/home" class="nav-link">HOME</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/usuario" class="nav-link"
                      >USUARIO</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/listar" class="nav-link"
                      >ADMIN</router-link
                    >
                  </li>
                </ul>

                <div class="user_option">
                  <form
                    class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0"
                  >
                    <button
                      class="btn my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    ></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <HeaderSection />

    <!-- end header section -->
  </div>

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
      usuario: null,
      mostrarEnlaces: false,
    };
  },
  async loginWithGitHub() {
    try {
      const { user, error } = await this.$supabase.auth.signInWithOAuth({
        provider: "github",
      });

      if (error) {
        console.error("Error during GitHub login:", error.message);
      } else {
        // Se ha iniciado sesión correctamente
        this.usuario = user;
        // Redirige al usuario a la página de inicio después del inicio de sesión
        this.$router.replace("/");
      }
    } catch (error) {
      console.error("Error during GitHub login:", error.message);
    }
  },
  async logout() {
    await this.$supabase.auth.signOut();
    // Limpiar el estado del usuario al cerrar sesión
    this.usuario = null;
  },




  methods: {
    async loginGitHub() {
      // Cambia el estado de mostrarEnlaces a true después del inicio de sesión
      this.mostrarEnlaces = true;

      // Redirige al usuario a la página de inicio después del inicio de sesión
      this.$router.replace("/home");
    },
  },
};
</script>
