<!-- Template -->
<template>
  <div>
    <div class="banner-contact">
      <h1>Contacto</h1>
    </div>
    <div class="contact container">
      <Form />
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Form from "@/components/Contact/Form.vue";
export default {
  name: "Contact",
  components: {
    Form,
  },
};
</script>

<!-- Style -->
<style lang="scss">
.contact {
  margin-bottom: 100px;
}
.banner-contact {
  background-image: url("../../src/assets/img/banner-huesito-verde-azul.png");
  opacity: 0.8;
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 50px;
}
</style>
