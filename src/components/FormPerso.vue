<template>
    <form @submit.prevent="ajoutPerso">
        <input type="text" placeholder="Pseudo..." v-model="formPerso.pseudo">
        <span class="error" v-if="formPerso.pseudo.length <2 && error">Le pseudo doit avoir au moins 3 caractère</span>
        <input type="number" placeholder="phone..." v-model="formPerso.numero"> 
        <button type="submit">Ajouter</button>
    </form>
</template>
<script>
export default {
    name: 'FormPerso',
    props:[
        'personnages'
        ],
    data(){
        return {
            error: false,
            formPerso:{
                pseudo:'',
                numero: null
            },
        }
    },
    methods:{
            
            ajoutPerso(){
                console.log("bonjour")
                if(this.formPerso.pseudo == "" || this.formPerso.numero == null)return
                    
                if(this.formPerso.pseudo.length <2){
                    this.error = true
                    return
                }
                if(this.personnages.find(personnage => personnage.pseudo == this.formPerso.pseudo))return
                this.$store.commit('ajoutPerso', this.formPerso)

                this.error = false
    
                this.formPerso = {
                    pseudo: "",
                    numero: ""
                }
            }  
    }
}
</script>
<style scoped>
    form {
        background-color: rgb(255, 228, 182);
        width: 20vw;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 30px;
        border-radius: 10px;
    }

    input {
        padding: 10px;
        border-radius: 10px;
        border: none;
    }

    button {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #2c3e50;
        color: white;
        font-weight: bold;
    }
    .error{
        color: red;
    }
   
</style>