<template>
  <div class="w-50 m-auto">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Ingresa tu Email">         
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Ingresa tu nombre">         
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Mensaje:" label-for="input-3">
        <b-form-textarea id="textarea" v-model="form.text" placeholder="Ingresa tu mensaje" rows="3" max-rows="6">        
        </b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Borrar</b-button>
    </b-form>
   
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: '',
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.text = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

</style>