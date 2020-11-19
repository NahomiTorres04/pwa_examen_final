<template>
  <main>
      <Logo></Logo>
      <Nav></Nav>
      <Navmovil></Navmovil>
  </main>
</template>

<script>
import Nav from './Headerf/Nav'
import Navmovil from './Headerf/Navmovil'
import Logo from './Headerf/Logo'


export default {
    name: 'Header',
    components: {
    Nav,
    Navmovil,
    Logo
  }
}
</script>

<style>

</style>