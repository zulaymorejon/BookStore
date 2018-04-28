// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '@/config/firebase';

firebase.initializeApp(firebaseConfig);

//defino una constante
export const db = firebase.firestore();

import i18n from '@/config/i18n';
import store from '@/store';

//cuando importo utilizo @ pero cuando quiero requerir utilizo el .
require('./config/vuetify');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,//internacionalizacion de idiomas
  store,//Vuex manejo de variables globales
  components: { App },
  template: '<App/>'
})
