<template>
  <section class="us_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>CONTROL DE INVENTARIO</h2>
      </div>

      <br />

      <router-link to="/crear" class="agregarBtn">Agregar</router-link>

      <br />
      <br />
      <br />

      <div class="card">
        <div class="card-body">
          <table
            class="table table-bordered table-striped table-hover custom-table"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>TIPO</th>
                <th>CANTIDAD</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="maquina in maquinas" :key="maquina.id">
                <td>
                  <div>{{ maquina.id }}</div>
                </td>
                <td>
                  <div>{{ maquina.nombre }}</div>
                </td>
                <td>
                  <div>{{ maquina.tipo }}</div>
                </td>
                <td>
                  <div>{{ maquina.cantidad }}</div>
                </td>
                <td>
                  <div class="btn-group" role="group" aria-label="">
                    <router-link
                      :to="{ name: 'Editar', params: { id: maquina.id } }"
                      class="btn btn-info btn-action"
                      >Editar</router-link
                    >
                    <button
                      type="button"
                      v-on:click="borrarMaquina(maquina.id)"
                      class="btn btn-danger btn-action"
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      maquinas: [],
    };
  },

  async created() {
    await this.consultarDatos();
  },
  methods: {
    async consultarDatos() {
      try {
        const { data, error } = await this.$supabase
          .from('maquinas_gimnasio')
          .select('*');

        if (error) {
          console.error('Error al consultar las máquinas:', error);
        } else {
          this.maquinas = data;
        }
      } catch (error) {
        console.error('Error al consultar las máquinas:', error);
      }
    },

    async borrarMaquina(id) {
      try {
        const { data, error } = await this.$supabase
          .from('maquinas_gimnasio')
          .delete()
          .eq('id', id);

        if (error) {
          console.error('Error al borrar la máquina:', error);
        } else {
          console.log('Máquina eliminada correctamente:', data);
          await this.consultarDatos();
        }
      } catch (error) {
        console.error('Error al borrar la máquina:', error);
      }
    },
  },
};
</script>

<style scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.custom-table th,
.custom-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.custom-table th {
  background-color: #1e3859;
  color: #fff;
}

.btn-action {
  margin-right: 5px;
}

.agregarBtn {
  color: #1e3859;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  list-style: none; /* Elimina la viñeta */
  display: inline-block; /* Asegura que el enlace se comporte como un bloque */
  padding: 10px 20px; /* Añade relleno para que se vea como un botón */
  background-color: #ff3030; /* Color de fondo rojo */
  color: #fff; /* Color del texto en el botón */
  border-radius: 5px; /* Añade esquinas redondeadas */
}
</style>
