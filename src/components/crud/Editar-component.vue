<template>
  <section class="us_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>EDITAR</h2>
      </div>

      <br />
      <div class="card">
        <div class="card-header">EDITAR</div>
        <div class="card-body">
          <form @submit.prevent="actualizarRegistro" class="custom-form">
            <div class="form-group">
              <label for="nombre">Nombre: </label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="maquina.nombre"
                id="nombre"
              />
            </div>
            <div class="form-group">
              <label for="tipo">Tipo: </label>
              <input
                type="text"
                class="form-control"
                name="tipo"
                v-model="maquina.tipo"
                id="tipo"
              />
            </div>
            <div class="form-group">
              <label for="cantidad">Cantidad: </label>
              <input
                type="text"
                class="form-control"
                name="cantidad"
                v-model="maquina.cantidad"
                id="cantidad"
              />
            </div>

            <div class="btn-group" role="group" aria-label="">
              <button type="submit" class="btn btn-info btn-action">
                Modificar
              </button>
              <router-link :to="{ name: 'Listar' }" class="btn btn-danger">Cancelar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      maquina: {
        nombre: '',
        tipo: '',
        cantidad: '',
      },
    };
  },
  async created() {
    await this.obtenerInformacionID();
  },
  methods: {
    async obtenerInformacionID() {
      try {
        const { data, error } = await this.$supabase
          .from('maquinas_gimnasio')
          .select('*')
          .eq('id', this.$route.params.id);

        if (error) {
          console.error('Error al obtener la información:', error);
        } else {
          this.maquina = data[0];
        }
      } catch (error) {
        console.error('Error al obtener la información:', error);
      }
    },
    async actualizarRegistro() {
      try {
        const { error } = await this.$supabase
          .from('maquinas_gimnasio')
          .upsert([this.maquina]);

        if (error) {
          console.error('Error al actualizar la máquina:', error);
        } else {
          console.log('Máquina actualizada correctamente');
          this.$router.push({ name: 'Listar' }); // Redirige a la lista después de actualizar
        }
      } catch (error) {
        console.error('Error al actualizar la máquina:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el formulario de edición */

.custom-form {
  width: 100%;
  max-width: 400px; /* Ajusta el ancho máximo según tus necesidades */
  margin: auto;
}

.custom-form .form-group {
  margin-bottom: 20px;
}

.custom-form label {
  font-weight: bold;
  color: #1e3859; /* Color del texto de la etiqueta */
}

.custom-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.custom-form .btn-group {
  margin-top: 20px;
}
</style>
