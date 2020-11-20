/<template>
  <div id="contacto" class="text-center">
      <div class="container">
        <div class="row">
          <div class="tarjeta">
            <h5>19/20/2020</h5>
          </div>
          <div class="tarjeta">
            <h1>NT</h1>
          </div>
          <div class="tarjeta">
            <a href="">universidad Rafael landivar</a>
            <a href="">Facultad de ingeniería</a>
            <a href="">Ingeniería en informática y sistemas</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    #contacto .container .row{
      display: flex;
      flex-direction: row;
      justify-content:space-evenly;
      align-items: center;
      flex-wrap: wrap;
      background: var(--color-nav);
    } 
    #contacto .container .row .tarjeta:nth-child(1) input{
        border: solid 1px var(--fontc);
        font-family: var(--font-content);
    }
    #contacto .container .row .tarjeta:nth-child(2) h1{
        font-family: var(--font-subtitulo);
        font-size: 70px;
    }
    #contacto .container .row .tarjeta:nth-child(3) a{
         border-radius: 50%;
          background-color: var(--fontc);
          color: var(--color-fuente-nav);
          display: inline-block;
          text-decoration: none;
          padding: 10px;
          width: 200px;
          transition: all 0.3s linear;
    }
    #contacto .container .row .tarjeta:nth-child(3) a:hover{
            background: var(--color-fuente-hover-nav);
            color: var(--fontc);
    }
</style>