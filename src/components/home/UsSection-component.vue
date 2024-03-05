<template>
  <section class="us_section layout_padding">
    <div class="container">
     <LoginForm />
      <RegisterForm />s
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/Login-component.vue";
import RegisterForm from "@/components/Registro-component.vue";

export default {
  name: "UsSection",
  components: {
    LoginForm,
    RegisterForm,
  },
  // Otras propiedades del componente aquí
};
</script>