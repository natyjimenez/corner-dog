<template>
  <div id="app">
    <Navbar />
    <div  class="botonera" id="nav">
      <router-link to="/"><b-button class="btnHome">Home</b-button></router-link> 
      <router-link to="/about"><b-button class="btnMision">Misión</b-button></router-link> 
      <router-link to="/adoption"><b-button class="btnAdopta">Adopta</b-button></router-link> 
      <router-link to="/firstaid"><b-button class="btnGuia">Guía primeros auxilios</b-button></router-link> 
      <router-link to="/breed"><b-button class="btnRazas">Razas</b-button></router-link> 
      <router-link to="/contact"><b-button class="btnContacto">Contacto</b-button></router-link> 
      <router-link to="/admin"><b-button class="btnAdmin">Administrador</b-button></router-link> 
    </div>
    <router-view/>
    <Footer />
  </div>
</template>


<!-- Script -->
<script>
import Navbar from "@/components/appelements/Navbar.vue";
import Footer from "@/components/appelements/Footer.vue";
import { mapActions } from 'vuex';
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
methods: {
    ...mapActions(["getData"]),
  },
 created() {
    this.getData();
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.botonera {
  background-color:#6c757d;
  color: #ffffff !important;
  padding: 10px;
  display: block;
}
.btnHome {
  color: #ffffff !important;
  background-color: #70e73c !important;
  margin-left: 3px;
  margin-Right: 3px;
}
.btnMision {
  color: #ffffff !important;
  background-color: #710c96 !important;
  margin-left: 3px;
  margin-Right: 3px;
}
.btnAdopta {
  color: #ffffff !important;
  background-color: #ffcc00 !important;
  margin-left: 3px;
  margin-Right: 3px;
}
.btnGuia {
  color: #ffffff !important;
  background-color: #ed5564 !important;
  margin-left: 3px;
  margin-Right: 3px;
}
.btnRazas {
  color: #ffffff !important;
  background-color: #00c834 !important;
  margin-left: 3px;
  margin-Right: 3px;
}
.btnContacto {
  color: #ffffff !important;
  background-color: #53bceb !important;
  margin-left: 3px;
  margin-Right: 3px;
}
.btnAdmin {
  color: #ffffff !important;
  background-color: #33cc99 !important;
  margin-left: 3px;
  margin-Right: 3px;
}

@media (max-width: 768px) {
  .botonera {
    display: none;
  }
}
</style>