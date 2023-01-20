<template>
    <div class="tel">
        <h1>Ajouter un Contact</h1>
        <FormPerso :personnages="personnages" />   
    </div>
</template>
<script>
import FormPerso from '@/components/FormPerso.vue'
export default {
    name: 'ContactView',
    components: {
        FormPerso
    },

    computed:{
        personnages(){
            return this.$store.state.personnages
        }
    }
    
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
</style>