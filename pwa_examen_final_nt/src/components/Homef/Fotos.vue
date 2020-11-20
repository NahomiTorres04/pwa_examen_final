<template>
   <div id="fotos" class="text-center">
      <div class="container">
        <div class="row">
        </div>
        <div class="row">
          <div class="six columns foto">
            <h2>Autenticación REST API</h2>
          </div>
          <div class="six columns foto">
            <h2>Tecnologias Front-End</h2>
          </div>
        </div>
        <div class="row">
          <div class="six columns foto">
            <h2>Arquitectura Web</h2>
          </div>
          <div class="six columns foto">
            <h2>CMS</h2>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Fotos'
}
</script>

<style scoped>
    #fotos{
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #fotos .container{
        min-width: 80%;
        height: 80%;
    }
    #fotos .container .row{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
    }
    #fotos .container .row .txt h3{
        font-family: var(--fontsubt);
        font-size: 35px;
    }
    #fotos .container .row .foto{
        width: 500px;
        height: 500px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #fotos .container .row .foto h2{
        padding: 30px 65px;
          background-color: var(--gradientbanner);
          backdrop-filter: blur(10px);
          font-family: var(--fontcontent);
          font-size: 28px;
          font-weight: bold;
    }
    #fotos .container .row:nth-child(1){
        height: 20%;
    }
    #fotos .container .row:nth-child(1) .txt h3{
        margin-top: 35px;
    }
    #fotos .container .row:nth-child(2){
        height: 100%;
        margin: 30px;
    }
    #fotos .container .row:nth-child(2) .foto:nth-child(1){
        background-image: url(https://arandasoft.com/wp-content/uploads/2016/10/seguridad.png);
    }
    #fotos .container .row:nth-child(2) .foto:nth-child(2){
        background-image: url(https://miro.medium.com/max/1200/1*0FAbAXug4XMepL7fGIvXFg.png);
    }
    #fotos .container .row:nth-child(3){
        height: 100%;
        margin: 30px;
    }
    #fotos .container .row:nth-child(3) .foto:nth-child(1){
        background-image: url(https://edgarbc.files.wordpress.com/2014/02/501f9-cliente-servidor.png?w=676);
    }
    #fotos .container .row:nth-child(3) .foto:nth-child(2){
        background-image: url(https://www.departamentodeinternet.com/wp-content/uploads/2011/05/cms-2.jpg);
    }


</style>