<template>
  <div id="album">
      <div class="container">
        <div class="row">
          <div class="pic"></div>
          <div class="pic"></div>
          <div class="pic"></div>
          <div class="pic"></div>
          <div class="pic"></div>
          <div class="pic"></div>
          <div class="pic"></div>
          <div class="pic"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Album'
}
</script>

<style scoped>
    #album{
        margin: 55px 0;
        height: 150px;
    }
    #album .container{
        min-width: 100%;
        height: 100%;
    }
    #album .container .row{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content:space-evenly;
    }
    #album .container .row .pic{
        margin: 0;
        width: 200px;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    #album .container .row .pic:nth-child(1){
        background-image: url(../../assets/img/fondo6.jpg);
    }
    #album .container .row .pic:nth-child(2){
        background-image: url(../../assets/img/fondo2.jpg);
    }
    #album .container .row .pic:nth-child(3){
        background-image: url(../../assets/img/fondo3.jpg);
    }
    #album .container .row .pic:nth-child(4){
        background-image: url(../../assets/img/fondo4.jpg);
    }
    #album .container .row .pic:nth-child(5){
        background-image: url(../../assets/img/fondo5.jpg);
    }#album .container .row .pic:nth-child(6){
        background-image: url(../../assets/img/fondo6.jpg);
    }
    #album .container .row .pic:nth-child(7){
        background-image: url(../../assets/img/fondo1.jpg);
    }
    #album .container .row .pic:nth-child(8){
        background-image: url(../../assets/img/fondo2.jpg);
    }
    #album .container .row .pic:nth-child(9){
        background-image: url(../../assets/img/fondo4.jpg);
    }
    #album .container .row .pic:nth-child(10){
        background-image: url(../../assets/img/fondo5.jpg);
    }
    #album .container .row .pic:nth-child(11){
        background-image: url(../../assets/img/fondo3.jpg);
    }
</style>