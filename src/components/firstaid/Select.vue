<template>
  <div>
    <b-form-select v-model="selected" :options="options" class="mt-5"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
      name:"Select",
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Selecciona' },
          { value: 'Heridas cutáneas', text: 'Heridas cutáneas' },
          { value: 'Fractura, Luxación y Esguince', text: 'Fractura, Luxación y Esguince' },
          { value: 'Traumatismo Ocular', text: 'Traumatismo Ocular' },
          { value: 'Congelación', text: 'Congelación' },
          { value: 'Enfriamiento', text: 'Enfriamiento' },
          { value: 'Golpe de calor', text: 'Golpe de calor' },
          { value: 'Quemaduras', text: 'Quemaduras' },
          { value: 'Quemaduras Eléctricas', text: 'Quemaduras Eléctricas' },
          { value: 'Envenenamiento', text: 'Envenenamiento' },
          { value: 'Ahogamiento', text: 'Ahogamiento' },
          { value: 'Obstrucción respiratoria', text: 'Obstrucción respiratoria' },
          { value: 'Parálisis', text: 'Parálisis' },
          { value: 'Convulsiones', text: 'Convulsiones' },
        ]
      }
    }
  }
</script>