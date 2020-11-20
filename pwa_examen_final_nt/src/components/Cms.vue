<template>
  <div class="container">
      <div class="row">
          <div class="txtBox">
              <h2>¿Qué es un CMS?</h2>
              <p>Es un software desarrollado para que cualquier usuario pueda <strong> administrar, mantener y gestionar contenidos de un sitio web</strong>  con fácilidad y especialmente orientado para personas que tienen pocos o nulos conocimientos de programamción web </p>
          </div>
          <div class="imgBox">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1V6pkJLsOXVbgDppuqcjlVxZt-LkWfRMcpA&usqp=CAU" alt="">
          </div>
      </div>
      <div class="row">
          <p>Los CMS son capaces de gestionar difernetes tipos de contenido, así como:</p>
          <ul>
              <li><h3>Blogs</h3></li>
              <li><h3>páginas de e-commerce</h3></li>
              <li><h3>´paginas corporativas</h3></li>
              <li><h3>Noticieros</h3></li>
          </ul>
      </div>
      <div class="row">
          <div class="ventajas">
              <h2>Ventajas</h2>
              <ul>
                  <li><h3>Exige un menor tiempo de desarrollo, pues la mayoria de contenido ya se encuentra creado</h3></li>
                  <li><h3>Es fácil de crear, gestionar y administrar pues no se nececitan grandes conocimientos de programació</h3></li>
                  <li><h3>Es facil de actualizar en cuanto a contenido y diseño sin comprometer el funcionamiento</h3></li>
                  <li><h3>Es relativamente menos costoso que una página a la medida pues podría hacerlo cualquier persona</h3></li>
              </ul>
          </div>
          <div class="ventajas">
              <h2>Desventajas</h2>
              <ul>
                  <li><h3>Puede incluir costos ocultos</h3></li>
                  <li><h3>E mantenimiento puede ser costoso</h3></li>
                  <li><h3>si se encuentra algun problema el soporte tecnico puede ser dificil de contactar en algunos proveedores</h3></li>
                  <li><h3>La disponibilidad y optimización de recursos está fuera de las manos</h3></li>
              </ul>
          </div>
      </div>
      <div class="row">
          <h1>Ejemplos</h1>
          <div class="imgsBox">
              <img src="https://assets.stickpng.com/images/5847f592cef1014c0b5e4896.png" alt="">
              <img src="https://docs.joomla.org/images/5/53/Vertical-logo-light-background-en.png" alt="">
              <img src="https://www.logolynx.com/images/logolynx/23/2385af4064a6440cb88538f517b1d1d7.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
 .container{
     width: 100%;
     height: auto;
 }

 .container .row{
     margin: 50px 0;
     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;
     flex-wrap: wrap;
 }
 .container .row .txtBox{
     width: 550px;
     height: 400px;
 }
 .container .row .txtBox h2{
     font-family: var(--font-subtitulo);
     font-size: 30px;
     margin-bottom: 50px;
 }
 .container .row .txtBox p{
     text-align: justify;
     font-family: var(--font-content);
     font-size: 20px;
 }
 .container .row .imgBox{
     width: 350px;
     height: 400px;
 }
 .container .row .imgBox img{
     width: 100%;
     height: 100%;
 }
 .container .row:nth-child(2) p{
     width: 400px;
     text-align: justify;
     font-family: var(--font-subtitulo);
     font-size: 30px;
 }
 .container .row:nth-child(2) ul li h3{
     font-family: var(--font-content);
     font-size: 20px;
 }
.container .row:nth-child(3) .ventajas{
    width: 500px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-nav);
}
.container .row:nth-child(3) .ventajas h2{
    font-family: var(--font-subtitulo);
     font-size: 30px;
}
.container .row:nth-child(3) .ventajas h3{
    font-family: var(--font-content);
     font-size: 20px;
}
.container .row:nth-child(4) h1{
     font-family: var(--font-subtitulo);
     font-size: 40px;
}
.container .row:nth-child(4) .imgsBox{
     display: flex;
     flex-direction: row;
     align-content: center;
     justify-content: space-evenly;
}
.container .row:nth-child(4) .imgsBox img{
    width: 200px;
    height: 200px;
}
</style>>

</style>