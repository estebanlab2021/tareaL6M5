<template>
  <cabecera />
  <apiproductos />
  <apivista />
  <pie />
</template>

<script>
import Apiproductos from './components/Apiproductos.vue'
import Apivista from './components/Apivista.vue'
import Pie from './components/Pie.vue'
import Cabecera from './components/Cabecera.vue'


export default {
  name: 'App',
  components: {
    Apiproductos,
    Apivista,
    Pie,
    Cabecera
  }
}
</script>

<style>

</style>
