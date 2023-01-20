<template>
      <div>
        <span>{{check(personnage.numero)}}</span>
        <span>{{ personnage.date }}</span>
        <img @click="call" src="../assets/telephone.png">

    </div>
</template>
<script>
export default {
 name: 'CartePerso',
 props:
 ['personnage',
 'name',
 'date'
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
            this.appel.date = new Date().toLocaleTimeString()
            console.log(this.appel)
            this.$store.commit('call', this.appel)


        },
        check(numero){
            let persoFromData = this.$store.state.personnages.find((p)=>{
                return p.numero.toString() === numero
            })
            console.log(persoFromData)
            if(persoFromData !== null && persoFromData!== undefined){
                return persoFromData.pseudo
            }else{
                return numero
            }
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