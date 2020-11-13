<template>
  <div>
      <b-form-group id="input-group-1" label="Email:" label-for="input-1" >
        <b-form-input class="input" id="input-1"  type="email" required placeholder="Ingrese email" >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input class="input" id="input-2" required placeholder="Ingrese password" >
        </b-form-input>
      </b-form-group>

      <b-button type="submit" class="btnAceptar" >Aceptar</b-button>
      
 <!--     <div class="datosLogin">
        <h6 class="titleDatos">****Datos Login****</h6>
        <p>
          Usuario: walterwhite@gmail.com <br>
          Password: 123456
        </p>
      </div>  -->   
  </div>
</template>

<script>
export default {
    name: 'Form',
}
</script>