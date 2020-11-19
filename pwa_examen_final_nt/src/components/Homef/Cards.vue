<template>
    <div id="categorias" class="text-center">
      <div class="container">
        <div class="row">
          <Card v-for="place in places" :place="place" :key="place.id"/>
        </div>
      </div>
    </div>
</template>

<script>
import Card from './Card';
export default {
    name: 'Cards',
        components: {
          Card
    },
    data(){
      return{
        places: [
          {
            id: 0,
            score: 0,
            img_source: "https://tecnohotelnews.com/wp-content/uploads/2019/04/habitacion-gorka-room-mate.jpg",
            title: "Habitación juvenil",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rem tenetur est aspernatur neque quisquam?"
          },
          {
            id: 1,
            score: 0,
            img_source: "https://www.delta.com/content/dam/delta-applications/merch/hero_stub/hotel-landing-hero.jpg",
            title: "Habitación deluxe",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rem tenetur est aspernatur neque quisquam?"
          },
          {
            id: 2,
            score: 0,
            img_source: "https://www.hotelpagi.com/images/rooms/family-room/gallery/Amsterdam_HOTEL_PAGI_NOV18_560.jpg",
            title: "Habitación Familiar",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rem tenetur est aspernatur neque quisquam?"
          },
          {
            id: 3,
            score: 0,
            img_source: "https://lh3.googleusercontent.com/proxy/txIvTaOGP5vWb3gtEVhRTA7cIrdsLk00TZXzMrOsPzTW2bA6oy8KeDOrac5c8wtLyh_2nlaFidA4PqKMWM5_xOt7jF4fiiPAVS1Xm4ddnQiBdm8smPysMMTOk2zHO6TUCPrh50aX1uq0DOetgtsMJ8265SBIQYon8HTkOIDoEgyp_JMUZbbtsQ",
            title: "Penhouse",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rem tenetur est aspernatur neque quisquam?"
          },

        ]
      }
    }
}
</script>

<style scoped>
    #categorias{
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #categorias .container{
        margin: 35px 0px;
        min-width: 95%;
        height: auto;
    }
    #categorias .container .row{
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }


</style>