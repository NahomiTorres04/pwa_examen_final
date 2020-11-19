<template>
    <main>
      <Banner></Banner>
      <Cards></Cards>
      <Fotos></Fotos>
      <Registro></Registro>
      <Album></Album>
    </main>
</template>

<script>

import Banner from './Homef/Banner'
import Album from './Homef/Album'
import Card from './Homef/Card'
import Cards from './Homef/Cards'
import Descripcion from './Homef/Descripcion'
import Fotos from './Homef/Fotos'
import Registro from './Homef/Registro'


export default {
  name: 'Home',
  components: {
    Banner,
    Album,
    Fotos,
    Registro,
    Descripcion,
    Cards,
    Card,
    Album
  }
}
</script>

<style scoped >
main{
    height: auto;
    width: 100%;
}



</style>
