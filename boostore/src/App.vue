<template>
  <!--<div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>-->

  <main>
    <v-app>
      <v-content>
        <guest-navigation/>
        <v-container class="mt-3 mb-3">
          <router-view/>
        </v-container>
        <app-footer/>
      </v-content>
    </v-app>
    
  </main>
</template>

<script>
//importa la pagina
import AppFooter from "@/components/Footer";
import GuestNavigation from "@/navigation/guess";
import PersonalInformation from "@/components/About";

export default {
  //agrega los componentes
  components:{
    AppFooter,
    GuestNavigation,
    PersonalInformation
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
