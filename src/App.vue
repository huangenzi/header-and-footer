<template>
  <div id="app">
    <sl-header></sl-header>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <sl-footer></sl-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SlHeader from './packages/header/sl-header.vue'
import SlFooter from './packages/footer/sl-footer.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    SlHeader,
    SlFooter
  }
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
