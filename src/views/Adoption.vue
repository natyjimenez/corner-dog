<!-- Template -->
<template>
  <div>
    <div class="banner-adoption">
      <h1>Adopción</h1>
    </div>
    <div class="adoption container">
      <div class="cardsGroupAdoption row m-lg-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Card from "@/components/adoption/Card.vue";
import { mapState } from "vuex"
export default {
  name: "Adoption",
    computed: {
    ...mapState(['razas'])
  },
  components: {
    Card,
  },
};
</script>

<!-- Style -->
<style>
.adoption {
  margin-bottom: 100px;
}
.banner-adoption {
  background-image: url("../../src/assets/img/banner-huesito-naranja.png");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 50px;
}
.cardsGroupAdoption {
  justify-content: center;
}
</style>
