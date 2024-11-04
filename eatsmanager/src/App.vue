<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button type="button" @click="showAlert">Show Alert</button>
  <input type="text" v-model="description" name="" id="">
  <span>{{producto}}</span>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :elems="elements"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld
  },
  
})
export default class App extends Vue {
  elements: number[] = [1, 2, 3, 4, 5,123,545,54,54,54,545,656,76];
  description = '';
  producto = '';
  showAlert(): void { 
    alert('Button clicked!');
    fetch( 'http://localhost:3000/api/document/'+this.description)
    .then(prod => prod.json())
    .then( datos => {
      this.producto = datos.description
    })
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
