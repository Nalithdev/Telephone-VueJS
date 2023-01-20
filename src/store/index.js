import { createStore } from 'vuex'

export default createStore({
  state:{
    date: new Date().toLocaleDateString,
    
    personnages : [  
      {
      pseudo: 'Nico',
      numero: '05'
    }  
  ],
  called:[
    
  ],

  },
  getters:{},
  mutations:{
    ajoutPerso(state, personnage){
      state.personnages.push(personnage) 
    },
    call(state , personne){
      
      state.called.push(personne)

      console.log(state.called)
    }
  },
  actions: {
  },
  modules: {
  }
})