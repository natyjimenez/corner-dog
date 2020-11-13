<!-- Template -->
<template>
  <div>

    <div class="banner-breed">
      <h1>Información sobre Razas</h1>
    </div>

    <div class="container">
      <div class="">
            <p >
              Primero que todo queremos aclarar que nuestra intención NO es
              fomentar o promover la compra de perros (u otro animal). Muy por
              el contrario somos partícipes de la ADOPCIÓN.<br />
              El fin de esta sección es informativa, principalmente porque no
              podemos obligar a las personas a NO comprar perros de raza, pero
              Sí podemos entregar un poco más de información para que al menos
              adquieran un perro que se adapte a sus necesidades y estilos de
              vida, y no se convierta en otro perro abandonado.
            </p>
            </div>
            <div class="">
            <p>
              Esta es una realidad silenciosa, hay MUCHOS perros DE RAZA que son
            adquiridos por moda, y luego son abandonados.<br />
            Por ejemplo una familia que vive en un departamento adquiere un
            chihuahua para sus hijos por ser un perro de tamaño pequeño que se
            adapta al espacio y tiene aspecto "adorable"... ERROR! el
            temperamento del chihuahua no lo hace compatible con niños pequeños.
            </p>
            </div>
    </div>


    <div class="breed container">
      <v-container>
        <v-row>
          <v-col md="4" v-for="(raza, i) in razas" :key="i">
            <Cardbreed :raza="raza" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<!-- Script -->
<script>
import Cardbreed from "@/components/breed/Cardbreed.vue";
import { mapState } from "vuex"
export default {
  name: "Breed",
  computed: {
    ...mapState(['razas'])
  },
  components: {
    Cardbreed,
  },
};
</script>

<!-- Style -->
<style lang="scss">
.breed {
  margin-bottom: 100px;
}
.banner-breed {
  background-image: url("../../src/assets/img/banner-huesito-verde-oscuro.png");
  color: #ffffff;
  padding: 20px;
  text-shadow: 0.1em 0.1em #333;
  margin-bottom: 50px;
}
.cardsGroup {
  justify-content: center;
}
</style>
