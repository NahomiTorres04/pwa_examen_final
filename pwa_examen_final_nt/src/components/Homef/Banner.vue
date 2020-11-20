<template>
   <div id="banner" class="text-center">
      <div class="container">
        <div class="row">
          <div class="six columns bann">
            <p>
              <strong>¡Bienvenido!</strong>
              <br>
              En este sitio se encuentra un poco del contenido aprendido en programación web URL 2020
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>

    #banner{
        height: auto;
        background-image: url(https://revo300.academy/wp-content/uploads/2019/12/blur-close-up-code-computer-546819-1080x675.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: repeat;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #banner .container {
        margin: 150px 0;
        height: auto;
    }
    #banner .container .row{
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #banner .container .row .bann{
        height: auto;
        background-color: var(--gradientbanner);
        backdrop-filter: blur(10px);
    }
    #banner .container .row .bann p{
          margin: 15px;
          padding: 35px 0;
          /*border: solid 1px var(--fontc);*/
          font-family: var(--font-content);
          font-size: 13px;
    }
    #banner .container .row .bann p strong{
        font-family: var(--font-subtitulo);
        font-size: 30px;
    }

    #banner .container .row .bann button{
        background: var(--color-secundario);
        color: var(--bckg);
    }
 @media screen and (max-width: 700px){
   #banner{
     transform: translateY(80px);
     margin-bottom: 80px;
   }
 }
</style>