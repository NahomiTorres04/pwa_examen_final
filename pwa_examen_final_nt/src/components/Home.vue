<template>
    <main>
      <Banner></Banner>
      <Fotos></Fotos>
    </main>
</template>

<script>

import Banner from './Homef/Banner'
import Fotos from './Homef/Fotos'

export default {
  name: 'Home',
  components: {
    Banner,
    Fotos
  }
}
</script>

<style scoped >
main{
    height: auto;
    width: 100%;
}



</style>
