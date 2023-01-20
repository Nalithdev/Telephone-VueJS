<template >
    <div class="tel">
        <h1>Clavier</h1>
        <div class="flex">
        <p class="numero"> {{ numero }} </p>
        <p @click="reset()">Supprimé</p>
    </div>
        <div class="clavier">
        <div  v-for="chiffre in chiffres" :key="chiffre">
            <button class="chiffre"  @click="ajoutchiffre(chiffre)">{{ chiffre }}</button>
        
        </div>
        
    </div>
    <button class="call" @click="call">Appeler</button>
    
        
        
    </div>
</template>
<script>
// import ToucheClavier from '@/components/ToucheClavier.vue' -->
export default {
    name:'ClavierView',
    // components: {ToucheClavier
    // },
    data(){
        return{
        chiffres: [1 , 2 , 3 ,4 ,5 ,6 ,7 ,8 ,9, 0],
        numero:'',
        appel:{
            numero:null,
            date: null
        }

        
    }
},

methods: {
        ajoutchiffre(chiffress){
            this.numero += chiffress
        },
        reset(){
            this.numero = ''
        },
        call(){
            this.appel.numero = this.numero.toString()            
            this.appel.date = new Date().toLocaleTimeString()
            console.log(this.appel)
            this.$store.commit('call', this.appel)

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
    .clavier{
        margin: auto;
        justify-content: center;
        width: 70%;
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2%;
    }
    .numero{
        margin: auto;
        border: 1px solid black;
        width: 50%;
        height: 20px;
        margin-bottom: 1%;
        background-color: rgba(0, 213, 255, 0.51);
    }
    .chiffre{
        width:  50px;
        height: 50px;
        font-size: 150%;
        background-color: #fff;
    }
    button:hover{
        background-color: rgb(203, 203, 203);
        transition: 0.5s;
    }
    .call{
        width:  100px;
        height: 50px;
        font-size: 125%;
        background-color: #fff;
    }
   

</style>