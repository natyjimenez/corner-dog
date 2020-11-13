<!-- Template -->
<template>
  <div>
    <div class="banner-admin">
      <h1>Administrador</h1>
    </div>
    <div class="admin container">
      <Form />
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Form from "@/components/admin/Form.vue";
export default {
  name: "Admin",
  components: {
    Form,
  },
};
</script>

<!-- Style -->
<style lang="scss">
.admin {
  margin-bottom: 100px;
}
.banner-admin {
  background-image: url("../../src/assets/img/banner-huesito-verde-oscuro.png");
  opacity: 0.8;
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 50px;
}
.btnAceptar {
  color: #ffffff;
  background-color: rgb(3, 170, 148);
  border-style: none !important;
  border-radius: 5px;
  padding: 10px 80px;
  margin-top: 50px;
}
.input {
  max-width: 400px;
  margin: auto;
}
.datosLogin {
  margin-top: 50px;
}
.titleDatos {
  font-weight: bolder;
}
</style>
