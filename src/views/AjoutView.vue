<template>
    <div>
        <h1>Ajouter un Contact</h1>
        <FormPerso :personnages="personnages" />   
    <div class="cartes">
</div>
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
        .cartes {
        margin: 50px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-around;
    
}
</style>