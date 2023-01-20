<template>
      <div>
        <h2>{{ personnage.pseudo }}:</h2>
        <span>{{ personnage.numero }}</span>
        <img @click="call" src="../assets/telephone.png">

    </div>
</template>
<script>
export default {
 name: 'CartePerso',
 props:
 ['personnage'
],
data(){
    return{
        appel:{
            numero:null,
            date: null
        }
    }
},
methods:{
        call(){
            this.appel.numero = this.personnage.numero
            this.appel.date = new Date().toLocaleString()
            console.log(this.appel)
            this.$store.commit('call', this.appel)

            
        }
    }
}
</script>
<style scoped>
    div {
        width: 200px;
        margin: 0 auto;
        height: 50px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-top: 1px solid black ;   
        border-bottom: 1px solid black ;    
    }
    img{
        width: 25px;
    }

</style>