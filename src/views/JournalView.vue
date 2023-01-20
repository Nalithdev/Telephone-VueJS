<template>
    <div class="tel">
        <h1>Journal</h1>
    <div class="cartes">
    <div v-for="personnage in calleds"  :key="personnage">
      <CarteCall :personnage="personnage"/>
    </div>
</div>
    </div>
</template>
<script>
import CarteCall from '@/components/CarteCall.vue'

export default {
    name: 'ContactView',
    components: {
        CarteCall,
    },


    computed:{
        calleds(){
            console.log(this.$store.state.called)
            console.log(this.$store.state.dates)
            
            return this.$store.state.called
        },
        date(){
            
            return this.$store.state.dates
        }
    },
    
    }
    

</script>
<style scoped>
    .tel{
        margin: auto;
        width: 20%;
        background-color: rgb(255, 228, 182);
        padding: 1%;
        border: 2px solid black;
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
</style>