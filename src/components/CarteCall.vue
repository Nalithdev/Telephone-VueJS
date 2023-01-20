<template>
      <div class="call">
        <h3>{{check(personnage.numero.toString())}}</h3>
        <div>
        <span class="date">{{ personnage.date }}</span>
        <img @click="call" src="../assets/telephone.png">
        </div>
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
            this.appel.date = new Date().toLocaleString()
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
    .call {
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
    .date{
        display: flex;
        justify-content: end;
        width: 40%;
        font-size: 75%;
        color:rgb(128, 128, 128)
    }
    div{
        width: 25%;
        display: flex;
        gap:10px;
    }
</style>