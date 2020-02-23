
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
      beerName: '',
  },
  mutations: {
    updateBeername (state, beerName) {
      state.beerName = beerName
    }
  },
  getters: {
    beerName: state => state.beerName
  }
})
