<template>
  <div id="Logo" class="text-center">
    <div class="container">
      <div class="row">
        <div class="item">
          <h1>Nahomi Torres</h1>
          <p>Blog de diseño</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped>
#Logo {
  background-color: var(--bckglog);
  height: 150px;
}
#Logo .container .row {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container .row .item {
  padding: 25px 0;
}
.container .row .item h1 {
  font-family: var(--font-subtitulo);
  margin: 0;
  padding: 5px;
  font-size: 45px;
  color: var(--color-fuente-logo-titulo);
  font-weight: bolder;
}
.container .row .item p {
  font-family: var(--font-content);
  font-size: 15px;
  color: var(--color-fuente-logo-contenido);
  margin-bottom: 0;
}
 @media screen and (max-width: 700px){
   #Logo{
     display: none;
   }
 }

</style>
