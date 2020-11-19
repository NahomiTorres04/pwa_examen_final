<template>
   <div id="fotos" class="text-center">
      <div class="container">
        <div class="row">
          <div class="twelve columns txt">
            <h3>Lorem, ipsum dolor.</h3>
          </div>
        </div>
        <div class="row">
          <div class="six columns foto">
            <h2>Lorem, ipsum.</h2>
          </div>
          <div class="six columns foto">
            <h2>Lorem, ipsum.</h2>
          </div>
        </div>
        <div class="row">
          <div class="six columns foto">
            <h2>Lorem, ipsum.</h2>
          </div>
          <div class="six columns foto">
            <h2>Lorem, ipsum.</h2>
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
        background-image: url(../../assets/img/fondo6.jpg);
    }
    #fotos .container .row:nth-child(2) .foto:nth-child(2){
        background-image: url(../../assets/img/fondo7.jpg);
    }
    #fotos .container .row:nth-child(3){
        height: 100%;
        margin: 30px;
    }
    #fotos .container .row:nth-child(3) .foto:nth-child(1){
        background-image: url(../../assets/img/fondo2.jpg);
    }
    #fotos .container .row:nth-child(3) .foto:nth-child(2){
        background-image: url(../../assets/img/fondo1.jpg);
    }


</style>