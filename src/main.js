import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import firebase from 'firebase';
//import firebase from 'firebase'
// Install BootstrapVue
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAxOg5kTE3CquDQGHlhRqcVG1jlJtnslRQ",
    authDomain: "corner-dog2.firebaseapp.com",
    databaseURL: "https://corner-dog2.firebaseio.com",
    projectId: "corner-dog2",
    storageBucket: "corner-dog2.appspot.com",
    messagingSenderId: "589968566460",
    appId: "1:589968566460:web:177cec1675d95dcaed88b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
