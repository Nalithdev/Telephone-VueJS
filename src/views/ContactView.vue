<template>
    <div class="tel">
        <div class="ajouter">
        <router-link to="/ajout">+</router-link>
    </div>
        <h1>Contact</h1>
        
    <div class="cartes">
    <div v-for="personnage in personnages"  :key="personnage.pseudo">
      <CartePerso :personnage="personnage" />
    </div>
    <p>{{ date }}</p>
</div>
    </div>
</template>
<script>
import CartePerso from '@/components/CartePerso.vue'

export default {
    name: 'ContactView',
    components: {
        CartePerso,
    },

    computed:{
        personnages(){
            return this.$store.state.personnages
        }
    },
 

    
    }
    

</script>
<style scoped>
    .tel{
        width: 20%;
        background-color: rgb(255, 228, 182);
        padding: 1%;
        border: 2px solid black;
        margin: auto;
    }
    .cartes {
        margin: auto;
        padding: 10px;
    
}
    .cartes div {
        padding: 10px;
    }
a{
        text-decoration: none;
        font-size: 40px;
        color: black;
    }
    .ajouter{
        display: flex;
        justify-content: end;
        height: 20px;

    }
</style>