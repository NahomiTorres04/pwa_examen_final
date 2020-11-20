<template>
<div id="app">
    <Header></Header>
    <router-view>
      <Arquitectura></Arquitectura>
      <Tecnologias></Tecnologias>
      <Autententicacion></Autententicacion>
      <Cms></Cms>
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Arquitectura from './components/Arquitectura'
import Tecnologias from './components/Tecnologias'
import Autenticacion from './components/Autenticacion'
import Cms from './components/Cms'


export default {
  name: 'app',
  components: {
    Header,
    Home,
    Footer,
    Arquitectura,
    Tecnologias,
    Cms,
    Autenticacion
  }
}
</script>

<style>
:root {
    --bckg: white;
    --color-secundario: #912c44;
    --color-nav: #FFE5EB;
    --rgba-hover-nav: rgba(255,255,255,.6);
    --color-submenu: rgba(255,229,235,0.7) ;
    --color-fuente-nav: black;
    --color-fuente-logo-titulo: black;
    --color-fuente-logo-contenido: black;
    --color-fuente-hover-nav: #912c44;
    --gradientbanner: rgba(255, 255, 255, 0.6);
    --bckgreg: #E5EAF0;
    --bckglog: #ffffff;
    --color-button-reg: #ff668a;
    --color-border-reg: #949494;

    /**Fuentes/ */
    --font-titulo: 'Satisfy', cursive;
    --font-subtitulo: 'Special Elite', cursive;
    --font-content: 'Titillium Web', sans-serif;
}
body {
  margin: 0;
}
.text-center {
  text-align: center;
}



</style>
