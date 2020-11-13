import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    razas: [],
  },
  mutations: {
    GET_DATA(state, razas) {
      state.razas = razas;
    },
  },
  actions: {
    getData({ commit }) {
      firebase
        .firestore()
        .collection("razas")
        .onSnapshot((snapshot) => {
          let razas = [];
          snapshot.forEach((p) => {
            razas.push({ id: p.id, data: p.data() });
          });
          commit("GET_DATA", razas);
        });
    },
  },
  modules: {
  }
})
