<template>
      <div class="contact">
        <div>
        <h2>{{ personnage.pseudo }}:</h2>
        
        <span>{{ personnage.numero }}</span>
        </div>
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
    .contact {
        width: 100% ;
        margin: 0 auto;
        height: 50px;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;    
        border-top: 1px solid black ;   
        border-bottom: 1px solid black ; 
        gap: 60px;
    }
    img{
        width: 25px;
    }
    div{
        width: 25%;
        display: flex;
        align-items: center;
        gap:10px;
    }

</style>