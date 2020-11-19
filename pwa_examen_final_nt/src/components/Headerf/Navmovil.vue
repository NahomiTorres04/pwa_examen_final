<template>
    <div class="menu_movil">
        <div class="imgBox">
            <h2>NahomiStore</h2>
        </div>
        <a href="#" class="btn-menu"><i class="fas fa-bars"></i></a>
    </div>
</template>

<script>
export default {
    name: "Navmovil"
}
</script>

<style scoped>
.menu_movil{
  display: none;
}
 @media screen and (max-width: 700px) {
  body {
    padding-top: 80px;
  }
  .menu_movil {
    max-width: 700px;
    width: 100%;
    height: 80px;
    top: 0;
    background: var(--color-nav);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
  }
  .menu_movil .imgBox {
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .menu_movil a {
    color: var(--color-fuente-nav);
    margin-right: 25px;
    font-family: var(--font-content);
    font-size: 30px;
  }
  .menu_movil h2 {
    font-size: 25px;
    text-transform: uppercase;
    color: var(--color-fuente-hover-nav);
    margin-left: 10px;
  }
}
</style>