<template >
    <div>
        <button  @click="ajoutchiffre(chiffre)">{{ chiffre }}</button>
        
    </div>
</template>
<script>
export default {
    name: 'ToucheClavier',
    props: [
        'chiffre'
    ]
}
</script>
<style scoped>
    button{
        width:  50px;
        height: 50px;
    }
</style>