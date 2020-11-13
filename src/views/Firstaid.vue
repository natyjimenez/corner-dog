<!-- Template -->
<template>
  <div>
    <div class="banner-firstaid">
      <h1>Guía básica de primeros auxilios</h1>
    </div>
    <div class="firstaid container">
      <Select />
      <img src="../../src/assets/img/slide/mestizo-002.jpg" class="img-raza" />
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Select from "@/components/firstaid/Select.vue";
export default {
  name: "Firstaid",
  components: {
    Select,
  },
};
</script>

<!-- Style -->
<style lang="scss">
.firstaid {
  margin-bottom: 100px;
}
.banner-firstaid {
  background-image: url("../../src/assets/img/banner-huesito.png");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 50px;
}
.img-raza {
  width: 100%;
  height: auto;
  margin-top: 50px;
}
</style>
