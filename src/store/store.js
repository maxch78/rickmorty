import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    datosApi: [],
    favorito: [],
    opiniones:[],
    NumPag: [1,2,3,4]
  },
  getters: {

    enviarDatosApi(state){
      return state.datosApi;
    },
    enviarFavoritos(state){
      return state.favorito;
    },
    enviarOpiniones(state){
      return state.opiniones;
    },
  },
  mutations: {

    mutandoDatosApi(state,datos){
      for (let i = 0; i < datos.length; i++) {
        datos[i].favorito = false;
      }
      state.datosApi = datos;
    },

    mutandoFavoritos(state,valor){
      let resultado = state.datosApi.find(result => result.id == valor.id);

      state.favorito.push(resultado)
    },

    mutandoEliminarFavorito(state, index){
      state.favorito.splice(index, 1);
    },

    mutandoOpcion(state, opinion){      
      state.opiniones.push(opinion);
    },

    mutandoEliminarOpinion(state, index){
      state.opiniones.splice(index, 1);
    },

    mutandoEditarOpnion(state, juego){
      if (juego != undefined) {
        let item = state.opiniones.find(result => result.id == juego.id)
        if (item != undefined) {
          item.id = juego.id;
          item.nombre = juego.nombreUsuario;
          item.textoArea = juego.opinionJuego;
          item.nombreGame = juego.nombreJuego;          
        }else {
          console.log("el juego no existe")
        }
      } else {
        console.log("no se encuentra la carga del juego")
      }
    }
  },
  actions: {

    async llamadoAPI({commit}){
      try {
        let result = await fetch('https://rickandmortyapi.com/api/character/?page=2')
        let datos = await result.json();
        commit('mutandoDatosApi',datos.results);
      } catch (error) {
        console.error(error);
      }
    },

    agregandoFavoritos({commit},valor){
      commit('mutandoFavoritos',valor)
      router.push({name: 'Favoritos'})
    },

    borrandoFavoritos({commit}, index){
      commit('mutandoEliminarFavorito', index);
    },

    agregarOpinion({commit}, opinion){
      commit('mutandoOpcion', opinion)
    },

    eliminarOpinion({commit}, index){
      commit('mutandoEliminarOpinion', index)
    },

    guardarOpinion({commit},juego){
      commit('mutandoEditarOpnion',juego)
    },

  }
})
